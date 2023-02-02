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
      backgroundColor: "#FFFFFF",
      border: "1px solid",
      borderColor: "#000",
    },
  },
  disabled: {
    button: {
      backgroundColor: "#BBBBBB",
      border: "1px solid",
      borderColor: "#BBBBBB",
    },
  },
};

export const buttonSecondary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: "orange",
      border: "none",
      borderColor: "none",
    },
  },
  disabled: {
    button: {
      backgroundColor: "#BBBBBB",
      border: "none",
      borderColor: "none",
    },
  },
};

export const buttonTypes = {
  primary: buttonPrimary,
  secondary: buttonSecondary,
};
