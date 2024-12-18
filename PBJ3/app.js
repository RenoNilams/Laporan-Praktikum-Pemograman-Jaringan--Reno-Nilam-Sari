const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=87efdb13ffa5eba3995c3a96c260733e&query=-0.8969585983982873,100.35074034047204'
request({ url: url}, (error, response) => {
    console.log(response)
    const data = JSON.parse(response.body)
    console.log(data)
    console.log(data.current)
    console.log(data.current.temperature)
})