const { GDA } = require('./gs')
const {	l2, meanDifStd, softMax } = require('./gso')
const nj = require('numjs'); // Requires this fork: https://github.com/LKNSI/numjs

const PRADA = (shapiro) => {
	const PRADAagent = new GDA(shapiro,l2,meanDifStd)

	PRADAagent.singleQuery(0,1)

}

PRADA()