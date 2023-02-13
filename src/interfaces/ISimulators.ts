export interface ComAporte {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
}

export interface SemAporte {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
}

export interface GraficoValores {
  comAporte: ComAporte;
  semAporte: SemAporte;
}

export interface ISimulators {
  tipoIndexacao: string;
  tipoRendimento: string;
  valorFinalBruto: number;
  aliquotaIR: number;
  valorPagoIR: number;
  valorTotalInvestido: number;
  valorFinalLiquido: number;
  ganhoLiquido: number;
  graficoValores: GraficoValores;
}
