/* Sala de Dados no quadro da Diligência: a cena montada em modo embed —
   sem barra de playback, sem fundo de palco, sem auto-escala. O quadro nasce
   1080x1080 e é o host que o escala por CSS para preencher o quadrado, e o
   reinício vai pelo caminho de tempo do próprio palco (resetSignal). */
const VDR_FALLBACK = '[{"name":"Chegada","dur":2.4},{"name":"Centralização","dur":2.2},{"name":"Alçadas","dur":3.4},{"name":"Rastreabilidade","dur":4.0},{"name":"Prontidão","dur":3.0}]';

function VdrEmbed(props) {
  const CompositionStage = window.CompositionStage;
  const VdrPiece = window.VdrPiece;
  const ref = React.useRef(null);
  const boxRef = React.useRef(null);
  const [run, setRun] = React.useState(0);

  React.useEffect(() => {
    const onRestart = () => setRun((n) => n + 1);
    window.addEventListener('maiq-vdr-restart', onRestart);
    return () => window.removeEventListener('maiq-vdr-restart', onRestart);
  }, []);

  React.useEffect(() => {
    const root = ref.current, box = boxRef.current;
    if (!root || !box) return;
    const fit = () => {
      // preenche pelo maior lado; o excedente é cortado pelo overflow
      const s = Math.max(root.clientWidth, root.clientHeight) / 1080;
      box.style.transform = 'translate(-50%, -50%) scale(' + s + ')';
    };
    fit();
    if (!window.ResizeObserver) return;
    const ro = new ResizeObserver(fit);
    ro.observe(root);
    return () => ro.disconnect();
  }, []);

  if (!CompositionStage || !VdrPiece) return null;
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#143737' }}>
      <div ref={boxRef} style={{
        position: 'absolute', left: '50%', top: '50%', width: 1080, height: 1080,
        transformOrigin: 'center', transform: 'translate(-50%, -50%)',
      }}>
        <CompositionStage embed resetSignal={run} persistKey="maiq-vdr"
          width={1080} height={1080} bg="#143737"
          scenes={window.OM_SCENES || VDR_FALLBACK} playback={'{"mode":"loop"}'}>
          <VdrPiece accent={props.accent || '#91A398'} showGhosts={props.showGhosts !== false} />
        </CompositionStage>
      </div>
    </div>
  );
}
window.VdrEmbed = VdrEmbed;
