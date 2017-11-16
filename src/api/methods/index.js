import fetch from '@/utils/fetch'
// transformRequest & transformResponse

let test = function () {
  return fetch({
    url: 'test',
    method: 'get'
  })
}

let login = function (data) {
  return fetch({
    url: 'user/login',
    method: 'post',
    type: 'formData',
    data
  })
}

let register = function (data) {
  return fetch({
    url: 'register',
    method: 'post',
    type: 'formData',
    data
  })
}

let getBlogs = function (params) {
  return fetch({
    url: 'blog/list',
    method: 'get',
    params
  })
}

let getBlog = function (params) {
  return fetch({
    url: 'blog',
    method: 'get',
    params
  })
}

export { test, login, register, getBlogs, getBlog }
