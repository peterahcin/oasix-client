import client from "../client";
import { AxiosResponse } from "axios";
import { DataPayload } from "../models/payload/data";
import { ResponseData, FetchDataResponseData } from "../models/response/data";
import { Form } from "../../types/forms";

//GET FORM CONFIG
export const fetchFormByLabel = (formName: string): Promise<AxiosResponse<Form>> => {
  return client.get<Form>(`/form_config/${formName}`);
};

//GET TABLE DATA
export const fetchTableData = (data: {page?: number, size?: number}): Promise<AxiosResponse<FetchDataResponseData>> => {
  const params: Record<string, number> = {}

  if (data.page) params.page = data.page
  if (data.size) params.size = data.size
  
  return client.get<FetchDataResponseData>(`/all_data`, {params});
};

// GET ALL DATA
export const fetchData = (label: string,  data: {page?: number, size?: number}): Promise<AxiosResponse<FetchDataResponseData>> => {
  const params: Record<string, number> = {}

  if (data.page) params.page = data.page
  if (data.size) params.size = data.size

  return client.get<FetchDataResponseData>(`/${label}`, {params})
}

// GET ONE DATA
export const fetchOneData = (label: string, id: number): Promise<AxiosResponse<ResponseData>> => {
  return client.get<ResponseData>(`/${label}/${id}`)
}

// GET ONE DATA BY PROJECT_ID
export const fetchOneDataByProjectId = (label: string, project_id: number): Promise<AxiosResponse<ResponseData>> => {
  return client.get<ResponseData>(`/${label}/by-project/${project_id}`)
}


// CREATE DATA
export const createData = (label: string, data: DataPayload): Promise<AxiosResponse<ResponseData>> => {
  return client.post<DataPayload>(`/${label}`, data)
}

// EDIT DATA
export const editData = (label: string, id: number, data: DataPayload): Promise<AxiosResponse<ResponseData>> => {
  return client.put<ResponseData>(`/${label}/${id}`, data)
}

// DELETE DATA
export const deleteData = (label: string, id: number): Promise<AxiosResponse<ResponseData>> => {
  return client.delete<ResponseData>(`/${label}/${id}`)
}
