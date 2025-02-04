# Step 1: Build the React app
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React app code
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the app
FROM nginx:alpine

# Copy the build output from the previous step
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (default for nginx)
EXPOSE 80

# Start nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
