console.log('AI Manager initialized successfully');

const aiManager = {
    developer: () => console.log('Developer AI activated'),
    analyst: () => console.log('Analyst AI activated'),
    creative: () => console.log('Creative AI activated'),
    automation: () => console.log('Automation AI activated'),
    advisor: () => console.log('Advisor AI activated'),

    interactWithAI(type, payload) {
        switch (type) {
            case 'developer':
                console.log('Interacting with Developer AI:', payload);
                this.developer();
                break;
            case 'analyst':
                console.log('Interacting with Analyst AI:', payload);
                this.analyst();
                break;
            case 'creative':
                console.log('Interacting with Creative AI:', payload);
                this.creative();
                break;
            case 'automation':
                console.log('Interacting with Automation AI:', payload);
                this.automation();
                break;
            case 'advisor':
                console.log('Interacting with Advisor AI:', payload);
                this.advisor();
                break;
            default:
                console.log('Unknown AI type:', type);
        }
    }
};

// Példa hívás:
aiManager.interactWithAI('developer', { task: 'Optimize code' });
