
pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'node app.js'
            }
        }

        stage('Test') {
            steps {
                echo 'Running test cases...'
                sh 'npx jest test.js'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}
