# Use Node.js LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the code
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD ["npm", "start"]
