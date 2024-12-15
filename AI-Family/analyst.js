class AnalystAI {
    analyzeData(data) {
        return `Analysis result for the provided data: ${JSON.stringify(data)}`;
    }
}

module.exports = new AnalystAI();
