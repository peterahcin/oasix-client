import client from "../client";
import { AxiosResponse } from "axios";
import { SimulationResults } from "../models/response/simulationResults";

//GET FORM CONFIG
export const runSimulation = (): Promise<AxiosResponse<SimulationResults[]>> => {
  return client.get<SimulationResults[]>(`/run_simulation`);
};