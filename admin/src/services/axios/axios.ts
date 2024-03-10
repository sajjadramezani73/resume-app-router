import { IaxiosConfig } from './model'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const API_URL = import.meta.env.VITE_BASE_URL

export function setupAxios(axios: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()
  axios.defaults.baseURL = API_URL

  axios.interceptors.request.use(
    (config: { headers: IaxiosConfig }) => {
      config.headers['Access-Control-Allow-Origin'] = '*'
      config.headers['Access-Control-Allow-Credentials'] = true
      config.headers['Access-Control-Allow-Methods'] =
        'GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH'
      // config.headers['Content-Type'] = 'application/json'
      // config.headers['Content-Type'] = 'multipart/form-data'
      // config.headers['Accept-Language'] = parsedLanguage;
      // config.headers['Acccept-Encoding'] = 'gzip, deflate, br';
      // config.headers['Access-Control-Max_Age'] = 36000;
      config.headers['Access-Control-Allow-Headers'] =
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, access-control-allow-origin, x-app-key, x-role, x-client-version, x-client-id, sentry-trace, client-id, device-id, menu-access, role-permission, user-agent, user'

      const token = Cookies.get('token')

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    (err: any) => {
      return Promise.reject(err)
    }
  )

  axios.interceptors.response.use(
    (response: any) => {
      return response
    },
    async (error: any) => {
      if (error.response && error.response.status === 401) {
        navigate('/login')
        Cookies.remove('token')
        return Promise.reject(error)
      }
      return Promise.reject(error)
    }
  )
}
