class UserProfile {
    constructor(config) {
        this.name = config.name;
        this.preferences = config.preferences;
        this.progress = config.progress;
        this.goals = config.goals;
    }

    // Get user's name
    getName() {
        return this.name;
    }

    // Get user's preferences
    getPreferences() {
        return this.preferences;
    }

    // Get user's progress
    getProgress() {
        return this.progress;
    }

    // Get user's goals
    getGoals() {
        return this.goals;
    }

    // Update user's preferences
    updatePreferences(newPreferences) {
        this.preferences = newPreferences;
    }

    // Update user's progress
    updateProgress(newProgress) {
        this.progress = newProgress;
    }

    // Update user's goals
    updateGoals(newGoals) {
        this.goals = newGoals;
    }
}

module.exports = UserProfile;
