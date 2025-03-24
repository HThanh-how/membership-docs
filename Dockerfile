# Stage 1: Build the static site using Node
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy the package.json (and package-lock.json if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build the static website using Docusaurus
RUN npm run build

# Stage 2: Serve the static site using NGINX
FROM nginx:alpine

# Copy the built files from the builder stage to nginx's html folder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]