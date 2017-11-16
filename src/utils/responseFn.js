export default {
  errors (err) {
    alert('http fail', err)
    return Promise.reject(err)
  },
  interceptors (reseponse) {
    let res = reseponse.data
    if (!res.result) {
      alert(res.message)
      throw new Error(res.message)
    }
    return res.data
  }
}
