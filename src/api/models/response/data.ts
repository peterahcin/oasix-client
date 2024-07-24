export interface ResponseData {
  [key: string]: string | number | null;
}

export interface FetchDataResponseData {
  items: ResponseData[];
  page: number;
  pages: number;
  size: number;
  total: number;
}