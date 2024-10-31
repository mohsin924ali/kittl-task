# Use an official Node.js image as the base
FROM mcr.microsoft.com/playwright:focal

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install Node.js dependencies
RUN npm install -g npm && \
    npm install && \
    npx playwright install-deps && \
    npx playwright install

# Copy the rest of the project files
COPY . .

# Expose port if needed (for example, if you are running a local server)
# EXPOSE 3000

# Run Playwright tests by default
CMD ["npm", "test"]
