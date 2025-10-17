# Use official Node.js LTS image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the source code
COPY . .

# Expose the port (matches process.env.PORT)
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
