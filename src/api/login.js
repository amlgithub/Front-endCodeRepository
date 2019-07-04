import request from '@/utils/request'
import qs from 'qs'

export function loginByUsername(username, password) {
  const data = qs.stringify({
    username,
    password
  })
  return request({
    // url: 'http://localhost:11001/login',
    // url: 'http://58.119.112.13:11001/login',
    url: '/login',
    method: 'post',
    data
  })
  // return request({
  //   url: '/login/login',
  //   method: 'post',
  //   data
  // })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

