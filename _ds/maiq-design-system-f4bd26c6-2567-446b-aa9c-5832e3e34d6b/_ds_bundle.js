/* @ds-bundle: {"format":4,"namespace":"MaiqDesignSystem_f4bd26","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Overline","sourcePath":"components/core/Overline.jsx"},{"name":"ChatBubble","sourcePath":"components/data/ChatBubble.jsx"},{"name":"ChatComposer","sourcePath":"components/data/ChatComposer.jsx"},{"name":"DealStageTrack","sourcePath":"components/data/DealStageTrack.jsx"},{"name":"DimensionBar","sourcePath":"components/data/DimensionBar.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressRing","sourcePath":"components/feedback/ProgressRing.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioOption","sourcePath":"components/forms/RadioOption.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"InsightCard","sourcePath":"components/marketing/InsightCard.jsx"},{"name":"PlanCard","sourcePath":"components/marketing/PlanCard.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"ServiceItem","sourcePath":"components/marketing/ServiceItem.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d90c08c89695","components/core/Button.jsx":"9c27b8b8f55b","components/core/Card.jsx":"2c74b8f1f221","components/core/IconButton.jsx":"6af2e4c4696d","components/core/Logo.jsx":"e64fe6714b76","components/core/Overline.jsx":"acdd0ddcee9f","components/data/ChatBubble.jsx":"bec77cf0c834","components/data/ChatComposer.jsx":"52991e9b8148","components/data/DealStageTrack.jsx":"0fa4e893aba5","components/data/DimensionBar.jsx":"492bf5f92929","components/feedback/Dialog.jsx":"ef1082baed5b","components/feedback/ProgressRing.jsx":"bff34a1425ef","components/feedback/Toast.jsx":"4b4f15f16ff9","components/feedback/Tooltip.jsx":"8dff4f38a81d","components/forms/Checkbox.jsx":"bfd5ce8adfb2","components/forms/Field.jsx":"5162a190ed8c","components/forms/Input.jsx":"054e1383e085","components/forms/RadioOption.jsx":"dde7cb23e827","components/forms/Select.jsx":"b03af94e1c63","components/forms/Switch.jsx":"3718042aa344","components/forms/Textarea.jsx":"dfbd0dc64641","components/marketing/InsightCard.jsx":"6890f42c2b99","components/marketing/PlanCard.jsx":"e67bff2afa93","components/marketing/SectionHeading.jsx":"c4bf889f0898","components/marketing/ServiceItem.jsx":"40de1b3b143a","components/marketing/StatBlock.jsx":"052bc08593f5","components/navigation/SidebarNav.jsx":"80b3446e5946","components/navigation/Tabs.jsx":"383c788f337c","components/navigation/TopBar.jsx":"12aba0d169b9","ui_kits/plataforma/AuthScreen.jsx":"143095e790f9","ui_kits/plataforma/ChatsScreen.jsx":"6e014dc599a1","ui_kits/plataforma/MaiChatScreen.jsx":"8225b07e7c42","ui_kits/plataforma/PlatformApp.jsx":"4800197befae","ui_kits/plataforma/QuarpxScreen.jsx":"e32efabb54dc","ui_kits/plataforma/appShared.jsx":"22b9f68fd5d7","ui_kits/site/HomeScreen.jsx":"7ec084031831","ui_kits/site/InsightsScreen.jsx":"744a96d779dd","ui_kits/site/MetodoScreen.jsx":"e30a4d13c828","ui_kits/site/PlanosScreen.jsx":"bec055efa7d0","ui_kits/site/SiteApp.jsx":"161cdec14e01","ui_kits/site/shared.jsx":"8ec936cbe5f1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MaiqDesignSystem_f4bd26 = window.MaiqDesignSystem_f4bd26 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bg: "rgba(233,224,209,.10)",
    fg: "var(--text-secondary)",
    bd: "var(--border-hair)"
  },
  accent: {
    bg: "rgba(51,96,90,.35)",
    fg: "var(--text-primary)",
    bd: "rgba(145,163,152,.45)"
  },
  wood: {
    bg: "rgba(104,70,43,.30)",
    fg: "var(--wood-300)",
    bd: "rgba(196,165,127,.40)"
  },
  positive: {
    bg: "rgba(78,143,110,.22)",
    fg: "#8FC7A9",
    bd: "rgba(78,143,110,.45)"
  },
  attention: {
    bg: "rgba(166,130,47,.22)",
    fg: "#D8BC72",
    bd: "rgba(166,130,47,.45)"
  },
  critical: {
    bg: "rgba(158,74,49,.22)",
    fg: "#D89478",
    bd: "rgba(158,74,49,.45)"
  }
};
function Badge({
  tone = "neutral",
  children,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 24,
      padding: "0 10px",
      borderRadius: "var(--radius-sm)",
      background: t.bg,
      color: t.fg,
      border: "1px solid " + t.bd,
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: ".01em",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  fontFamily: "var(--font-core)",
  fontWeight: "var(--fw-medium)",
  border: "1px solid transparent",
  borderRadius: "var(--radius-pill)",
  cursor: "pointer",
  textDecoration: "none",
  transition: "var(--transition-ui)",
  whiteSpace: "nowrap"
};
const sizes = {
  sm: {
    height: 34,
    padding: "0 16px",
    fontSize: "var(--fs-body-sm)"
  },
  md: {
    height: 42,
    padding: "0 22px",
    fontSize: "var(--fs-body-sm)"
  },
  lg: {
    height: 52,
    padding: "0 30px",
    fontSize: "var(--fs-body)"
  }
};
const variants = {
  primary: {
    background: "var(--action-primary-bg)",
    color: "var(--action-primary-fg)"
  },
  secondary: {
    background: "var(--action-secondary-bg)",
    color: "var(--action-secondary-fg)",
    borderColor: "var(--action-secondary-border)"
  },
  ghost: {
    background: "transparent",
    color: "var(--action-ghost-fg)"
  },
  accent: {
    background: "var(--action-accent-bg)",
    color: "var(--action-accent-fg)"
  }
};
const hovers = {
  primary: {
    background: "var(--action-primary-bg-hover)"
  },
  secondary: {
    background: "var(--action-ghost-bg-hover)",
    borderColor: "var(--text-primary)"
  },
  ghost: {
    background: "var(--action-ghost-bg-hover)",
    color: "var(--text-primary)"
  },
  accent: {
    background: "var(--green-500)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "end",
  disabled = false,
  fullWidth = false,
  as = "button",
  href,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const Tag = href ? "a" : as;
  const merged = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(active && !disabled ? {
      transform: "translateY(1px)"
    } : null),
    ...(disabled ? {
      opacity: .42,
      cursor: "not-allowed"
    } : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...style
  };
  return React.createElement(Tag, {
    href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    style: merged,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    ...rest
  }, icon && iconPosition === "start" ? React.createElement("span", {
    key: "i",
    style: {
      display: "flex"
    }
  }, icon) : null, children, icon && iconPosition === "end" ? React.createElement("span", {
    key: "e",
    style: {
      display: "flex"
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  interactive = false,
  padding = "var(--space-7)",
  tone = "default",
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = tone === "inset" ? "var(--surface-inset)" : tone === "elevated" ? "var(--bg-elevated)" : "var(--surface-card)";
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: interactive && hover ? "var(--surface-card-hover)" : bg,
      border: "1px solid " + (interactive && hover ? "var(--border-mid)" : "var(--border-hair)"),
      borderRadius: "var(--radius-lg)",
      padding,
      boxShadow: interactive && hover ? "var(--shadow-2)" : "var(--shadow-1)",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      cursor: interactive ? "pointer" : "default",
      transition: "var(--transition-surface)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  children,
  size = 40,
  variant = "ghost",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const fills = {
    ghost: "transparent",
    outline: "transparent",
    solid: "var(--surface-card)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      color: hover ? "var(--text-primary)" : "var(--text-muted)",
      background: hover ? "var(--action-ghost-bg-hover)" : fills[variant],
      border: variant === "ghost" ? "1px solid transparent" : "1px solid var(--border-hair)",
      transition: "var(--transition-ui)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const files = {
  branco: "assets/logo-maiq-branco.png",
  botanico: "assets/logo-maiq-verde-botanico.png",
  madeira: "assets/logo-maiq-madeira.png",
  menta: "assets/logo-maiq-menta.png",
  "app-escuro": "assets/app-icon-escuro.png",
  "app-claro": "assets/app-icon-claro.png"
};
function Logo({
  variant = "branco",
  height = 32,
  assetBase = "",
  style,
  ...rest
}) {
  const src = (assetBase ? assetBase.replace(/\/$/, "") + "/" : "") + files[variant];
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "Maiq",
    height: height,
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Overline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Overline({
  children,
  tone = "muted",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontSize: "var(--fs-overline)",
      lineHeight: "var(--lh-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      fontWeight: "var(--fw-medium)",
      color: tone === "accent" ? "var(--mint)" : tone === "wood" ? "var(--wood-300)" : "var(--text-muted)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Overline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Overline.jsx", error: String((e && e.message) || e) }); }

// components/data/ChatBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChatBubble({
  role = "assistant",
  children,
  avatar,
  timestamp,
  style,
  ...rest
}) {
  const user = role === "user";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: user ? "flex-end" : "flex-start",
      ...style
    }
  }, rest), !user && avatar ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none"
    }
  }, avatar) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "78%",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: user ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderRadius: "var(--radius-md)",
      background: user ? "var(--action-accent-bg)" : "var(--surface-card)",
      border: "1px solid " + (user ? "transparent" : "var(--border-hair)"),
      color: user ? "var(--action-accent-fg)" : "var(--text-secondary)",
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.6,
      whiteSpace: "pre-wrap"
    }
  }, children), timestamp ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, timestamp) : null), user && avatar ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none"
    }
  }, avatar) : null);
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/data/ChatComposer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChatComposer({
  value = "",
  placeholder = "Qual é a sua dúvida sobre M&A?",
  disabled = false,
  onChange,
  onSubmit,
  submitLabel = "Enviar",
  suggestions = [],
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), suggestions.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, suggestions.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => onChange && onChange(s),
    style: {
      background: "transparent",
      border: "1px solid var(--border-hair)",
      borderRadius: "var(--radius-pill)",
      padding: "6px 14px",
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      cursor: "pointer",
      transition: "var(--transition-ui)"
    }
  }, s))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-end",
      padding: "var(--space-3)",
      background: "var(--surface-inset)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid " + (focus ? "var(--border-focus)" : "var(--border-hair)"),
      boxShadow: focus ? "var(--glow-focus)" : "none",
      transition: "var(--transition-ui)"
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    rows: 1,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: e => onChange && onChange(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        onSubmit && onSubmit();
      }
    },
    style: {
      flex: 1,
      background: "transparent",
      border: "none",
      outline: "none",
      resize: "none",
      color: "var(--text-primary)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.6,
      padding: "8px 6px",
      minHeight: 38
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onSubmit,
    disabled: disabled || !value.trim(),
    "aria-label": submitLabel,
    style: {
      height: 38,
      padding: "0 18px",
      borderRadius: "var(--radius-pill)",
      border: "none",
      background: "var(--action-primary-bg)",
      color: "var(--action-primary-fg)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-medium)",
      cursor: disabled || !value.trim() ? "not-allowed" : "pointer",
      opacity: disabled || !value.trim() ? .4 : 1,
      transition: "var(--transition-ui)"
    }
  }, submitLabel)));
}
Object.assign(__ds_scope, { ChatComposer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ChatComposer.jsx", error: String((e && e.message) || e) }); }

// components/data/DealStageTrack.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DealStageTrack({
  stages = [],
  activeIndex = 0,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "stretch",
      gap: 0,
      ...style
    }
  }, rest), stages.map((s, i) => {
    const done = i < activeIndex,
      active = i === activeIndex;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
        paddingRight: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 3,
        background: done ? "var(--mint)" : active ? "var(--botanic)" : "var(--border-hair)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--fs-overline)",
        letterSpacing: "var(--ls-overline)",
        textTransform: "uppercase",
        color: active ? "var(--mint)" : "var(--text-muted)"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--fs-body-sm)",
        fontWeight: "var(--fw-medium)",
        color: active || done ? "var(--text-primary)" : "var(--text-muted)"
      }
    }, typeof s === "string" ? s : s.label), typeof s !== "string" && s.note ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--fs-caption)",
        lineHeight: 1.5,
        color: "var(--text-muted)"
      }
    }, s.note) : null);
  }));
}
Object.assign(__ds_scope, { DealStageTrack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DealStageTrack.jsx", error: String((e && e.message) || e) }); }

// components/data/DimensionBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DimensionBar({
  label,
  value = 0,
  max = 100,
  note,
  tone = "accent",
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = {
    accent: "var(--mint)",
    positive: "var(--state-positive)",
    attention: "var(--state-attention)",
    critical: "var(--state-critical)",
    wood: "var(--wood-400)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .6
    }
  }, "/", max))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "var(--surface-inset)",
      border: "1px solid var(--border-hair)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      background: fill,
      transition: "width var(--dur-4) var(--ease-out)"
    }
  })), note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, note) : null);
}
Object.assign(__ds_scope, { DimensionBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DimensionBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  description,
  onClose,
  footer,
  width = 480,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(10,29,29,.72)",
      backdropFilter: "blur(6px)"
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: "relative",
      width: "100%",
      maxWidth: width,
      background: "var(--bg-elevated)",
      border: "1px solid var(--border-mid)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-7)",
      boxShadow: "var(--shadow-3)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), title || description ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-primary)"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.55,
      color: "var(--text-muted)"
    }
  }, description) : null) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressRing({
  value = 0,
  size = 140,
  thickness = 8,
  label,
  caption,
  style,
  ...rest
}) {
  const r = (size - thickness) / 2,
    c = 2 * Math.PI * r,
    off = c * (1 - Math.max(0, Math.min(100, value)) / 100);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--border-hair)",
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--mint)",
    strokeWidth: thickness,
    strokeLinecap: "butt",
    strokeDasharray: c,
    strokeDashoffset: off,
    style: {
      transition: "stroke-dashoffset var(--dur-4) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: size * 0.26,
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums",
      letterSpacing: "-.02em"
    }
  }, label !== undefined ? label : Math.round(value)), caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, caption) : null));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bd: "var(--border-mid)",
    bar: "var(--mint)"
  },
  positive: {
    bd: "rgba(78,143,110,.5)",
    bar: "var(--state-positive)"
  },
  critical: {
    bd: "rgba(158,74,49,.5)",
    bar: "var(--state-critical)"
  }
};
function Toast({
  title,
  description,
  tone = "neutral",
  onClose,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "flex-start",
      width: 360,
      background: "var(--bg-elevated)",
      border: "1px solid " + t.bd,
      borderRadius: "var(--radius-md)",
      padding: "14px 16px",
      boxShadow: "var(--shadow-2)",
      overflow: "hidden",
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 3,
      background: t.bar
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-primary)"
    }
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      lineHeight: 1.5,
      color: "var(--text-muted)"
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      fontSize: 16,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  content,
  side = "right",
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    right: {
      left: "calc(100% + 10px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    left: {
      right: "calc(100% + 10px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    top: {
      bottom: "calc(100% + 10px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 10px)",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, rest), children, show ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      ...pos,
      zIndex: 70,
      whiteSpace: "nowrap",
      background: "var(--sand-200)",
      color: "var(--deep-green)",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-medium)",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-2)",
      ...style
    }
  }, content) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  label,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: "none",
      marginTop: 1,
      borderRadius: "var(--radius-xs)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "var(--transition-ui)",
      background: checked ? "var(--action-primary-bg)" : "var(--surface-inset)",
      border: "1px solid " + (checked ? "var(--action-primary-bg)" : "var(--border-mid)")
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 5,
      borderLeft: "2px solid var(--action-primary-fg)",
      borderBottom: "2px solid var(--action-primary-fg)",
      rotate: "-45deg",
      marginTop: -2
    }
  }) : null), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.5,
      color: "var(--text-secondary)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-secondary)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--state-critical)",
      marginLeft: 4
    }
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--state-critical)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid = false,
  icon,
  style,
  onFocus,
  onBlur,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      ...{
        width: "100%",
        height: 44,
        padding: "0 14px",
        background: "var(--surface-inset)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-core)",
        fontSize: "var(--fs-body-sm)",
        borderRadius: "var(--radius-sm)",
        border: "1px solid " + (invalid ? "var(--state-critical)" : focus ? "var(--border-focus)" : "var(--border-hair)"),
        boxShadow: focus ? "var(--glow-focus)" : "none",
        outline: "none",
        transition: "var(--transition-ui)"
      },
      ...(icon ? {
        paddingLeft: 40
      } : null),
      ...style
    }
  }, rest));
  if (!icon) return field;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      display: "flex",
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }, icon), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioOption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RadioOption({
  selected = false,
  label,
  description,
  onSelect,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onSelect,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      gap: "var(--space-3)",
      padding: "14px 16px",
      cursor: "pointer",
      borderRadius: "var(--radius-md)",
      transition: "var(--transition-ui)",
      background: selected ? "rgba(51,96,90,.28)" : hover ? "var(--action-ghost-bg-hover)" : "transparent",
      border: "1px solid " + (selected ? "var(--mint)" : "var(--border-hair)"),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "none",
      marginTop: 2,
      borderRadius: "var(--radius-pill)",
      border: "1px solid " + (selected ? "var(--mint)" : "var(--border-mid)"),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, selected ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "var(--radius-pill)",
      background: "var(--mint)"
    }
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-primary)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--fs-caption)",
      lineHeight: 1.5,
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, description) : null));
}
Object.assign(__ds_scope, { RadioOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioOption.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  invalid = false,
  style,
  onFocus,
  onBlur,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      width: "100%",
      height: 44,
      padding: "0 38px 0 14px",
      appearance: "none",
      background: "var(--surface-inset)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body-sm)",
      borderRadius: "var(--radius-sm)",
      outline: "none",
      cursor: "pointer",
      border: "1px solid " + (invalid ? "var(--state-critical)" : focus ? "var(--border-focus)" : "var(--border-hair)"),
      boxShadow: focus ? "var(--glow-focus)" : "none",
      transition: "var(--transition-ui)",
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === "string" ? o : o.value,
      l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      width: 8,
      height: 8,
      borderRight: "1.5px solid var(--text-muted)",
      borderBottom: "1.5px solid var(--text-muted)",
      transformOrigin: "center",
      rotate: "45deg",
      marginTop: -3
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  label,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 42,
      height: 24,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      padding: 2,
      background: checked ? "var(--botanic)" : "var(--surface-inset)",
      border: "1px solid " + (checked ? "var(--mint)" : "var(--border-mid)"),
      display: "flex",
      justifyContent: checked ? "flex-end" : "flex-start",
      alignItems: "center",
      transition: "var(--transition-ui)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--sand-100)" : "var(--text-muted)",
      transition: "var(--transition-ui)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-secondary)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid = false,
  rows = 4,
  style,
  onFocus,
  onBlur,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      width: "100%",
      padding: "12px 14px",
      background: "var(--surface-inset)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.55,
      resize: "vertical",
      borderRadius: "var(--radius-sm)",
      outline: "none",
      transition: "var(--transition-ui)",
      border: "1px solid " + (invalid ? "var(--state-critical)" : focus ? "var(--border-focus)" : "var(--border-hair)"),
      boxShadow: focus ? "var(--glow-focus)" : "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/InsightCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function InsightCard({
  title,
  source,
  date,
  mark,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noreferrer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      padding: "var(--space-6)",
      textDecoration: "none",
      borderRadius: "var(--radius-lg)",
      background: hover ? "var(--surface-card-hover)" : "var(--surface-card)",
      border: "1px solid " + (hover ? "var(--border-mid)" : "var(--border-hair)"),
      boxShadow: hover ? "var(--shadow-2)" : "var(--shadow-1)",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "var(--transition-surface)",
      ...style
    }
  }, rest), mark ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      display: "flex",
      alignItems: "center"
    }
  }, mark) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h4)",
      lineHeight: 1.28,
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-primary)",
      minHeight: "2.6em"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--border-hair)",
      display: "flex",
      gap: 8,
      alignItems: "center",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, source ? /*#__PURE__*/React.createElement("span", null, source) : null, source && date ? /*#__PURE__*/React.createElement("span", null, "\xB7") : null, date ? /*#__PURE__*/React.createElement("span", null, date) : null));
}
Object.assign(__ds_scope, { InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/InsightCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PlanCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PlanCard({
  name,
  price,
  priceSuffix,
  description,
  features = [],
  highlight = false,
  action,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      padding: "var(--space-8) var(--space-7)",
      background: highlight ? "var(--bg-elevated)" : "var(--surface-card)",
      border: "1px solid " + (highlight ? "var(--mint)" : hover ? "var(--border-mid)" : "var(--border-hair)"),
      borderRadius: "var(--radius-lg)",
      boxShadow: hover ? "var(--shadow-2)" : "var(--shadow-1)",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "var(--transition-surface)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-primary)"
    }
  }, name), highlight ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color: "var(--mint)"
    }
  }, "Recomendado") : null), price ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h2)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }
  }, price), priceSuffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, priceSuffix) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px dotted var(--border-mid)"
    }
  }), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: 0
    }
  }, description) : null, features.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, features.map((ft, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.55,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--mint)",
      flex: "none"
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", null, ft)))) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-3)"
    }
  }, action) : null);
}
Object.assign(__ds_scope, { PlanCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PlanCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  overline,
  title,
  lead,
  align = "left",
  size = "h2",
  style,
  ...rest
}) {
  const fs = {
    h1: "var(--fs-h1)",
    h2: "var(--fs-h2)",
    display: "var(--fs-display-2)"
  }[size];
  const lh = {
    h1: "var(--lh-h1)",
    h2: "var(--lh-h2)",
    display: "var(--lh-display-2)"
  }[size];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, rest), overline ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-overline)",
      lineHeight: "var(--lh-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-muted)"
    }
  }, overline) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: fs,
      lineHeight: lh,
      letterSpacing: "-.015em",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-primary)",
      margin: 0,
      maxWidth: "22ch"
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      lineHeight: "var(--lh-body-lg)",
      color: "var(--text-muted)",
      maxWidth: "var(--measure-body)",
      margin: 0
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceItem({
  label,
  icon,
  description,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-4)",
      textAlign: "center",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 80,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: hover ? "scale(1.06)" : "scale(1)",
      transition: "transform var(--dur-3) var(--ease-out)"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-lg)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-primary)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.55,
      color: "var(--text-muted)",
      margin: 0,
      maxWidth: "24ch"
    }
  }, description) : null);
}
Object.assign(__ds_scope, { ServiceItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceItem.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  description,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-metric)",
      lineHeight: "var(--lh-metric)",
      letterSpacing: "var(--ls-metric)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums lining-nums"
    }
  }, value), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-primary)"
    }
  }, label) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: 0,
      maxWidth: "32ch"
    }
  }, description) : null);
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SidebarNav({
  items = [],
  activeId,
  collapsed = false,
  footerItems = [],
  onSelect,
  style,
  ...rest
}) {
  const row = it => {
    const active = it.id === activeId;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onSelect && onSelect(it.id),
      title: collapsed ? it.label : undefined,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        width: "100%",
        height: 48,
        padding: collapsed ? 0 : "0 20px",
        justifyContent: collapsed ? "center" : "flex-start",
        background: active ? "rgba(233,224,209,.10)" : "transparent",
        border: "none",
        borderRight: active ? "2px solid var(--mint)" : "2px solid transparent",
        color: active ? "var(--text-primary)" : "var(--text-muted)",
        cursor: "pointer",
        fontFamily: "var(--font-core)",
        fontSize: "var(--fs-body-sm)",
        fontWeight: "var(--fw-medium)",
        transition: "var(--transition-ui)",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flex: "none"
      }
    }, it.icon), collapsed ? null : /*#__PURE__*/React.createElement("span", null, it.label));
  };
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      width: collapsed ? 68 : 248,
      flex: "none",
      height: "100%",
      background: "var(--bg-page-deep)",
      borderRight: "1px solid var(--border-hair)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "var(--space-4) 0",
      transition: "width var(--dur-3) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, items.map(row)), footerItems.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      borderTop: "1px solid var(--border-hair)",
      paddingTop: "var(--space-4)"
    }
  }, footerItems.map(row)) : null);
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  activeId,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid var(--border-hair)",
      ...style
    }
  }, rest), tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => onChange && onChange(t.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "0 0 12px",
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-medium)",
      color: t.id === activeId ? "var(--text-primary)" : "var(--text-muted)",
      borderBottom: "2px solid " + (t.id === activeId ? "var(--mint)" : "transparent"),
      marginBottom: -1,
      transition: "var(--transition-ui)"
    }
  }, t.label, t.count !== undefined ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      color: "var(--text-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, t.count) : null)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopBar({
  brand,
  links = [],
  activeLink,
  actions,
  transparent = false,
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-7)",
      height: 76,
      padding: "0 var(--gutter-page-lg)",
      background: transparent ? "transparent" : "rgba(13,36,35,.72)",
      backdropFilter: transparent ? "none" : "var(--blur-veil)",
      borderBottom: transparent ? "1px solid transparent" : "1px solid var(--border-hair)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-9)"
    }
  }, brand, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onNavigate && onNavigate(l.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "6px 0",
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-medium)",
      color: l.id === activeLink ? "var(--text-primary)" : "var(--text-muted)",
      borderBottom: l.id === activeLink ? "1px solid var(--mint)" : "1px solid transparent",
      transition: "var(--transition-ui)"
    }
  }, l.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, actions));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/AuthScreen.jsx
try { (() => {
function AuthScreen({
  onLogin
}) {
  const [email, setEmail] = React.useState("ana@grupobandeirantes.com.br");
  const [pw, setPw] = React.useState("••••••••••");
  const [mode, setMode] = React.useState("entrar");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-page)",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "48px 56px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(110% 80% at 15% 85%, rgba(51,96,90,.55) 0%, rgba(20,55,55,0) 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "branco",
    height: 28,
    assetBase: "../.."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "22ch"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display-2)",
      lineHeight: "var(--lh-display-2)",
      letterSpacing: "var(--ls-display-2)",
      fontWeight: 600,
      color: "var(--text-primary)",
      margin: 0
    }
  }, "M&A como disciplina cont\xEDnua."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body)",
      lineHeight: 1.65,
      color: "var(--text-muted)",
      marginTop: 20,
      maxWidth: "34ch"
    }
  }, "Entre para acompanhar o score QUARPX\xAE da sua empresa, conversar com o M&AI e retomar as suas conversas.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "M\xE9todo"), /*#__PURE__*/React.createElement(Badge, null, "Tecnologia"), /*#__PURE__*/React.createElement(Badge, {
    tone: "wood"
  }, "Capital"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-page-deep)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 400,
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, null, "\xC1rea do cliente"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h2)",
      fontWeight: 600,
      color: "var(--text-primary)",
      margin: "12px 0 0"
    }
  }, mode === "entrar" ? "Entrar na plataforma" : "Criar sua conta")), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      id: "entrar",
      label: "Entrar"
    }, {
      id: "criar",
      label: "Criar conta"
    }],
    activeId: mode,
    onChange: setMode
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, mode === "criar" ? /*#__PURE__*/React.createElement(Field, {
    label: "Nome",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Digite seu nome completo"
  })) : null, /*#__PURE__*/React.createElement(Field, {
    label: "E-mail",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: email,
    onChange: e => setEmail(e.target.value),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "Mail",
      size: 16
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Senha",
    required: true,
    hint: mode === "criar" ? "Mínimo de 8 caracteres." : undefined
  }, /*#__PURE__*/React.createElement(Input, {
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value)
  })), mode === "entrar" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    label: "Manter conectado"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, "Esqueci a senha")) : /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    label: "Aceito os termos de uso e a pol\xEDtica de privacidade"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: onLogin,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    })
  }, mode === "entrar" ? "Entrar" : "Criar conta")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      textAlign: "center",
      margin: 0
    }
  }, "Ainda n\xE3o \xE9 cliente? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--text-secondary)"
    }
  }, "Fale com um especialista"), "."))));
}
window.AuthScreen = AuthScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/AuthScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/ChatsScreen.jsx
try { (() => {
const CONVS = [{
  title: "Aquisição do concorrente regional",
  date: "27 ago 2026",
  msgs: 14,
  tag: "Buy side"
}, {
  title: "Governança: conselho consultivo",
  date: "21 ago 2026",
  msgs: 9,
  tag: "Prontidão"
}, {
  title: "Valuation preliminar — múltiplos do setor",
  date: "14 ago 2026",
  msgs: 22,
  tag: "Valuation"
}, {
  title: "Earn-out e estrutura de pagamento",
  date: "02 ago 2026",
  msgs: 6,
  tag: "Transação"
}, {
  title: "Integração: captura de sinergias",
  date: "28 jul 2026",
  msgs: 11,
  tag: "Integração"
}];
function ChatsScreen({
  onOpen
}) {
  const [q, setQ] = React.useState("");
  const [del, setDel] = React.useState(null);
  const rows = CONVS.filter(c => c.title.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "32px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 960,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Arquivo",
    title: "Suas conversas",
    size: "h2",
    lead: "Conversas salvas com o M&AI. Retome de onde parou ou arquive o que j\xE1 virou decis\xE3o."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "Search",
      size: 16
    }),
    placeholder: "Buscar conversa",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      width: 240
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "Plus",
      size: 16
    }),
    iconPosition: "start",
    onClick: () => onOpen && onOpen()
  }, "Nova conversa"))), /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: "hidden"
    }
  }, rows.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      padding: "18px 24px",
      borderTop: i ? "1px solid var(--border-hair)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      flex: "none",
      borderRadius: "var(--radius-sm)",
      background: "var(--surface-inset)",
      border: "1px solid var(--border-hair)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MessageSquare",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      fontWeight: 500,
      color: "var(--text-primary)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      marginTop: 3
    }
  }, c.date, " \xB7 ", c.msgs, " mensagens")), /*#__PURE__*/React.createElement(Badge, null, c.tag), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onOpen && onOpen()
  }, "Abrir"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Excluir conversa",
    onClick: () => setDel(c)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Trash2",
    size: 16
  })))), !rows.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "48px 24px",
      textAlign: "center",
      color: "var(--text-muted)",
      fontSize: "var(--fs-body-sm)"
    }
  }, "Nenhuma conversa encontrada para \u201C", q, "\u201D.") : null)), /*#__PURE__*/React.createElement(Dialog, {
    open: !!del,
    title: "Excluir conversa",
    description: del ? "“" + del.title + "” será removida do seu arquivo. Esta ação não pode ser desfeita." : "",
    onClose: () => setDel(null),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDel(null)
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setDel(null),
      style: {
        background: "var(--state-critical)",
        color: "var(--sand-100)"
      }
    }, "Excluir"))
  }));
}
window.ChatsScreen = ChatsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/ChatsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/MaiChatScreen.jsx
try { (() => {
const SEED = [{
  role: "assistant",
  text: "Olá, somos o Maiq. Sou o M&AI, o assistente da plataforma para fusões, aquisições e integrações. Posso explicar método, jornada e prontidão — e puxar o seu score QUARPX® quando fizer sentido.",
  t: "14:02"
}, {
  role: "user",
  text: "Estamos avaliando comprar um concorrente regional. Por onde começo?",
  t: "14:03"
}, {
  role: "assistant",
  text: "Antes da conversa com o alvo, três frentes:\n\n01. Tese — onde essa aquisição se encaixa na sua estratégia de 3 anos.\n02. Prontidão — o seu QUARPX aponta Governança em 19/100, o que costuma travar a diligência.\n03. Estrutura de capital — como o pagamento se sustenta no seu fluxo atual.\n\nQuer que eu monte um roteiro para a primeira reunião do Conselho Consultivo?",
  t: "14:03"
}];
function MaiChatScreen() {
  const [msgs, setMsgs] = React.useState(SEED);
  const [val, setVal] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const send = () => {
    if (!val.trim()) return;
    const q = val.trim();
    setMsgs(m => [...m, {
      role: "user",
      text: q,
      t: "14:07"
    }]);
    setVal("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, {
        role: "assistant",
        t: "14:07",
        text: "Registrado. Um M&A não termina na assinatura: recomendo tratar integração e captura de sinergias já no desenho da transação. Posso abrir o playbook de integração da sua dimensão mais fraca?"
      }]);
    }, 1400);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "32px 40px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      width: "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement(ChatBubble, {
    key: i,
    role: m.role,
    timestamp: m.t,
    avatar: m.role === "assistant" ? /*#__PURE__*/React.createElement(Logo, {
      variant: "app-escuro",
      height: 32,
      assetBase: "../.."
    }) : null
  }, m.text)), typing ? /*#__PURE__*/React.createElement(ChatBubble, {
    role: "assistant",
    avatar: /*#__PURE__*/React.createElement(Logo, {
      variant: "app-escuro",
      height: 32,
      assetBase: "../.."
    })
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 5
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      background: "var(--text-muted)",
      animation: "none",
      opacity: .4 + i * 0.25
    }
  })))) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      padding: "0 40px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(ChatComposer, {
    value: val,
    onChange: setVal,
    onSubmit: send,
    suggestions: ["Como o QUARPX mede prontidão?", "O que é earn-out?", "Como preparar a governança?"]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      textAlign: "center",
      marginTop: 10
    }
  }, "O M&AI apoia a decis\xE3o. N\xE3o substitui a an\xE1lise do especialista respons\xE1vel pelo seu mandato.")))), /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 300,
      flex: "none",
      borderLeft: "1px solid var(--border-hair)",
      padding: 24,
      background: "var(--bg-page-deep)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, null, "Seu contexto"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 48,
    caption: "Prontid\xE3o",
    size: 104,
    thickness: 7
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "attention"
  }, "Maturidade m\xE9dia"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, "Sell side \xB7 6 dimens\xF5es")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-hair)",
      paddingTop: 20,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "Gaps priorit\xE1rios"), /*#__PURE__*/React.createElement(DimensionBar, {
    label: "06. Governan\xE7a",
    value: 19,
    tone: "critical"
  }), /*#__PURE__*/React.createElement(DimensionBar, {
    label: "03. Clientes",
    value: 38,
    tone: "attention"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-hair)",
      paddingTop: 20,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "Pr\xF3ximo passo"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Reuni\xE3o quinzenal com especialista em 04 de setembro, 10h."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    fullWidth: true
  }, "Ver agenda"))));
}
window.MaiChatScreen = MaiChatScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/MaiChatScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/PlatformApp.jsx
try { (() => {
function PlatformApp() {
  const [logged, setLogged] = React.useState(false);
  const [screen, setScreen] = React.useState("mai");
  const [collapsed, setCollapsed] = React.useState(false);
  const [logout, setLogout] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  if (!window.MaiqDesignSystem_f4bd26) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 48,
        fontFamily: "var(--font-body)",
        color: "var(--text-secondary)"
      }
    }, "Bundle do design system ainda n\xE3o compilado (", /*#__PURE__*/React.createElement("code", null, "_ds_bundle.js"), "). Recarregue a p\xE1gina.");
  }
  if (!logged) return /*#__PURE__*/React.createElement(AuthScreen, {
    onLogin: () => setLogged(true)
  });
  const items = [{
    id: "mai",
    label: "M&AI",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "Bot"
    })
  }, {
    id: "chats",
    label: "Chats",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "MessageSquare"
    })
  }, {
    id: "quarpx",
    label: "QUARPX",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "FileText"
    })
  }];
  const footer = [{
    id: "conta",
    label: "Sua Conta",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "User"
    })
  }, {
    id: "logout",
    label: "Logout",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "LogOut"
    })
  }];
  const titles = {
    mai: ["M&AI", "Inteligência artificial aplicada ao M&A"],
    chats: ["Chats", "Conversas salvas com o M&AI"],
    quarpx: ["QUARPX®", "Prontidão da sua empresa por dimensão"],
    conta: ["Sua Conta", "Dados, plano e preferências"]
  };
  const [title, subtitle] = titles[screen] || titles.mai;
  const select = id => {
    if (id === "logout") {
      setLogout(true);
      return;
    }
    setScreen(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      display: "flex",
      alignItems: "center",
      padding: collapsed ? "0 18px" : "0 20px",
      background: "var(--green-950)",
      borderRight: "1px solid var(--border-hair)",
      borderBottom: "1px solid var(--border-hair)"
    }
  }, collapsed ? /*#__PURE__*/React.createElement(Logo, {
    variant: "app-escuro",
    height: 32,
    assetBase: "../.."
  }) : /*#__PURE__*/React.createElement(Logo, {
    variant: "branco",
    height: 22,
    assetBase: "../.."
  })), /*#__PURE__*/React.createElement(SidebarNav, {
    items: items,
    footerItems: footer,
    activeId: screen,
    collapsed: collapsed,
    onSelect: select,
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(AppHeader, {
    title: title,
    subtitle: subtitle,
    onToggleRail: () => setCollapsed(c => !c),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tooltip, {
      content: "Alternar paleta",
      side: "bottom"
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Alternar paleta"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "SunMoon"
    }))), /*#__PURE__*/React.createElement(UserChip, null))
  }), screen === "mai" ? /*#__PURE__*/React.createElement(MaiChatScreen, null) : null, screen === "chats" ? /*#__PURE__*/React.createElement(ChatsScreen, {
    onOpen: () => setScreen("mai")
  }) : null, screen === "quarpx" ? /*#__PURE__*/React.createElement(QuarpxScreen, null) : null, screen === "conta" ? /*#__PURE__*/React.createElement(AccountScreen, null) : null), /*#__PURE__*/React.createElement(Dialog, {
    open: logout,
    title: "Confirmar logout",
    description: "Voc\xEA possui mensagens n\xE3o salvas no M&AI. Deseja salvar antes de sair?",
    onClose: () => setLogout(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setLogout(false)
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => {
        setLogout(false);
        setLogged(false);
      }
    }, "Descartar"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setLogout(false);
        setToast("Conversa salva.");
        setTimeout(() => {
          setToast(null);
          setLogged(false);
        }, 1200);
      }
    }, "Salvar e sair"))
  }), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "positive",
    title: "Conversa salva",
    description: toast,
    onClose: () => setToast(null)
  })) : null);
}
function AccountScreen() {
  const [dark, setDark] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "32px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Conta",
    title: "Sua Conta",
    size: "h2",
    lead: "Dados de contato, plano contratado e prefer\xEAncias de exibi\xE7\xE3o."
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "Ana Ribeiro"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Empresa"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "Grupo Bandeirantes"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "ana@grupobandeirantes.com.br"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Setor"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ["Indústria", "Consumo", "Saúde", "Tecnologia"],
    defaultValue: "Ind\xFAstria"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-hair)",
      paddingTop: 20,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      fontWeight: 500,
      color: "var(--text-primary)"
    }
  }, "Plano Profissional"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, "Reuni\xE3o semanal \xB7 chat ilimitado \xB7 valuation em 02 meses")), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Ativo")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-hair)",
      paddingTop: 20,
      display: "flex",
      gap: 32,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: dark,
    onChange: setDark,
    label: "Paleta escura (18h\u20136h)"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    label: "Receber os Insights por e-mail"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, null, "Salvar altera\xE7\xF5es")))));
}
window.AccountScreen = AccountScreen;
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(PlatformApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/PlatformApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/QuarpxScreen.jsx
try { (() => {
const QUESTIONS = [{
  dim: "DIMENSÃO 06. GOVERNANÇA",
  n: "03 de 12",
  title: "Como as decisões estratégicas são tomadas hoje na empresa?",
  help: "Considere os últimos 12 meses, não a intenção para os próximos.",
  options: [{
    v: "a",
    label: "Centralizadas no fundador",
    desc: "Sem fórum formal; decisões acontecem na operação do dia a dia."
  }, {
    v: "b",
    label: "Comitê informal de sócios",
    desc: "Reuniões acontecem, mas sem pauta, ata ou acompanhamento."
  }, {
    v: "c",
    label: "Conselho consultivo em formação",
    desc: "Fórum definido, membros externos ainda sendo integrados."
  }, {
    v: "d",
    label: "Conselho consultivo em operação",
    desc: "Pauta, ata e acompanhamento de indicadores por reunião."
  }]
}];
const DIMS = [["01. Mercado", 72, "positive"], ["02. Receita", 54, "accent"], ["03. Clientes", 38, "attention"], ["04. Time", 61, "positive"], ["05. Rentabilidade", 47, "accent"], ["06. Governança", 19, "critical"]];
function QuarpxScreen() {
  const [view, setView] = React.useState("score");
  const [ans, setAns] = React.useState("b");
  const q = QUESTIONS[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "32px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      id: "score",
      label: "Score"
    }, {
      id: "questionario",
      label: "Questionário"
    }, {
      id: "roadmap",
      label: "Roadmap"
    }],
    activeId: view,
    onChange: setView
  }), view === "score" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)",
    tone: "elevated",
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 48,
    caption: "Prontid\xE3o",
    size: 176
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "attention"
  }, "Maturidade m\xE9dia"), /*#__PURE__*/React.createElement(Badge, null, "Sell side"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, "Atualizado em 21 ago 2026")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body)",
      lineHeight: 1.65,
      color: "var(--text-secondary)",
      margin: 0,
      maxWidth: "56ch"
    }
  }, "Sua empresa avan\xE7a bem em mercado e time, mas governan\xE7a e base de clientes s\xE3o hoje os principais travamentos para uma dilig\xEAncia. Elevar a dimens\xE3o 06 \xE9 o passo com maior impacto no score."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setView("questionario")
  }, "Continuar question\xE1rio"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setView("roadmap")
  }, "Ver roadmap")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-7)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "Dimens\xF5es avaliadas"), DIMS.map(([l, v, t]) => /*#__PURE__*/React.createElement(DimensionBar, {
    key: l,
    label: l,
    value: v,
    tone: t
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "48",
    label: "Score atual",
    description: "M\xE9dia ponderada das 6 dimens\xF5es respondidas de 13."
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "+40",
    label: "Playbooks dispon\xEDveis",
    description: "Materiais interativos ligados aos gaps do seu score."
  }))))) : null, view === "questionario" ? /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    tone: "accent"
  }, q.dim), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, q.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: "var(--surface-inset)",
      border: "1px solid var(--border-hair)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "25%",
      height: "100%",
      background: "var(--mint)"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h3)",
      lineHeight: 1.25,
      fontWeight: 600,
      color: "var(--text-primary)",
      margin: 0,
      maxWidth: "36ch"
    }
  }, q.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)",
      marginTop: 10
    }
  }, q.help)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, q.options.map(o => /*#__PURE__*/React.createElement(RadioOption, {
    key: o.v,
    selected: ans === o.v,
    onSelect: () => setAns(o.v),
    label: o.label,
    description: o.desc
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      borderTop: "1px solid var(--border-hair)",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowLeft",
      size: 16
    }),
    iconPosition: "start"
  }, "Anterior"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setView("score")
  }, "Salvar e sair"), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 16
    })
  }, "Pr\xF3xima")))) : null, view === "roadmap" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(DealStageTrack, {
    activeIndex: 1,
    stages: [{
      label: "Tese",
      note: "Concluído em jun 2026."
    }, {
      label: "Prontidão",
      note: "Em curso — 6 de 13 dimensões."
    }, {
      label: "Transação",
      note: "Depende do score mínimo de 65."
    }, {
      label: "Integração",
      note: "Playbooks liberados no closing."
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, [["Formar conselho consultivo", "06. Governança", "03 meses", "critical"], ["Mapear concentração de clientes", "03. Clientes", "06 semanas", "attention"], ["Padronizar relatório gerencial", "05. Rentabilidade", "08 semanas", "accent"]].map(([t, d, p, tone]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "var(--space-7)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone === "critical" ? "critical" : tone === "attention" ? "attention" : "accent"
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h4)",
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, "Prazo sugerido: ", p), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    fullWidth: true
  }, "Abrir playbook"))))) : null));
}
window.QuarpxScreen = QuarpxScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/QuarpxScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/appShared.jsx
try { (() => {
const DS = window.MaiqDesignSystem_f4bd26 || {};
const {
  Button,
  IconButton,
  Badge,
  Card,
  Logo,
  Overline,
  SidebarNav,
  Tabs,
  Dialog,
  Tooltip,
  Toast,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  RadioOption,
  Switch,
  ProgressRing,
  DimensionBar,
  ChatBubble,
  ChatComposer,
  DealStageTrack,
  StatBlock,
  SectionHeading
} = DS;
function Icon({
  name,
  size = 18,
  color = "currentColor",
  strokeWidth = 1.75
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide && window.lucide[name]) {
      ref.current.innerHTML = "";
      const n = window.lucide.createElement(window.lucide[name]);
      n.setAttribute("width", size);
      n.setAttribute("height", size);
      n.setAttribute("stroke", color);
      n.setAttribute("stroke-width", strokeWidth);
      ref.current.appendChild(n);
    }
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "flex"
    }
  });
}
function AppHeader({
  title,
  subtitle,
  actions,
  onToggleRail
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      flex: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      padding: "0 24px",
      background: "var(--bg-page-deep)",
      borderBottom: "1px solid var(--border-hair)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Alternar menu",
    onClick: onToggleRail
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "PanelLeft"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h4)",
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, subtitle) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, actions));
}
function UserChip({
  name = "Ana Ribeiro",
  role = "Sócia · Grupo Bandeirantes"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "6px 14px 6px 6px",
      border: "1px solid var(--border-hair)",
      borderRadius: "var(--radius-pill)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: "var(--radius-pill)",
      background: "var(--botanic)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--sand-100)"
    }
  }, "AR"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, role)));
}
Object.assign(window, {
  Icon,
  AppHeader,
  UserChip,
  DS,
  Button,
  IconButton,
  Badge,
  Card,
  Logo,
  Overline,
  SidebarNav,
  Tabs,
  Dialog,
  Tooltip,
  Toast,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  RadioOption,
  Switch,
  ProgressRing,
  DimensionBar,
  ChatBubble,
  ChatComposer,
  DealStageTrack,
  StatBlock,
  SectionHeading
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/appShared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/HomeScreen.jsx
try { (() => {
function HomeScreen({
  onCta,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "86vh",
      display: "flex",
      alignItems: "flex-end",
      background: "var(--bg-page)",
      borderBottom: "1px solid var(--border-hair)",
      paddingBottom: "var(--space-12)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(120% 90% at 88% 18%, rgba(51,96,90,.55) 0%, rgba(20,55,55,0) 62%)"
    }
  }), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "18ch"
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    tone: "accent"
  }, "O hub de fus\xF5es e aquisi\xE7\xF5es"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display-1)",
      lineHeight: "var(--lh-display-1)",
      letterSpacing: "var(--ls-display-1)",
      fontWeight: 600,
      color: "var(--text-primary)",
      margin: "20px 0 0"
    }
  }, "Crescimento inorg\xE2nico. Feito certo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 64,
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginTop: 48,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      lineHeight: "var(--lh-body-lg)",
      color: "var(--text-secondary)",
      maxWidth: "48ch",
      margin: 0
    }
  }, "Transformamos a capacidade de crescimento das m\xE9dias empresas. Combinamos m\xE9todo, tecnologia e conhecimento multidisciplinar para sistematizar a expans\xE3o inorg\xE2nica de um neg\xF3cio."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    }),
    onClick: onCta
  }, "Fale com um especialista"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate("metodo")
  }, "Ver o m\xE9todo"))))), /*#__PURE__*/React.createElement(Band, {
    tone: "deep"
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 1fr",
      gap: 80,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, null, "01 Convic\xE7\xE3o"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h1)",
      lineHeight: "var(--lh-h1)",
      letterSpacing: "var(--ls-h1)",
      fontWeight: 600,
      color: "var(--text-primary)",
      margin: "18px 0 24px",
      maxWidth: "24ch"
    }
  }, "A empresa que s\xF3 cresce de forma org\xE2nica pode estar limitando o pr\xF3prio futuro."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body)",
      lineHeight: 1.7,
      color: "var(--text-muted)",
      maxWidth: "var(--measure-body)",
      margin: 0
    }
  }, "Toda empresa deve avaliar o crescimento via M&A, mesmo que nunca realize. Se feita da maneira correta, como disciplina cont\xEDnua, uma combina\xE7\xE3o de neg\xF3cios pode criar valor incompar\xE1vel e acelerar o caminho de uma companhia.")), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)",
    tone: "elevated",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "75%",
    label: "falham segundo a literatura",
    description: "\u201CThe M&A Failure Trap\u201D considera apenas as combina\xE7\xF5es conclu\xEDdas."
  }), /*#__PURE__*/React.createElement("div", {
    className: "hair"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "~93%",
    label: "falham na realidade",
    description: "Somando as tentativas que n\xE3o chegam ao closing, 6 em cada 100 M&As criam valor."
  }))))), /*#__PURE__*/React.createElement(Band, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Onde atuamos",
    title: "Tecnologia aplicada a fus\xF5es e aquisi\xE7\xF5es",
    lead: "Somos uma plataforma de fus\xF5es, aquisi\xE7\xF5es e combina\xE7\xE3o de neg\xF3cios. Falamos a l\xEDngua da Faria Lima, mas tamb\xE9m j\xE1 sujamos a bota pelas ind\xFAstrias do interior do Brasil."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 32,
      marginTop: 64
    }
  }, [["venda", "Venda"], ["fusao", "Fusão"], ["aquisicao", "Aquisição"], ["captacao", "Captação"]].map(([k, l]) => /*#__PURE__*/React.createElement(ServiceItem, {
    key: k,
    label: l,
    icon: /*#__PURE__*/React.createElement("img", {
      src: A + "icon-" + k + ".png",
      alt: "",
      style: {
        height: 76,
        objectFit: "contain"
      }
    })
  }))))), /*#__PURE__*/React.createElement(Band, {
    tone: "deep"
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.25fr",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "03 Por qu\xEA",
    title: "Um M&A n\xE3o termina na assinatura de um contrato",
    lead: "\xC9 a partir dela que come\xE7a o trabalho decisivo de integra\xE7\xE3o e captura de sinergias."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(DealStageTrack, {
    activeIndex: 1,
    stages: [{
      label: "Tese",
      note: "Onde a expansão inorgânica se encaixa na estratégia."
    }, {
      label: "Prontidão",
      note: "QUARPX® mede e eleva a maturidade da empresa."
    }, {
      label: "Transação",
      note: "Coordenação interna e externa do processo."
    }, {
      label: "Integração",
      note: "Captura efetiva de valor e sinergias."
    }]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body)",
      lineHeight: 1.7,
      color: "var(--text-muted)",
      margin: 0,
      maxWidth: "var(--measure-body)"
    }
  }, "Enxergamos a expans\xE3o inorg\xE2nica como compet\xEAncia permanente de gest\xE3o. Uma disciplina cont\xEDnua que deve ser desenvolvida e incorporada \xE0 estrat\xE9gia da empresa."))))), /*#__PURE__*/React.createElement(Band, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    overline: "Converg\xEAncia",
    title: "M\xE9todo e tecnologia, combinados",
    lead: "Metodologia multidisciplinar e intelig\xEAncia artificial para organizar o processo de M&A e potencializar a cria\xE7\xE3o de valor.",
    style: {
      alignItems: "center",
      textAlign: "center",
      margin: "0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "var(--space-8)",
    onClick: () => onNavigate("metodo")
  }, /*#__PURE__*/React.createElement(Overline, {
    tone: "accent"
  }, "Metodologia \xB7 Unknown unknowns"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h2)",
      fontWeight: 600,
      color: "var(--text-primary)",
      margin: "14px 0 16px"
    }
  }, "QUARPX", /*#__PURE__*/React.createElement("sup", {
    style: {
      fontSize: 16
    }
  }, "\xAE")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.65,
      color: "var(--text-muted)",
      margin: "0 0 28px"
    }
  }, "13 dimens\xF5es de neg\xF3cio, score de prontid\xE3o e roadmap. N\xE3o nos diferenciamos apenas pela forma\xE7\xE3o em finan\xE7as."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Score"), /*#__PURE__*/React.createElement(Badge, null, "Roadmap"), /*#__PURE__*/React.createElement(Badge, null, "+40 playbooks"))), /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "var(--space-8)",
    onClick: () => onNavigate("metodo")
  }, /*#__PURE__*/React.createElement(Overline, {
    tone: "accent"
  }, "Tecnologia \xB7 Known unknowns"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h2)",
      fontWeight: 600,
      color: "var(--text-primary)",
      margin: "14px 0 16px"
    }
  }, "M&AI"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.65,
      color: "var(--text-muted)",
      margin: "0 0 28px"
    }
  }, "Assistentes e agentes de IA treinados em fus\xF5es e aquisi\xE7\xF5es. Tecnologia \xE9 meio, n\xE3o fim \u2014 e funciona melhor conjugada."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Chat"), /*#__PURE__*/React.createElement(Badge, null, "Agents"), /*#__PURE__*/React.createElement(Badge, null, "Playbooks")))))), /*#__PURE__*/React.createElement(Band, {
    tone: "deep"
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "13",
    label: "Dimens\xF5es de neg\xF3cio",
    description: "Metodologia exclusiva que prepara a empresa para o M&A."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "+40",
    label: "Playbooks",
    description: "Materiais interativos para gerar insights ao empres\xE1rio."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "R$ 286,9",
    label: "Milh\xF5es",
    description: "Volume financeiro que nossos especialistas j\xE1 assessoraram."
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--sand-200)",
      padding: "var(--section-y) 0"
    },
    "data-theme": "claro"
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 48,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, null, "Copilotos do crescimento"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h1)",
      lineHeight: "var(--lh-h1)",
      letterSpacing: "var(--ls-h1)",
      fontWeight: 600,
      color: "var(--deep-green)",
      margin: "16px 0 0",
      maxWidth: "26ch"
    }
  }, "O empres\xE1rio se dedica ao que conhece. N\xF3s cuidamos do crescimento inorg\xE2nico.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    }),
    onClick: onCta
  }, "Agendar conversa")))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/InsightsScreen.jsx
try { (() => {
function InsightsScreen() {
  const articles = [{
    title: "Por que os M&As falham?",
    date: "01 de setembro, 2025"
  }, {
    title: "O que Peter Thiel nos ensina sobre M&A?",
    date: "09 de setembro, 2025"
  }, {
    title: "Não teremos mais IPO no Brasil.",
    date: "18 de setembro, 2025"
  }, {
    title: "Governança “para inglês ver”",
    date: "01 de outubro, 2025"
  }, {
    title: "O vácuo na liderança",
    date: "24 de outubro, 2025"
  }, {
    title: "Integração: onde o valor aparece ou desaparece",
    date: "12 de novembro, 2025"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Band, {
    tone: "page",
    style: {
      paddingTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Insights",
    size: "h1",
    title: "O M&A Perceptivo",
    lead: "Conte\xFAdos profundos sobre fus\xF5es e aquisi\xE7\xF5es. Questionamos pr\xE1ticas comuns e defendemos teses pr\xF3prias."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20,
      marginTop: 56
    }
  }, articles.map(a => /*#__PURE__*/React.createElement(InsightCard, {
    key: a.title,
    title: a.title,
    source: "O M&A Perceptivo",
    date: a.date,
    href: "#",
    mark: /*#__PURE__*/React.createElement(Logo, {
      variant: "menta",
      height: 18,
      assetBase: "../.."
    })
  }))))), /*#__PURE__*/React.createElement(Band, {
    tone: "deep"
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-9)",
    tone: "elevated",
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, null, "Manifesto"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h2)",
      lineHeight: 1.25,
      letterSpacing: "-.012em",
      fontWeight: 500,
      color: "var(--text-primary)",
      margin: "18px 0 0"
    }
  }, "O problema raramente est\xE1 na negocia\xE7\xE3o. Est\xE1 na aus\xEAncia de uma tese clara, na baixa prontid\xE3o da organiza\xE7\xE3o e na condu\xE7\xE3o fragmentada do processo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.65,
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Receba os ensaios no seu e-mail. Um por semana, sem resumo de not\xEDcia."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "nome@empresa.com.br",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, null, "Assinar")))))));
}
window.InsightsScreen = InsightsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/InsightsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/MetodoScreen.jsx
try { (() => {
function MetodoScreen({
  onCta
}) {
  const [side, setSide] = React.useState("sell");
  const sell = [["01. Mercado", 72], ["02. Receita", 54], ["03. Clientes", 38], ["04. Time", 61], ["05. Rentabilidade", 47], ["06. Governança", 19]];
  const buy = [["01. Mercado", 66], ["02. Processo", 41], ["03. Time", 58], ["04. Recursos", 35], ["05. Governança", 24]];
  const rows = side === "sell" ? sell : buy;
  const tone = v => v >= 60 ? "positive" : v >= 40 ? "accent" : v >= 25 ? "attention" : "critical";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Band, {
    tone: "page",
    style: {
      paddingTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "M\xE9todo",
    size: "h1",
    title: "QUARPX\xAE: a prontid\xE3o que define o resultado do M&A",
    lead: "A causa raiz das falhas est\xE1 no baixo n\xEDvel de prontid\xE3o das empresas. O QUARPX mede a maturidade por dimens\xE3o, aponta o gap e organiza o roadmap."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 64,
      marginTop: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)",
    tone: "elevated",
    style: {
      display: "flex",
      gap: 32,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 48,
    caption: "Prontid\xE3o",
    size: 168
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "attention"
  }, "Maturidade m\xE9dia"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Empresa despreparada com mandato de compra: o Maiq \xE9 vitamina antes de ser rem\xE9dio."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      id: "sell",
      label: "Sell Side",
      count: 6
    }, {
      id: "buy",
      label: "Buy Side",
      count: 5
    }],
    activeId: side,
    onChange: setSide
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      marginTop: 28
    }
  }, rows.map(([l, v]) => /*#__PURE__*/React.createElement(DimensionBar, {
    key: l,
    label: l,
    value: v,
    tone: tone(v)
  }))))))), /*#__PURE__*/React.createElement(Band, {
    tone: "deep"
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Posicionamento",
    title: "N\xE3o somos boutique, assessoria nem consultoria"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20,
      marginTop: 48
    }
  }, [["Boutique de M&A? Não.", "Entregas analógicas e com conflito de interesse — a única expertise é vender."], ["Assessoria empresarial? Não.", "Intermediário indiferenciado, sem trabalho profundo ao longo do processo."], ["Consultoria? Não.", "Entregas limitadas e pouco skin in the game."]].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h4)",
      fontWeight: 600,
      color: "var(--text-primary)",
      marginBottom: 12
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: 0
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, ["Somos coordenadores de fusões e aquisições, copilotos do crescimento.", "Somos uma startup, uma empresa de base tecnológica.", "Somos uma plataforma de expansão inorgânica."].map(t => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "var(--space-7)",
    tone: "elevated",
    style: {
      borderColor: "var(--mint)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body)",
      lineHeight: 1.6,
      color: "var(--text-primary)",
      margin: 0
    }
  }, t)))))), /*#__PURE__*/React.createElement(Band, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Dire\xE7\xE3o crom\xE1tica",
    title: "Nada existe de forma isolada",
    lead: "Fus\xF5es e aquisi\xE7\xF5es e a din\xE2mica da natureza compartilham princ\xEDpios: equil\xEDbrio, simbiose, fluxo de recursos e perpetuidade pelo acoplamento de sistemas complexos."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onCta
  }, "Conversar com um especialista"))), /*#__PURE__*/React.createElement(Placeholder, {
    ratio: "4 / 3",
    label: "Imagem de marca \u2014 ecossistema natural / economia real (floresta, f\xE1brica) em tratamento frio-esverdeado. Fornecer arquivo."
  })))));
}
window.MetodoScreen = MetodoScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/MetodoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/PlanosScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PlanosScreen({
  onCta
}) {
  const [open, setOpen] = React.useState(false);
  const plans = [{
    name: "Mentoria",
    price: "R$ 3.490",
    priceSuffix: "/mês",
    description: "Ideal para o empresário que ainda quer avaliar as opções e entender seu caminho de M&A.",
    features: ["Metodologia QUARPX® para aumento de maturidade", "Reunião quinzenal com especialista de M&A", "Valuation da sua empresa em 03 meses", "Formação do Conselho Consultivo em 03 meses"]
  }, {
    name: "Profissional",
    price: "R$ 6.490",
    priceSuffix: "/mês",
    highlight: true,
    description: "Ideal para o empresário que quer se aprofundar no processo de M&A.",
    features: ["Metodologia QUARPX® para aumento de maturidade", "Reunião semanal com especialista de M&A", "Valuation da sua empresa em 02 meses", "Formação do Conselho Consultivo em 02 meses", "Chat e conversas ilimitadas com especialistas"]
  }, {
    name: "Exclusivo",
    price: "Sob consulta",
    description: "Mandato exclusivo de M&A com equipe dedicada e gestão integral do processo.",
    features: ["Coordenação interna e externa de todas as atividades de M&A", "Time dedicado ao mandato"]
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Band, {
    tone: "page",
    style: {
      paddingTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Planos",
    size: "h1",
    title: "Intera\xE7\xE3o na sua medida",
    lead: "Escolha o seu caminho para o M&A. Os tr\xEAs produtos partem do mesmo m\xE9todo e mudam o grau de coordena\xE7\xE3o."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20,
      marginTop: 56,
      alignItems: "stretch"
    }
  }, plans.map(p => /*#__PURE__*/React.createElement(PlanCard, _extends({
    key: p.name
  }, p, {
    action: /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      variant: p.highlight ? "primary" : "secondary",
      onClick: () => setOpen(true)
    }, "Falar com especialista")
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      marginTop: 24
    }
  }, "* Refer\xEAncia de compara\xE7\xE3o: o custo mensal equivale ao sal\xE1rio de um estagi\xE1rio (Mentoria) ou de um analista Jr. (Profissional) de M&A."))), /*#__PURE__*/React.createElement(Band, {
    tone: "deep"
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeading, {
    overline: "Sweet spot",
    title: "Onde o Maiq \xE9 rem\xE9dio, e onde \xE9 vitamina"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20,
      marginTop: 48
    }
  }, [["Preparada · Compra para venda", "Maiq é remédio. Resolve a dor.", "positive", "Sweet Spot"], ["Despreparada · Compra para venda", "Maiq é vitamina. Ajuda, sem resolver.", "attention", null], ["Preparada · Mandato de venda", "Oceano vermelho: altíssima concorrência de boutiques.", "critical", null]].map(([t, d, tone, tag]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      fontWeight: 600,
      color: "var(--text-primary)",
      maxWidth: "20ch"
    }
  }, t), tag ? /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, tag) : null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: "14px 0 18px"
    }
  }, d), /*#__PURE__*/React.createElement(DimensionBar, {
    label: "Concorr\xEAncia de boutiques",
    value: tone === "critical" ? 92 : tone === "attention" ? 58 : 46,
    tone: tone
  })))))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Informe alguns dados para seguirmos com seu agendamento",
    description: "Retornamos em at\xE9 um dia \xFAtil com dois hor\xE1rios.",
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setOpen(false);
        onCta && onCta();
      }
    }, "Enviar"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Digite seu nome completo"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "nome@empresa.com.br"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Telefone",
    hint: "Opcional."
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "(11) 90000-0000"
  })))));
}
window.PlanosScreen = PlanosScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/PlanosScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteApp.jsx
try { (() => {
function SiteApp() {
  const [page, setPage] = React.useState("home");
  const [toast, setToast] = React.useState(null);
  const [leadOpen, setLeadOpen] = React.useState(false);
  const cta = () => setLeadOpen(true);
  const confirm = () => {
    setLeadOpen(false);
    setToast("Recebemos seus dados. Um especialista entra em contato.");
    setTimeout(() => setToast(null), 3600);
  };
  if (!window.MaiqDesignSystem_f4bd26) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 48,
        color: "var(--text-secondary)"
      }
    }, "Bundle do design system ainda n\xE3o compilado (", /*#__PURE__*/React.createElement("code", null, "_ds_bundle.js"), "). Recarregue a p\xE1gina.");
  }
  const links = [{
    id: "home",
    label: "Início"
  }, {
    id: "metodo",
    label: "Método"
  }, {
    id: "planos",
    label: "Planos"
  }, {
    id: "insights",
    label: "Insights"
  }];
  const nav = id => {
    setPage(id);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    brand: /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: "pointer"
      },
      onClick: () => nav("home")
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "branco",
      height: 26,
      assetBase: "../.."
    })),
    links: links,
    activeLink: page,
    onNavigate: nav,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Entrar"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: cta
    }, "Fale com um especialista"))
  })), page === "home" ? /*#__PURE__*/React.createElement(HomeScreen, {
    onCta: cta,
    onNavigate: nav
  }) : null, page === "metodo" ? /*#__PURE__*/React.createElement(MetodoScreen, {
    onCta: cta
  }) : null, page === "planos" ? /*#__PURE__*/React.createElement(PlanosScreen, {
    onCta: confirm
  }) : null, page === "insights" ? /*#__PURE__*/React.createElement(InsightsScreen, null) : null, /*#__PURE__*/React.createElement(SiteFooter, {
    onCta: cta
  }), /*#__PURE__*/React.createElement(Dialog, {
    open: leadOpen,
    title: "Informe alguns dados para seguirmos com seu agendamento",
    description: "Retornamos em at\xE9 um dia \xFAtil com dois hor\xE1rios.",
    onClose: () => setLeadOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setLeadOpen(false)
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      onClick: confirm
    }, "Enviar"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Digite seu nome completo"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "nome@empresa.com.br"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Telefone",
    hint: "Opcional."
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "(11) 90000-0000"
  })))), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "positive",
    title: "Agendamento solicitado",
    description: toast,
    onClose: () => setToast(null)
  })) : null);
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(SiteApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/shared.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Card,
  Logo,
  Overline,
  SectionHeading,
  StatBlock,
  PlanCard,
  InsightCard,
  ServiceItem,
  DealStageTrack,
  DimensionBar,
  ProgressRing,
  TopBar,
  Tabs,
  Dialog,
  Field,
  Input,
  Toast
} = window.MaiqDesignSystem_f4bd26 || {};
function Icon({
  name,
  size = 18,
  color = "currentColor",
  strokeWidth = 1.75
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide && window.lucide[name]) {
      ref.current.innerHTML = "";
      const n = window.lucide.createElement(window.lucide[name]);
      n.setAttribute("width", size);
      n.setAttribute("height", size);
      n.setAttribute("stroke", color);
      n.setAttribute("stroke-width", strokeWidth);
      ref.current.appendChild(n);
    }
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "flex"
    }
  });
}
const A = "../../assets/";
function Wrap({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: style
  }, children);
}
function Band({
  children,
  tone = "deep",
  style,
  id
}) {
  const bg = {
    deep: "var(--bg-page-deep)",
    page: "var(--bg-page)",
    sand: "var(--sand-200)",
    botanic: "var(--botanic)"
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: "sect",
    style: {
      background: bg,
      ...style
    }
  }, children);
}
function SiteFooter({
  onCta
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--green-950)",
      borderTop: "1px solid var(--border-hair)",
      padding: "64px 0 32px"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "branco",
    height: 30,
    assetBase: "../.."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.65,
      color: "var(--text-muted)",
      maxWidth: "38ch",
      margin: 0
    }
  }, "O hub de fus\xF5es e aquisi\xE7\xF5es para m\xE9dias empresas. M\xE9todo, tecnologia e conhecimento multidisciplinar.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "Contato"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contato@maiq.app.br",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "var(--text-secondary)",
      fontSize: "var(--fs-body-sm)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Mail",
    size: 16
  }), " contato@maiq.app.br"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "var(--text-secondary)",
      fontSize: "var(--fs-body-sm)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Linkedin",
    size: 16
  }), " /company/maiq")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "Comece agora"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 16
    }),
    onClick: onCta
  }, "Fale com um especialista"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: "1px solid var(--border-hair)",
      display: "flex",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, "\xA9 2026 Maiq. Todos os direitos reservados."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, "Pron\xFAncia: \u201CMike\u201D."))));
}
function Placeholder({
  label,
  ratio = "16 / 9",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: "var(--surface-inset)",
      border: "1px solid var(--border-hair)",
      borderRadius: "var(--radius-lg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      maxWidth: "30ch"
    }
  }, label));
}
Object.assign(window, {
  Icon,
  Wrap,
  Band,
  SiteFooter,
  Placeholder,
  A,
  Button,
  IconButton,
  Badge,
  Card,
  Logo,
  Overline,
  SectionHeading,
  StatBlock,
  PlanCard,
  InsightCard,
  ServiceItem,
  DealStageTrack,
  DimensionBar,
  ProgressRing,
  TopBar,
  Tabs,
  Dialog,
  Field,
  Input,
  Toast
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Overline = __ds_scope.Overline;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.ChatComposer = __ds_scope.ChatComposer;

__ds_ns.DealStageTrack = __ds_scope.DealStageTrack;

__ds_ns.DimensionBar = __ds_scope.DimensionBar;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioOption = __ds_scope.RadioOption;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.PlanCard = __ds_scope.PlanCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceItem = __ds_scope.ServiceItem;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
