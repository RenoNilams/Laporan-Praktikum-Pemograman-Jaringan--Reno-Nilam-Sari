const request = require('postman-request');
const urlCuaca = 'http://api.weatherstack.com/current?access_key=87efdb13ffa5eba3995c3a96c260733e&query=-0.8969585983982873,100.35074034047204&units=m'

request({ url:urlCuaca, json:true}, (error, response) => {
    console.log('Saat ini suhu di luar mencapai ' + 
        response.body.current.temperature +
        'derajat celcius. Kemungkinan terjadinya hujan adalah ' + 
        response.body.current.precip + '%')
})