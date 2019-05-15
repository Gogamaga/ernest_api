const DB_USER_NAME = 'gogamaga'
const DB_PASSWORD = 'chatty35'

const DB_URL = `mongodb://${DB_USER_NAME}:${DB_PASSWORD}@ds149676.mlab.com:49676/ernest`

const COLLECTIONS = {
    PRICES: 'prices',
    AVAILABLE: 'available'
}

module.exports = {
    DB_URL,
    COLLECTIONS
}