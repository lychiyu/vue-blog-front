import moment from "moment/moment"

export const formatDate = (date, type = 'default') => {
  let f = 'MMMM D, YYYY'
  if (type !== 'default') {
    f = 'MMMM D, YYYY hh:mm:ss a'
  }
  return moment(date).format(f)
}
