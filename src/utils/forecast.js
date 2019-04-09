const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/597f66775834dc285b18b888b3ef2a52/' + latitude + ',' + longitude + '?units=si'

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else{
            callback(undefined, body.daily.data[0].summary + ' It is ' + body.currently.temperature + ' degrees outside. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }

    } )

}




module.exports = forecast