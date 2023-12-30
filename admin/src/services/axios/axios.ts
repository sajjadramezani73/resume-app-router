import { IaxiosConfig } from './model'

const API_URL = import.meta.env.VITE_BASE_URL

export function setupAxios(axios: any) {
  axios.defaults.baseURL = API_URL
  // const currentLanguage = localStorage.getItem('i18nConfig');
  // const parsedLanguage = currentLanguage ? JSON.parse(currentLanguage).selectedLang : 'en';

  axios.interceptors.request.use(
    (config: { headers: IaxiosConfig }) => {
      config.headers['Access-Control-Allow-Origin'] = '*'
      config.headers['Access-Control-Allow-Credentials'] = true
      config.headers['Access-Control-Allow-Methods'] =
        'GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH'
      config.headers['Content-Type'] = 'application/json'
      // config.headers['Accept-Language'] = parsedLanguage;
      // config.headers['Acccept-Encoding'] = 'gzip, deflate, br';
      // config.headers['Access-Control-Max_Age'] = 36000;
      config.headers['Access-Control-Allow-Headers'] =
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, access-control-allow-origin, x-app-key, x-role, x-client-version, x-client-id, sentry-trace, client-id, device-id, menu-access, role-permission, user-agent, user'

      return config
    },
    (err: any) => {
      // Promise.reject(err)
    }
  )

  axios.interceptors.response.use(
    (response: any) => {
      return response
    },
    async (error: Error) => {
      // const originalRequest = error?.config;

      // if (error?.status === 401 && !originalRequest._retry) {
      //   originalRequest._retry = true;
      //   const auth = localStorage.getItem('auth');

      //   if (auth) {
      //     const parsedAuth = JSON.parse(auth);

      //     // async function getRefreshTokenAsync() {
      //     //   try {
      //     //     const res = await fetch(`${API_URL}auth/refresh`, {
      //     //       method: 'POST',
      //     //       headers: {
      //     //         Authorization: `Bearer ${parsedAuth.refreshToken}`,
      //     //         'x-client-id': visitorId,
      //     //       },
      //     //     });

      //     //     const response = await res.json();
      //     //     const isSuccess = res.ok;
      //     //     return { response, isSuccess };
      //     //   } catch (error) {
      //     //     console.log(error);
      //     //   }
      //     // }

      //     // async function handleNewTokens() {
      //     //   const { response: newTokens, isSuccess } = await getRefreshTokenAsync();
      //     //   if (isSuccess) {
      //     //     localStorage.setItem('auth', JSON.stringify(newTokens));
      //     //     axios.defaults.headers.common['Authorization'] = 'Bearer ' + newTokens.accessToken;
      //     //   } else {
      //     //     toastFire('error', 'خطای بازیابی توکن');
      //     //     localStorage.removeItem('currentUser');
      //     //     localStorage.removeItem('auth');
      //     //     location.reload();
      //     //   }
      //     // }
      //     // handleNewTokens();

      //     return axios(originalRequest);
      //   }
      // }

      console.log(error, 'error')
      return Promise.reject(error)
    }
  )
}
