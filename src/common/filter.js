import Vue from 'vue'
import moment from 'moment'

Vue.prototype.$filters = Vue.options.filters

Vue.filter('monthByName', (month) => {
  switch (month) {
    case '1':
      return 'Januari'
    case '2':
      return 'Februari'
    case '3':
      return 'Maret'
    case '4':
      return 'April'
    case '5':
      return 'Mei'
    case '6':
      return 'Juni'
    case '7':
      return 'Juli'
    case '8':
      return 'Agustus'
    case '9':
      return 'September'
    case '10':
      return 'Oktober'
    case '11':
      return 'November'
    case '12':
      return 'Desember'
    default:
      break
  }
})

Vue.filter('indoDate', (stringDate) => {
  return moment(stringDate).locale('id').format('D MMM YYYY')
})

Vue.filter('hubungiDateTime', (stringDate) => {
  let datetime = stringDate.split(" ")
  let newDate  = datetime[0].split("-").reverse().join("-")
  return newDate+' '+datetime[1].slice(0,-3)

})

Vue.filter('indoDateTime', (stringDate) => {
  return moment(stringDate).locale('id').format('LLLL')
})

Vue.filter('indoDayName', (stringDate) => {
  return moment(stringDate).locale('id').format('dddd')
})

Vue.filter('dayOnly', (stringDate) => {
  return stringDate.split(' ')[0].split('-')[2]
})

Vue.filter('CheckIn', (stringJam) => {
  if(!stringJam || stringJam == null) return ''
  splittedJam = stringJam.split('.')
  testing = parseInt(splittedJam[0]) - 2
  return 'test'
})

Vue.filter('leftPad',  function (value) {
  return ('0'+value).slice(-2);
});
