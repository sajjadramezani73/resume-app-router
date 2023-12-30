export interface RequestQuery {
  queryKey: string | any[]
  url: string
  staleTime?: number | 'Infinity'
  enabled?: boolean
  successCallback?: (data: any) => void
  errorCallback?: (error: string) => void
  query?: any
  refetchOnWindowFocus?: any
}

export interface MutateQuery {
  method: 'post' | 'delete' | 'patch' | 'put'
  url?: string
  successCallback?: (data: any) => void
  errorCallback?: (error: string) => void
  header?: any
  preventDefaultMessage?: boolean
}

export interface QueryParam {
  query?: any
  id?: string
  requestUrl?: string
}

export interface ErrorHandler {
  error: ErrorFormat
  errorCallback: (data: any) => void
  isGetMethod: boolean
  preventDefaultMessage: boolean
}

export interface ErrorFormat {
  statusCode: number
  message: string
  timestamp: string
}

export interface IaxiosConfig {
  'Access-Control-Allow-Origin': string
  'Access-Control-Allow-Credentials': boolean
  'Access-Control-Allow-Methods': string
  'Content-Type': string
  'Accept-Language': string
  'Acccept-Encoding': string
  'Access-Control-Max_Age': number
  'Access-Control-Allow-Headers': string
}
