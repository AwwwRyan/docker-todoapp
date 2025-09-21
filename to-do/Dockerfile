# Use official Node.js LTS image (Debian-based)
FROM node:18-bullseye

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (dev + prod)
RUN npm install

# Copy source code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose Next.js default port
EXPOSE 3000

# Start Next.js server
CMD ["npm", "start"]
