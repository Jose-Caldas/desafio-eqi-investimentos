export const API_URL = "http://localhost:3000";

export function GET_INDICATORS() {
  return {
    url: `${API_URL}/indicadores`,
    options: {
      method: "GET",
    },
  };
}

export function GET_SIMULATORS() {
  return {
    url: `${API_URL}/simulacoes`,
    options: {
      method: "GET",
    },
  };
}
