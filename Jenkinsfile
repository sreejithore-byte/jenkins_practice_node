
pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building application...'
                sh 'node app.js'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Jest tests...'
                sh 'npm install'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}
