import fetch from '@/utils/fetch'
// transformRequest & transformResponse

export let test = function () {
  return fetch({
    url: 'test',
    method: 'get'
  })
}

export let login = function (data) {
  return fetch({
    url: 'user/login',
    method: 'post',
    type: 'formData',
    data
  })
}

export let register = function (data) {
  return fetch({
    url: 'register',
    method: 'post',
    type: 'formData',
    data
  })
}

export let getBlogs = function (params) {
  return fetch({
    url: 'blog/list',
    method: 'get',
    params
  })
}

export let getBlog = function (params) {
  return fetch({
    url: 'blog',
    method: 'get',
    params
  })
}

export let addBlog = function (data) {
  return fetch({
    url: 'blog',
    method: 'post',
    data
  })
}
