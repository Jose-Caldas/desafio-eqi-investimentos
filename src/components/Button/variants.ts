export interface ButtonStyle {
  button: {
    backgroundColor: string;
    border?: string;
    borderColor?: string;
  };
}

export interface ButtonVariant {
  enabled: ButtonStyle;
  disabled: ButtonStyle;
}

export const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: "transparent",
      border: "1px solid",
      borderColor: "#9999",
    },
  },
  disabled: {
    button: {
      backgroundColor: "#9999",
      border: "1px solid",
      borderColor: "#9999",
    },
  },
};

export const buttonSecondary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: "#EA7238",
      border: "none",
      borderColor: "none",
    },
  },
  disabled: {
    button: {
      backgroundColor: "#9999",
      border: "none",
      borderColor: "none",
    },
  },
};

export const buttonTypes = {
  primary: buttonPrimary,
  secondary: buttonSecondary,
};
