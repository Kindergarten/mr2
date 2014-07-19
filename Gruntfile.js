module.exports = function (grunt) {
    var matchdep;

    matchdep = require("matchdep");

    matchdep.filterAll("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        // Variables/helpers.
        pkg: grunt.file.readJSON("package.json"),

        // Common directories.
        buildDir: "./build_tasks",

        // All tasks.
        connect: require("./build_tasks/connect/connect-task.js")
    });

    // Task responsible for the environment.
    grunt.registerTask("init-server", ["connect"]);

    // Default task.
    grunt.registerTask("default", ["init-server"]);
};