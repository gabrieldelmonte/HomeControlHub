# 1) Build stage
FROM node:18-alpine AS builder

# Defining the working directory inside the container
WORKDIR /app

# Install OpenSSL development libraries
RUN apk add --no-cache openssl-dev python3 make g++ curl

# Copying package.json and tsconfig.json files
COPY package*.json tsconfig*.json ./

# Installing dependencies
RUN npm ci

# Explicitly install jsonwebtoken and its types before building
RUN npm install jsonwebtoken @types/jsonwebtoken

# Copying the entire source code
COPY . .

# Generate Prisma client
RUN npx prisma generate --schema=./db/prisma/schema.prisma || true

# Copy the generated client to the correct location
RUN mkdir -p ./src/db/prisma/generated/prisma-client && \
    cp -R ./db/prisma/generated/prisma-client/* ./src/db/prisma/generated/prisma-client/

# Build the backend application
RUN npm run build

# Build the React UI
RUN npm run build:ui

# Compile seed.ts into dist
RUN npx tsc ./db/seed.ts --outDir ./dist/db --module commonjs --esModuleInterop --resolveJsonModule --target es2020 --sourceMap --skipLibCheck

# Copy the Prisma client to the dist directory
RUN mkdir -p ./dist/db/prisma/generated/prisma-client && \
    cp -R ./src/db/prisma/generated/prisma-client/* ./dist/db/prisma/generated/prisma-client/

# 2) Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Install runtime OpenSSL
RUN apk add --no-cache openssl

# Set the environment variable to production
ENV NODE_ENV=production

# Copy package.json
COPY package.json ./

# Copy node_modules from builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copy the built backend application
COPY --from=builder /app/dist ./dist

# Copy the built React UI
COPY --from=builder /app/dist-ui ./dist-ui

# Copy the Prisma schema and migrations
COPY --from=builder /app/db/prisma ./db/prisma

# Copy the wait-and-start script
COPY docker/compose/mosquitto/init/wait-and-start.sh /usr/local/bin/wait-and-start.sh
RUN chmod +x /usr/local/bin/wait-and-start.sh

# Expose ports for backend (3000) and frontend (80)
EXPOSE 3000 80

# Start both the backend and serve the frontend
ENTRYPOINT ["/usr/local/bin/wait-and-start.sh"]
