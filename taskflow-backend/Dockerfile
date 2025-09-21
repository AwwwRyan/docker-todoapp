# Base image with Node.js
FROM node:18-alpine

# Create app directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install only production dependencies (ignores devDependencies like nodemon)
RUN npm install --only=production

# Copy all source code into container
COPY . .

# Expose backend port
EXPOSE 5000

# Start backend server using "npm start" (runs "node index.js")
CMD ["npm", "start"]