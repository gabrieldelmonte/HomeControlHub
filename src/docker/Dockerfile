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

# Explicitly install jsonwebtoken and its types before building (can be done after npm ci)
RUN npm install jsonwebtoken @types/jsonwebtoken

# Copying the entire source code (this includes db/prisma/schema.prisma and src/)
COPY . .

# Generate Prisma client - path relative to WORKDIR /app
# Schema: /app/db/prisma/schema.prisma
# Output according to schema.prisma: /app/db/prisma/generated/prisma-client
RUN npx prisma generate --schema=./db/prisma/schema.prisma || true

# For TypeScript Compiler (tsc):
# Copy the generated client from where schema.prisma dictates its output
# to src/db/prisma/generated/prisma-client so infrastructure.ts can find it.
RUN mkdir -p ./src/db/prisma/generated/prisma-client && \
    cp -R ./db/prisma/generated/prisma-client/* ./src/db/prisma/generated/prisma-client/

# Build the application
# tsc compiles src/code/infrastructure.ts which imports ../db/prisma/generated/prisma-client
# (resolves to src/db/prisma/generated/prisma-client, which now exists with the correct client)
# Output is in ./dist. Compiled JS in dist/code/infrastructure.js will have the same relative import.
RUN npm run build

# For Runtime:
# Copy the Prisma client from where tsc found it (src/db/prisma/generated/prisma-client)
# to where the compiled JS will expect it (dist/db/prisma/generated/prisma-client).
RUN mkdir -p ./dist/db/prisma/generated/prisma-client && \
    cp -R ./src/db/prisma/generated/prisma-client/* ./dist/db/prisma/generated/prisma-client/

# 2) Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Install runtime OpenSSL
RUN apk add --no-cache openssl

# Set the environment variable to production
ENV NODE_ENV=production

# Copy package.json (might be needed for npm start scripts or metadata)
COPY package.json ./

# Copy node_modules from builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copying the built application from the builder stage
# The /app/dist directory in builder now contains the client at dist/db/prisma/generated/prisma-client
COPY --from=builder /app/dist ./dist

# Copy the Prisma schema and migrations from the original db/prisma location in builder
# for runtime use by Prisma CLI (e.g., prisma migrate deploy)
# This should also include the db/prisma/generated/prisma-client if needed directly by prisma CLI tools in runtime,
# but the primary use for runtime is the client within dist.
COPY --from=builder /app/db/prisma ./db/prisma

COPY docker/compose/mosquitto/init/wait-and-start.sh /usr/local/bin/wait-and-start.sh
RUN chmod +x /usr/local/bin/wait-and-start.sh

# Copying the public directory
EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/wait-and-start.sh"]
#CMD ["node", "dist/main.js"]
