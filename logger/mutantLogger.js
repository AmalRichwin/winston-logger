const winston = require('winston')
const { printf, label, timestamp, prettyPrint, combine, colorize } =
	winston.format
const myFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}]  [${level}]: ${message}`
})

const mutantLogger = () => {
	return winston.createLogger({
		level: 'info',
		format: combine(
			colorize(),
			label({ label: 'MUTANT🔥' }),
			timestamp({ format: 'DD/MM/YY HH:mm:ss' }),
			myFormat
		),
		// defaultMeta: { service: 'user-service' },
		transports: [
			//
			// - Write all logs with level `error` and below to `error.log`
			// - Write all logs with level `info` and below to `combined.log`
			//
			new winston.transports.File({ filename: 'error.log', level: 'error' }),
			new winston.transports.File({ filename: 'combined.log' }),
			new winston.transports.Console(),
		],
	})
}

module.exports = mutantLogger
