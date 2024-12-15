console.log('advisor.js loaded successfully');

class AdvisorAI {
    giveAdvice(topic) {
        console.log(`Advice requested for topic: ${topic}`);
        return `Advice for topic "${topic}": Trust your instincts!`;
    }
}

module.exports = new AdvisorAI();
