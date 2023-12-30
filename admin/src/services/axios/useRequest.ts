import axios from 'axios'
// import { message } from 'antd';
import { useMutation, useQuery } from 'react-query'
import {
  RequestQuery,
  ErrorHandler,
  QueryParam,
  MutateQuery,
  ErrorFormat,
} from './model'
//  *** For more info on these hooks refer to confluence ***

const useHandleErrors = ({
  error,
  errorCallback,
  preventDefaultMessage = false,
}: ErrorHandler) => {
  const status = error.statusCode
  const text_message = error.message

  // if (status >= 500 && status <= 599) message.error('Interval server Error');
  // else if (status === 401) message.error('unauthorized');
  // else if (status === 403) message.error('Forbidden');
  // else if (!!text_message) {
  //   message.error(text_message);
  // } else if (!preventDefaultMessage) {
  //   message.error('There is an Error');
  // }
  if (status >= 500 && status <= 599) console.log('Interval server Error')
  else if (status === 401) console.log('unauthorized')
  else if (status === 403) console.log('Forbidden')
  else if (!!text_message) {
    console.log(text_message)
  } else if (!preventDefaultMessage) {
    console.log('There is an Error')
  }
}

const useRequest = ({
  queryKey,
  url,
  staleTime = 0,
  enabled,
  successCallback,
  errorCallback,
  query,
  refetchOnWindowFocus,
}: RequestQuery) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await axios.get(url, query || {})
      return response.data
    },
    staleTime: staleTime === 'Infinity' ? Infinity : staleTime,
    enabled,
    refetchOnWindowFocus: refetchOnWindowFocus,
    onSuccess: (data) => {
      successCallback?.(data)
    },
    onError: (error: ErrorFormat) => {
      errorCallback?.(error.message)
    },
  })
}

const useMutate = ({
  method,
  url,
  successCallback,
  errorCallback,
  header,
  preventDefaultMessage = false,
}: MutateQuery) => {
  return useMutation({
    mutationFn: async ({ id, query, requestUrl }: QueryParam) => {
      let response: any = {}
      const urlFormat = requestUrl || `${url}${id ? `/${id}` : ''}`
      const queryFormat = query || {}

      switch (method) {
        case 'post':
          response = await axios.post(urlFormat, queryFormat, header)
          break
        case 'delete':
          response = await axios.delete(urlFormat, queryFormat)
          break
        case 'put':
          response = await axios.put(urlFormat, queryFormat)
          break
        default:
          response = await axios.patch(urlFormat, queryFormat)
      }
      return response.data
    },
    onSuccess: (data) => {
      successCallback?.(data)
      // !preventDefaultMessage && Message({type:'success', content:'Your request successed.'});
    },
    onError: (error: ErrorFormat) => {
      useHandleErrors({
        error,
        errorCallback,
        isGetMethod: false,
        preventDefaultMessage,
      })
    },
  })
}

const keyHandler = (key: string) => {
  return {
    // predicate: (query) => query.queryKey[0] === key,
    predicate: (query: any) => query.queryKey.includes(key),
  }
}

export { useRequest, useMutate, keyHandler }
