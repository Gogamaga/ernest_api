const PRICES = require('./schema')
const moment = require('moment')

module.exports = {
    save({data}){
        const prices = new PRICES({data})
        return prices.save()
    },
    getLast(){
        return PRICES.findOne({}, {}, { sort: { 'created_at' : -1 } })
    },
    getByDate({from, to}){

        return PRICES.find({ created_at: {$gte: moment(from).format(), $lte: moment(to).add(1, "d").format()}})
    }
}