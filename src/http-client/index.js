import axios from 'axios'
// import store from 'redux/store/configureStore'
// import { spinner } from 'redux/actions/modals'
// import { objToQueryStr } from 'utils'
// import { getUiData } from 'utils/common'

export const X_SESSION_INFO =
  'nXqbC4Jl3gJo1LSJ9dkbEJikczV1QWUgld/V2S8sZVBXb3rOmOw4OsB3dh4aZmz5PHpXdmCfVJF51kyfoyIP2yKBY53F3CqpjwvWBIo7vyQd3gGgiHw9TU+Dn/Jf0N0EHi4dvpqJTnVA9uXdcHlHpAmvYgGNwOVKSafCfO41BfNNHMG6cb3Ot6MgL8+3wmiUEbGZhPg8huaxZxFmqujb5PW08G64FJCsEeUUSbmjGHu9QD2eqebqwm6Vj6pyRzl92kd3aFN+4GVXrMXu5J+Wj8tCf+Ou0+SR0jXAnHJ7on1NhPw/eq9n2EW0rFO7JfsJaAkHJIGwKRsStNGM5PjeiBG62/IL74DPNJImPDFS+o6FaYIN85QK0HD7VMPQz3Q1S7Q/9XdhoxCNFxVPKR5JFGNpkxeRZs7Af4k7vNV1XA/EfhHjzXambWIUNRpnmSryljxIRRJp30JjiwqfZ7ZLCBMoNujHRcT27VUQ1s4wsguAVH6Wch/je5xJ01zkx0OXset27t3yl0wblzGC/zY32C7zsbOVU9hdCMrOacokM44='

const httpClient = axios.create({
  baseURL: 'http://10.52.221.123:8080/ui',
  headers: {
    'Content-Type': 'application/json',
    'x-session-info': X_SESSION_INFO
  },
  data: {},
  timeout: 5000
  /**
    `adapter` allows custom handling of requests which makes testing easier.
    Return a promise and supply a valid response (see lib/adapters/README.md).
   */
  /*
  adapter: config => {
    console.log(`### adapter: ${JSON.stringify(config)}`);
  }
  */
  /**
    `transformRequest` allows changes to the request data before it is sent to the server
    This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
    The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
    FormData or Stream
    You may modify the headers object.
   */
  /*
  transformRequest: [
    function (data, headers) {
      console.log("### transformRequest");
      store.dispatch(spinner({ show: true }));
      console.log(data);
      return data;
    }
  ]
  */
  /**
    `transformResponse` allows changes to the response data to be made before
    it is passed to then/catch
  */
  /*
  transformResponse: [
    function (data) {
      return JSON.parse(data);
    }
  ]
  */
})

/*
httpClient.interceptors.request.use(
  function (config) {
    config.started = new Date().getTime()
    store.dispatch(spinner({ show: true })) // Show Spinner
    return config
  },
  function (error) {
    console.log(`### errer request: ${error}`)
    store.dispatch(spinner({ show: false })) // Hide Spinner
    return Promise.reject(error)
  }
)
*/

/*
httpClient.interceptors.response.use(
  function (config) {
    const took = new Date().getTime() - config.config.started
    if (process.env.NODE_ENV === 'development')
      console.log(`### [${config.config.url}] took ${took}ms`)
    store.dispatch(spinner({ show: false }))
    return config
  },
  function (error) {
    console.log(`### errer response: ${error}`)
    store.dispatch(spinner({ show: false }))
    return Promise.reject(error)
  }
)
*/

export default httpClient
