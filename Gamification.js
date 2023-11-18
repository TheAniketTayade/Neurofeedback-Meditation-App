class Gamification {
    constructor(userProfile) {
        this.userProfile = userProfile;
        this.points = 0;
        this.level = 1;
        this.achievements = [];
    }

    // Start the gamification process
    start() {
        console.log('Starting gamification...');
        this.updatePoints();
        this.updateLevel();
        this.updateAchievements();
    }

    // Update points based on user's progress
    updatePoints() {
        let progress = this.userProfile.getProgress();
        // Assume each progress unit equals to 10 points
        this.points = progress * 10;
        console.log(`Updated points: ${this.points}`);
    }

    // Update level based on points
    updateLevel() {
        // Assume each level requires 100 points
        this.level = Math.floor(this.points / 100) + 1;
        console.log(`Updated level: ${this.level}`);
    }

    // Update achievements based on user's goals
    updateAchievements() {
        let goals = this.userProfile.getGoals();
        // Assume each achieved goal equals to one achievement
        this.achievements = goals.filter(goal => goal.isAchieved);
        console.log(`Updated achievements: ${this.achievements.length}`);
    }

    // Get user's points
    getPoints() {
        return this.points;
    }

    // Get user's level
    getLevel() {
        return this.level;
    }

    // Get user's achievements
    getAchievements() {
        return this.achievements;
    }
}

module.exports = Gamification;
