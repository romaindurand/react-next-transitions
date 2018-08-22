const routes = require('next-routes')

module.exports = routes()
.add('/', 'Home')
.add('/first', 'First')
.add('/second', 'Second')
.add('/third', 'Third')
