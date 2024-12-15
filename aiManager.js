const path = require('path');

const developer = require('./AI-Family/developer');
const analyst = require('./AI-Family/analyst');
const creative = require('./AI-Family/creative');
const automation = require('./AI-Family/automation');
const advisor = require('./AI-Family/advisor');

console.log('aiManager.js loaded successfully');

const aiManager = {
    developer,
    analyst,
    creative,
    automation,
    advisor,
    
    interactWithAI: function(type, payload) {
        console.log('Interacting with AI:', type, 'Payload:', payload);
        if (this[type]) {
            console.log(this[type](payload));
        } else {
            console.warn(`AI type '${type}' is not recognized.`);
        }
    }
};

module.exports = aiManager;
