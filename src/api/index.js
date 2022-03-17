import axios from 'axios'

export const client = axios.create({
  baseURL: 'http://18.196.54.102:8081/api'
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
  getBlockById (id) {
    return request('get', `/blocks/${id}`)
  },
  getTransactionsQuantity () {
    return request('get', `/node/info/transactions`)
  },
  getTransactionsList (limit = 2, offset = 0) {
    return request('get', `/node/info/transactions/last?limit=${limit}&offset=${offset}`)
  },
  getAccountInfo (id) {
    return request('get', `/accounts/${id}`)
  },
  getAccountTransactions (id) {
    return request('get', `/account/transactions/${id}`)
  },
  getTransactionInfo (id) {
    return request('get', `/transactions/${id}`)
  }
}

export default api
