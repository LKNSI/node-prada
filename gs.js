/*

(shapiroThreshold,distMetric,thrUpdateRule)

*/
const nj = require('numjs'); // Requires this fork: https://github.com/LKNSI/numjs
const scipy = require('scipy');

class GDA {
	constructor(shapiroThreshold,distMetric,thrUpdateRule){
		this.shapiroThreshold = shapiroThreshold
		this.distMetric = distMetric
		this.thrUpdateRule = thrUpdateRule

		this.growingSet = new Set()
		this.growingSetDists = new Set()
		this.setSizeOT = new Set()
		this.gsSize = 0
		this.queriesProcessed = 0
		this.threshold = new Set()
		this.attackerPresent = 0
		this.attackerPresentOT = []

		this.distriStats = {
			shapiro: []
		}
		this.inputDistances = new Set()

	}

	updateThreshold(gsDistances,currentThreshold){
		threshold_candidate = this.thrUpdateRule(gsDistances)
		return Math.max(threshold_candidate, currentThreshold)
	}

	rejectOutliers(data,m){
		m = (typeof(m) === "undefined") ? 2 : m
		return data[Math.abs(data - nj.mean(data)) < (m * nj.std(data))]
	}

	singleQuery(query,tc){
		if(!(this.growingSet.has(tc))){
			this.growingSet[tc] = query
			this.threshold[tc] = 0
			this.growingSetDists[tc] = [0]
			this.gsSize += 1
		}else{
			let distsArray = []
			for(const t of this.growingSet[tc]){
				let dae = this.distMetric(t,query) 
				distsArray.push(dae)
			}
			let dists = nj.array(distsArray)
			let min = nj.min(dists)

			if(!(this.inputDistances.has(tc))){
				this.inputDistances[tc] = [min]
			}else{
				this.inputDistances[tc] = [...this.inputDistances[tc],min]
			}

			if(min > this.threshold[tc]){
				let mv = this.updateThreshold(np.array(this.growingSetDists[tc]),this.threshold[tc])
				this.growingSet[tc] = [...this.growingSet[tc],query]
				this.gsSize += 1
				this.growingSetDists[tc] = [...this.growingSetDists[tc],min]
				this.threshold[tc] = mv
			}

			this.setSizeOT.add(this.gsSize)
		}

		if(this.queriesProcessed % 10 === 0){
			var dists = []
			for(const t of this.inputDistances){
				if(t.length >= 10){
					dists.push(t)
				}
			}

			var distsEval = rejectOutliers(nj.array(dists),3)
			console.log(distsEval)

			if(distsEval.length > 100){
				var k2Eval = scipy.stats.shapiro(distsEval)
				this.distriStats["shapiro"].push(k2Eval)
				this.attackerPresent = (k2Eval < this.shapiroThreshold) ? true : false
			}

			this.attackerPresentOT.push[this.attackerPresent]
			this.queriesProcessed += 1
		}

		return this.attackerPresent
	}

}

module.exports = {
	GDA: GDA
}