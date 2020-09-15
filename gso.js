const nj = require('numjs'); // Requires this fork: https://github.com/LKNSI/numjs

const l2 = (i,e) => {
	let a = nj.ndarray(i)
	let b = nj.ndarray(e)
	return nj.sqrt(nj.sum((a-b) ** 2))
}

const meanDifStd = (arr) => {
	return (Math.mean(arr) - Math.std(arr))
}

const softMax = (w,t) => {
	t = (typeof(t) === "undefined") ? 1.0 : t
	e = nj.exp(w /t)
	dist = e / nj.sum(e)
	return dist
}

module.exports = { 
	l2: l2,
	meanDifStd: meanDifStd,
	softMax: softMax
}