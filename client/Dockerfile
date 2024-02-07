FROM node:16.20.0

# Set working directory
WORKDIR /client

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install app dependencies
RUN npm install 

# Copy the rest of the application code
COPY . ./

# Set environment variables
ENV NODE_ENV=development
EXPOSE 4000

# Start the application
CMD ["npm", "start"]
