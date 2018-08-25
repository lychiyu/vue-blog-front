import moment from 'moment/moment'

export const formatDate = (date, type = 'default') => {
  let f = 'MMMM D, YYYY'
  if (type !== 'default') {
    f = 'MMMM D, YYYY hh:mm:ss a'
  }
  return moment(date).format(f)
}

export const commentOptions = {
  owner: '', // github用户名
  repo: '', // 用于存放评论的仓库
  oauth: {
    client_id: '',
    client_secret: ''
  }
}
