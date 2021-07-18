const mutantLogger = require('./mutantLogger')

let logger = null

if (process.env.NODE_ENV !== 'production') {
	logger = mutantLogger()
}

module.exports = logger
