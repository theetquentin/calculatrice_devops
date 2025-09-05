pipeline {
    agent any

    stages {
        stage('Install Docker') {
            steps {
                sh 'bash ./docker.sh'
            }
        }

        stage('Tests') {
            steps {
                sh 'docker compose run --rm test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose up -d --build app'
            }
        }
    }
}
