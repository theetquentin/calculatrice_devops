pipeline {
    agent any

    stages {
        stage('Install & Test') {
            steps {
                echo 'Installation des dépendances et lancement des tests...'
                // Installer les dépendances
                sh 'npm ci'
                // Lancer les tests
                sh 'npm test'
            }
        }

        stage('Build & Deploy') {
            steps {
                echo 'Build et relance des containers Docker...'
                // Rebuild et relance les containers avec Docker Compose
                sh 'docker-compose up -d --build'
            }
        }
    }

    post {
        success {
            echo 'Déploiement terminé avec succès !'
        }
        failure {
            echo 'Les tests ont échoué, le déploiement a été annulé.'
        }
    }
}
