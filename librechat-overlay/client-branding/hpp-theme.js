(function () {
  var themeName = "hpp-artemis";
  var theme = {
    "rgb-text-primary": "75 59 69",
    "rgb-text-secondary": "116 107 112",
    "rgb-text-secondary-alt": "125 111 120",
    "rgb-text-tertiary": "154 111 78",
    "rgb-text-warning": "216 169 79",
    "rgb-ring-primary": "184 111 131",
    "rgb-header-primary": "255 248 242",
    "rgb-header-hover": "255 241 232",
    "rgb-header-button-hover": "255 241 232",
    "rgb-surface-active": "244 197 202",
    "rgb-surface-active-alt": "255 217 189",
    "rgb-surface-hover": "255 241 232",
    "rgb-surface-hover-alt": "246 250 239",
    "rgb-surface-primary": "255 248 242",
    "rgb-surface-primary-alt": "255 241 232",
    "rgb-surface-primary-contrast": "246 250 239",
    "rgb-surface-secondary": "255 241 232",
    "rgb-surface-secondary-alt": "246 250 239",
    "rgb-surface-tertiary": "246 250 239",
    "rgb-surface-tertiary-alt": "255 255 255",
    "rgb-surface-dialog": "255 248 242",
    "rgb-surface-submit": "184 111 131",
    "rgb-surface-submit-hover": "159 93 113",
    "rgb-surface-destructive": "185 28 28",
    "rgb-surface-destructive-hover": "153 27 27",
    "rgb-surface-chat": "255 248 242",
    "rgb-border-light": "235 219 211",
    "rgb-border-medium": "225 205 196",
    "rgb-border-medium-alt": "225 205 196",
    "rgb-border-heavy": "184 111 131",
    "rgb-border-xheavy": "75 59 69",
    "rgb-brand-purple": "184 111 131",
    "rgb-presentation": "255 248 242",
    "rgb-background": "255 248 242",
    "rgb-foreground": "75 59 69",
    "rgb-primary": "244 197 202",
    "rgb-primary-foreground": "75 59 69",
    "rgb-secondary": "255 241 232",
    "rgb-secondary-foreground": "116 107 112",
    "rgb-muted": "246 250 239",
    "rgb-muted-foreground": "125 111 120",
    "rgb-accent": "244 197 202",
    "rgb-accent-foreground": "75 59 69",
    "rgb-destructive-foreground": "255 255 255",
    "rgb-border": "225 205 196",
    "rgb-input": "235 219 211",
    "rgb-ring": "184 111 131",
    "rgb-card": "255 241 232",
    "rgb-card-foreground": "75 59 69"
  };

  try {
    localStorage.setItem("color-theme", "light");
    localStorage.setItem("theme-name", themeName);
    localStorage.setItem("theme-colors", JSON.stringify(theme));
  } catch (error) {
    // Ignore storage errors. CSS variables below still apply for this page load.
  }

  var mapping = {
    "rgb-text-primary": "--text-primary",
    "rgb-text-secondary": "--text-secondary",
    "rgb-text-secondary-alt": "--text-secondary-alt",
    "rgb-text-tertiary": "--text-tertiary",
    "rgb-text-warning": "--text-warning",
    "rgb-ring-primary": "--ring-primary",
    "rgb-header-primary": "--header-primary",
    "rgb-header-hover": "--header-hover",
    "rgb-header-button-hover": "--header-button-hover",
    "rgb-surface-active": "--surface-active",
    "rgb-surface-active-alt": "--surface-active-alt",
    "rgb-surface-hover": "--surface-hover",
    "rgb-surface-hover-alt": "--surface-hover-alt",
    "rgb-surface-primary": "--surface-primary",
    "rgb-surface-primary-alt": "--surface-primary-alt",
    "rgb-surface-primary-contrast": "--surface-primary-contrast",
    "rgb-surface-secondary": "--surface-secondary",
    "rgb-surface-secondary-alt": "--surface-secondary-alt",
    "rgb-surface-tertiary": "--surface-tertiary",
    "rgb-surface-tertiary-alt": "--surface-tertiary-alt",
    "rgb-surface-dialog": "--surface-dialog",
    "rgb-surface-submit": "--surface-submit",
    "rgb-surface-submit-hover": "--surface-submit-hover",
    "rgb-surface-destructive": "--surface-destructive",
    "rgb-surface-destructive-hover": "--surface-destructive-hover",
    "rgb-surface-chat": "--surface-chat",
    "rgb-border-light": "--border-light",
    "rgb-border-medium": "--border-medium",
    "rgb-border-medium-alt": "--border-medium-alt",
    "rgb-border-heavy": "--border-heavy",
    "rgb-border-xheavy": "--border-xheavy",
    "rgb-brand-purple": "--brand-purple",
    "rgb-presentation": "--presentation",
    "rgb-background": "--background",
    "rgb-foreground": "--foreground",
    "rgb-primary": "--primary",
    "rgb-primary-foreground": "--primary-foreground",
    "rgb-secondary": "--secondary",
    "rgb-secondary-foreground": "--secondary-foreground",
    "rgb-muted": "--muted",
    "rgb-muted-foreground": "--muted-foreground",
    "rgb-accent": "--accent",
    "rgb-accent-foreground": "--accent-foreground",
    "rgb-border": "--border",
    "rgb-input": "--input",
    "rgb-ring": "--ring",
    "rgb-card": "--card",
    "rgb-card-foreground": "--card-foreground"
  };

  var root = document.documentElement;
  root.classList.remove("dark");
  root.style.colorScheme = "light";
  Object.keys(mapping).forEach(function (key) {
    root.style.setProperty(mapping[key], "rgb(" + theme[key] + ")");
  });

  var metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute("content", "#fff8f2");
  }
})();
