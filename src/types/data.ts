export type Data = string | number | null

export type FormData = string | number

export interface DataObject {
  [key: string]: Data;
}

export interface FormEntryObject {
  [key: string]: FormData;
}
