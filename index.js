const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const moment = require('moment')
const schedule = require('node-schedule')

const app = express()
const prices = require('./data_base/prices')
const available = require('./data_base/availableDate')
const { getData } = require('./store')
const { filterData, getAvailableDate } = require('./helpers')

app.use(bodyParser.json())
app.use(cors())

const j = schedule.scheduleJob('0 */5 * * * ', function(){
    saveData()
})

function saveData(){
    return getData()
        .then(data => {
            const availableLWO = getAvailableDate(data[ 1 ])
            const availableFCO = getAvailableDate(data[ 0 ])
            available.save({ LWO: availableLWO, FCO: availableFCO }).then(res => console.log(res))
            return prices.save({ data: [ filterData(data[ 1 ]), filterData(data[ 0 ]) ] })
        })
}

app.get('/update-data', (req, res) => {
    saveData().then((data) => res.send(data))

})

app.get('/prices', (req, res) => {
    prices.getLast().then(data => res.send(data))
})

app.get('/available-dates', (req, res) => {
    available.getLast().then(data => res.send(data))
})

app.get('/all-data', (req, res) => {
    const { from, to, date } = req.query
    prices.getByDate({ from, to }).then(data => {
        console.log('base')
        const dataByDate = data.map(item => {
            return {
                created_at: item.created_at,
                data: item.data.map(item => item.filter(item => moment(item.date).diff(date, "d") === 0)
                )
            }
        })
        res.send(dataByDate)
    })
})

app.listen(8000, () => console.log('server start'))