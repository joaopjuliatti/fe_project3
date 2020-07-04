/* eslint-disable no-restricted-globals */
import { showToast } from '../components/toast'
import moment from 'moment'
import { history } from '../navigation/history'

export const asyncLocalStorage = {
  setItem(key, value) {
    return Promise.resolve().then(() => {
      localStorage.setItem(key, value)
    })
  },
  getItem(key) {
    return Promise.resolve().then(() => {
      return localStorage.getItem(key)
    })
  }
}

export const checkToken = async () => {
  const token = await asyncLocalStorage.getItem('token')

  if (!token) {
    showToast('Sua sessão expirou')
    history.push('/')
  }
}

export const calculateDays = (days, now) => {
  if (days === undefined || days === null || !days) return '00/00/0000'

  const datewithdays = moment(now)
    .add('days', days)
    .format('DD/MM/YYYY')

  return datewithdays
}

export const formatDate = (d, withHour) => {
  // YYYY-MM-DD to DD/MM/YYYY
  // YYYY-MM-DDTHH:MM:SS.000 to DD/MM/YYYY HH:MM:SS

  if (!d) return false

  d = moment(d)
    .utcOffset(-3)
    .format()

  const dateHour = d.split('T')
  const date = dateHour[0].split('-')

  const years = date[0]
  const month = date[1]
  const days = date[2]

  if (withHour && dateHour.length > 1) {
    return `${days}/${month}/${years} (${dateHour[1].split('-')[0]})`
  }
  return `${days}/${month}/${years}`
}

export const calculateDate = date => {
  if (date === undefined || date === null) return '0'

  const now = moment()
  const end = moment(date, 'DD/MM/YYYY')

  const duration = moment.duration(end.diff(now))
  const daysBasedOnDate = Math.round(duration.asDays() + 1)

  return daysBasedOnDate
}
