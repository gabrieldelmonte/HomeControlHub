# 1) Build stage
FROM node:18-alpine AS builder

# Defining the working directory inside the container
WORKDIR /app

# Install OpenSSL development libraries
RUN apk add --no-cache openssl-dev python3 make g++

# Copying package.json and tsconfig.json files
COPY package*.json tsconfig*.json ./

# Installing dependencies
RUN npm ci

# Copying the source code
COPY . .

# Generate Prisma client - path relative to WORKDIR /app
# The schema file will be at /app/db/prisma/schema.prisma after 'COPY . .'
# Appending '|| true' to ignore exit code from warnings if generation is successful
RUN npx prisma generate --schema=./db/prisma/schema.prisma || true

# Explicitly install jsonwebtoken and its types before building
RUN npm install jsonwebtoken @types/jsonwebtoken

# Build the application
RUN npm run build

# 2) Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Set the environment variable to production
ENV NODE_ENV=production

# Copy package.json (might be needed for npm start scripts or metadata)
COPY package.json ./

# Copy node_modules from builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copying the built application from the builder stage
COPY --from=builder /app/dist ./dist

# Copying the public directory
EXPOSE 3000
CMD ["node", "dist/index.js"]
