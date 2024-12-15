console.log('creative.js loaded successfully');

class CreativeAI {
    generateContent(request) {
        console.log(`Content generation requested for: ${request}`);
        return `Creative content generated for: ${request}`;
    }
}

module.exports = new CreativeAI();
