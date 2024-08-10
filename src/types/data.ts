export type Data = string | number | null

export type FormData = string | number

export interface DataObject {
  [key: string]: Data;
}

export interface FormEntryObject {
  [key: string]: FormData;
}

export interface TableDataObject {
  project: {id: number,
    name: string,
    description: string | null,
    owner: string | null,
    created_date: string};
  simulation_params: DataObject;
  system_sizing: DataObject;
}
