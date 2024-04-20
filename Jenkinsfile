pipeline {
    agent any

    environment {
        CHROME_PARALLELISM = 4
        FIREFOX_PARALLELISM = 2
    }

    stages {
        stage('Build and Test Chrome') {
            steps {
                script {
                    // Assuming you have Node.js installed on your Jenkins agent
                    // Adjust the paths and configurations accordingly
                    sh 'npm install'
                    sh 'npm start &'
                    sh "npx cypress run --record --parallel --group chrome --browser chrome"
                }
            }
        }

        stage('Build and Test Firefox') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm start &'
                    sh "npx cypress run --record --parallel --group firefox --browser firefox --spec cypress/e2e/app.cy.js,cypress/e2e/login.cy.js,cypress/e2e/about.cy.js"
                }
            }
        }
    }

    post {
        always {
            // Clean up or post-processing steps if needed
        }
    }
}
