#!/usr/bin/env sh
until nc -z mosquitto 1883; do
  echo "Waiting for MQTT broker..."
  sleep 2
done

echo "Migrating database..."
npx prisma migrate deploy --schema=./db/prisma/schema.prisma
echo "Starting application..."
exec node dist/main.js
