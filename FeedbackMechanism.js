const DataProcessor = require('./DataProcessor.js');
const PsychologyPrinciples = require('./PsychologyPrinciples.js');

class FeedbackMechanism {
    constructor() {
        this.dataProcessor = new DataProcessor();
        this.psychologyPrinciples = new PsychologyPrinciples();
    }

    connectDevice() {
        this.dataProcessor.connectDevice();
    }

    disconnectDevice() {
        this.dataProcessor.disconnectDevice();
    }

    acquireAndProcessData() {
        this.dataProcessor.acquireData();
        let processedData = this.dataProcessor.getProcessedData();
        if (processedData === null) {
            console.log('Failed to acquire or process data. Please ensure the device is connected.');
            return;
        }
        return processedData;
    }

    provideFeedback() {
        let processedData = this.acquireAndProcessData();
        if (processedData === null) {
            console.log('No processed data available for feedback. Please ensure the data is acquired and processed.');
            return;
        }

        // Implement the feedback mechanism here.
        // This is a placeholder implementation.
        console.log('Providing feedback based on processed data...');

        // Get a relaxation technique and a mindfulness practice based on the processed data
        let relaxationTechnique = this.psychologyPrinciples.getRelaxationTechnique(processedData);
        let mindfulnessPractice = this.psychologyPrinciples.getMindfulnessPractice(processedData);

        console.log(`Suggested Relaxation Technique: ${relaxationTechnique}`);
        console.log(`Suggested Mindfulness Practice: ${mindfulnessPractice}`);

        console.log('Feedback provided successfully.');
    }
}

module.exports = FeedbackMechanism;
