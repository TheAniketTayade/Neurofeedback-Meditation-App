const EEGDevice = require('./EEGDevice.js');

class DataProcessor {
    constructor() {
        this.EEGDevice = new EEGDevice();
        this.EEGData = [];
    }

    connectDevice() {
        this.EEGDevice.connect();
    }

    disconnectDevice() {
        this.EEGDevice.disconnect (this.EEGData.length === 0) {
            console.log('No data to process. Please acquire data first.');
            return;
        }

        // Implement the real-time data processing here.
        // This is a placeholder implementation.
        console.log('Processing EEG data...');
        let processedData = this.EEGData.map(data => data * 2); // Placeholder processing

        console.log('Data processed successfully.');
        return processedData;
    }

    getProcessedData() {
        let processedData = this.processEEGData();
        if (processedData === undefined) {
            console.log('No processed data available. Please process the data first.');
            return null;
        }
        return processedData;
    }
}

module.exports = DataProcessor;
