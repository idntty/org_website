import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://tn-alpha.idntty.org:8080/api'
})

const request = (method, url, data) => {
  return client[method](url, data)
    .then(response => {
      return response.data
    })
}

const api = {
  getNodeInfo () {
    return request('get', '/node/info')
  },
  getTransactionsQuantity () {
    return request('get', `/node/transactions`)
  }
}

export default api
