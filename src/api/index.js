import axios from 'axios'

let host = 'http://127.0.0.1:8000/api'

// 文章列表
export const articleList = params => { return axios.get(`${host}/article/`, params) }

// tags列表
export const tagList = params => { return axios.get(`${host}/tag/`, params) }
