/**
 *
 * @param {Array} data
 * @returns {Array}
 */
function filterData(data){
    return data.map(item => {
        return {
            date: item.date['Y-M-D'],
            segments: item.segments,
            fares: item.fares.map(item => {
                return {
                    description: item.description,
                    adult_base: item.adult_base,
                    adult_discount: item.adult_discount,
                    adult_total: item.adult_total,
                    child_base: item.child_base,
                    child_discount: item.child_discount,
                    child_total: item.child_total,
                    flight_base: item.flight_base,
                    flight_discount: item.flight_discount,
                    flight_ernest_promo: item.flight_ernest_promo,
                    flight_total: item.flight_total
                }
            })
        }
    })
}

function getAvailableDate(data){
    return data.map(item => item.date['Y-M-D'])
}

module.exports = {
    filterData,
    getAvailableDate
}