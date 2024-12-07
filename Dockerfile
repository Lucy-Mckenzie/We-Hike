
# Stage 1: Build the application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ["package.json", "package-lock.json*", "./"]

# Install dependencies and run build
RUN npm install \
    && npm run build

# Stage 2: Production environment
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy the built files from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/package-lock.json ./package-lock.json

# Install only production dependencies
RUN npm install --omit=dev \
    && npm install -g serve \
    && npm prune --omit=dev

# Set environment variable
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
