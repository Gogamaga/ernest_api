const AVAILABLE = require('./schema')
const moment = require('moment')

module.exports = {
    save({LWO, FCO}){
        const available = new AVAILABLE({LWO, FCO})
        return available.save()
    },
    getLast(){
        return AVAILABLE.findOne({}, {}, { sort: { 'created_at' : -1 } })
    },
    getByDate({from, to}){

        return AVAILABLE.find({ created_at: {$gte: moment(from).format(), $lte: moment(to).add(1, "d").format()}})
    }
}