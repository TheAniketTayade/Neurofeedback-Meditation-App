const assert = require('assert');
const EEGDevice = require('./EEGDevice.js');
const DataProcessor = require('./DataProcessor.js');
const PsychologyPrinciples = require('./PsychologyPrinciples.js');
const FeedbackMechanism = require('./FeedbackMechanism.js');
const UserProfile = require('./UserProfile.js');
const Gamification = require('./Gamification.js');
const Security = require('./Security.js');
const Compliance = require('./Compliance.js');

class AppTest {
    constructor() {
        this.EEGDevice = new EEGDevice();
        this.DataProcessor = new DataProcessor();
        this.PsychologyPrinciples = new PsychologyPrinciples();
        this.FeedbackMechanism = new FeedbackMechanism();
        this.UserProfile = new UserProfile();
        this.Gamification = new Gamification();
        this.Security = new Security();
        this.Compliance = new Compliance();
    }

    runTests() {
        console.log('Running tests...');

        this.testEEGDevice();
        this.testDataProcessor();
        this.testPsychologyPrinciples();
        this.testFeedbackMechanism();
        this.testUserProfile();
        this.testGamification();
        this.testSecurity();
        this.testCompliance();

        console.log('All tests passed!');
    }

    testEEGDevice() {
        assert(this.EEGDevice.isConnected === false);
        this.EEGDevice.connect();
        assert(this.EEGDevice.isConnected === true);
        this.EEGDevice.disconnect();
        assert(this.EEGDevice.isConnected === false);
    }

    testDataProcessor() {
        this.DataProcessor.connectDevice();
        assert(this.DataProcessor.EEGDevice.isConnected === true);
        this.DataProcessor.disconnectDevice();
        assert(this.DataProcessor.EEGDevice.isConnected === false);
    }

    testPsychologyPrinciples() {
        assert(this.PsychologyPrinciples.relaxationTechniques.length > 0);
        assert(this.PsychologyPrinciples.mindfulnessPractices.length > 0);
    }

    testFeedbackMechanism() {
        this.FeedbackMechanism.connectDevice();
        assert(this.FeedbackMechanism.dataProcessor.EEGDevice.isConnected === true);
        this.FeedbackMechanism.disconnectDevice();
        assert(this.FeedbackMechanism.dataProcessor.EEGDevice.isConnected === false);
    }

    testUserProfile() {
        assert(this.UserProfile.preferences !== undefined);
        assert(this.UserProfile.progress !== undefined);
    }

    testGamification() {
        assert(this.Gamification.challenges !== undefined);
        assert(this.Gamification.rewards !== undefined);
        assert(this.Gamification.achievements !== undefined);
    }

    testSecurity() {
        assert(this.Security.encryption !== undefined);
        assert(this.Security.privacyPolicy !== undefined);
    }

    testCompliance() {
        assert(this.Compliance.privacyStandards !== undefined);
        assert(this.Compliance.securityMeasures !== undefined);
    }
}

module.exports = AppTest;
