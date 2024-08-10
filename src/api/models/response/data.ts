import { TableDataObject } from "../../../types/data";

export interface ResponseData {
  [key: string]: string | number | null;
}

export interface FetchDataResponseData {
  items: TableDataObject[];
  page: number;
  pages: number;
  size: number;
  total: number;
}