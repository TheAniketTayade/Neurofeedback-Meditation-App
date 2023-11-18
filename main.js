// Importing required modules
const fs = require('fs');
const EEGDevice = require('./EEGDevice.js');
const DataProcessor = require('./DataProcessor.js');
const PsychologyPrinciples = require('./PsychologyPrinciples.js');
const FeedbackMechanism = require('./FeedbackMechanism.js');
const UserProfile = require('./UserProfile.js');
const Gamification = require('./Gamification.js');
const Security = require('./Security.js');
const AppTest = require('./AppTest.js');
const Compliance = require('./Compliance.js');

// Reading configuration file
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// Initializing EEG device
const eegDevice = new EEGDevice(config.EEGDevice);

// Initializing data processor with EEG device
const dataProcessor = new DataProcessor(config.DataProcessor, eegDevice);

// Initializing user profile
const userProfile = new UserProfile(config.UserProfile);

// Initializing psychology principles
const psychologyPrinciples = new PsychologyPrinciples();

// Initializing feedback mechanism with data processor and psychology principles
const feedbackMechanism = new FeedbackMechanism(dataProcessor, psychologyPrinciples, userProfile);

// Initializing gamification (optional)
const gamification = new Gamification(userProfile);

// Initializing security
const security = new Security(config.Security);

// Initializing compliance
const compliance = new Compliance();

// Running app tests
const appTest = new AppTest();
appTest.runTests();

// Starting the application
function startApp() {
    // Connect to the EEG device
    eegDevice.connect();

    // Start data processing
    dataProcessor.startProcessing();

    // Start feedback mechanism
    feedbackMechanism.startFeedback();

    // Start gamification (optional)
    gamification.start();

    // Check compliance
    compliance.checkCompliance();

    // Ensure security
    security.ensureSecurity();
}

startApp();
