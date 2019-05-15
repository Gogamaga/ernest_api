const axios = require('axios')

function getAllData(page){
    return axios
        .get(`https://ximx6qvdgc.execute-api.eu-west-1.amazonaws.com/v2/travel-options?lang=uk&client=desktop&time=1556107200000&legs%5B0%5D%5Bdeparture_airport%5D=FCO&legs%5B0%5D%5Barrival_airport%5D=LWO&adult=1&promocode=&page=${page}`)

}

module.exports = {
    getAllData
}