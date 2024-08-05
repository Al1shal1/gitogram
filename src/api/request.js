import axios from 'axios'

const baseUrl = 'https://api.github.com'

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.Authorization = `token ${token}`
}

export const makeRequest = ({
  url, method = 'get', withBaseUrl = true, data = {}, headers = {}
}) => axios({
  url,
  method,
  data,
  baseUrl: withBaseUrl ? baseUrl : '',
  headers: {
    ...headers
  }
})
