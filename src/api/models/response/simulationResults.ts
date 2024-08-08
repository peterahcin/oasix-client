
export interface SimulationResults {
    timestamp: string;
    "electricity": number;
    "cooling load": number;
    "heat load": number;
    "cooling": number;
    "heating": number;
    "insolation": number;
    "T ambient": number;
    "dissipated heat": number;
    "dissipated cold": number;
    "COPh": number;
    "COPc": number;
    "COP": number;
    "T hot storage": number;
    "T cold storage": number;
}