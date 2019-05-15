const {getAllData} = require('../networking')

async function getData(){
    let data = [[], []]
    let page = 1
    let isFetching = true
    while (isFetching){
        const result = await getAllData(page)
        data = [[...data[0], ...result.data.data[0]], [...data[1], ...result.data.data[1]]]
        page++
        if(!result.data.data[0].length){
            isFetching = false
        }
        console.log(page)
    }
    return data
}

module.exports = {
    getData
}