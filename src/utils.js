import moment from "moment/moment"

export const formatDate = (date, formatStr = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(date).format(formatStr)
}
