console.log('aiManager.js loaded successfully');

const DeveloperAI = require('./developer');
const AnalystAI = require('./analyst');
const CreativeAI = require('./creative');
const AutomationAI = require('./automation');
const AdvisorAI = require('./advisor');

class AIManager {
    constructor() {
        this.developer = new DeveloperAI();
        this.analyst = new AnalystAI();
        this.creative = new CreativeAI();
        this.automation = new AutomationAI();
        this.advisor = new AdvisorAI();
    }
    
    interactWithAI(type, payload) {
        console.log(`AI interaction requested: type=${type}, payload=${payload}`);
        switch (type) {
            case 'developer':
                return this.developer.generateCode(payload);
            case 'analyst':
                return this.analyst.analyzeData(payload);
            case 'creative':
                return this.creative.generateContent(payload);
            case 'automation':
                return this.automation.executeTask(payload);
            case 'advisor':
                return this.advisor.giveAdvice(payload);
            default:
                return 'Unknown AI type.';
        }
    }
}

module.exports = new AIManager();
