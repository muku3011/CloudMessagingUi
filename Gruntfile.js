module.exports = function gruntInit(grunt) {
    const packageJson = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: packageJson,
        env: {
            option: {
            },
            test: {
                NODE_ENV: 'test',
            }
        },

        maven: {
            options: {
                groupId: 'com.cloud.messaging',
                artifactId: 'cloud-messaging-ui',
                version: '<%= pkg.version %>',
                packaging: '<%= pkg.com_cloud_messaging.mavenArtifactType %>',
                injectDestFolder: false,
            },

            deploy: {
                options: {
                    goal: 'deploy',
                    url: 'https://maven.pkg.github.com/muku3011/cloud-messaging-ui',
                    repositoryId: 'github'
                  },
                files: [{
                    expand: true, cwd: 'dist/cloud-messaging-ui/', src: ['**'], dest: 'static',
                }]
            },

            install: {
                options: {
                    goal: 'install',
                },
                files: [{
                    expand: true, cwd: 'dist/cloud-messaging-ui/', src: ['**'], dest: 'static',
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-maven-tasks');
    grunt.registerTask('mvn:intall', 'maven:install');
    grunt.registerTask('mvn:deploy', 'maven:deploy');
};