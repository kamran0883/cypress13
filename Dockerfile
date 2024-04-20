# Use the official Cypress/base image with all dependencies
FROM cypress/base:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install Cypress and other dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose necessary ports if needed
EXPOSE 8080

# Command to run your tests
CMD ["npx", "cypress", "run"]
