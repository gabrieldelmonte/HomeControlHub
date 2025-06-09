#!/usr/bin/env sh

# Wait for MQTT broker to be available
until nc -z mosquitto 1883; do
  echo "Waiting for MQTT broker..."
  sleep 2
done
echo "MQTT broker is up!"

# Run database migrations
echo "Running database migrations..."
npx prisma migrate deploy --schema=./db/prisma/schema.prisma

# Seed the database
echo "Seeding the database..."
npx prisma db seed

# Start Prisma Studio in the background
echo "Starting Prisma Studio..."
npx prisma studio --schema=./db/prisma/schema.prisma --port 5555 &

# Start the backend server in the background
echo "Starting backend server..."
node dist/main.js &

# Start serving the frontend using a simple HTTP server
echo "Starting frontend server..."
cd dist-ui
npx serve -s . -l 9877 &

# Keep the container running
wait
