-- AlterTable
ALTER TABLE "SystemLog" ADD COLUMN     "deviceId" TEXT,
ADD COLUMN     "userId" TEXT;

-- CreateIndex
CREATE INDEX "SystemLog_deviceId_createdAt_idx" ON "SystemLog"("deviceId", "createdAt");

-- AddForeignKey
ALTER TABLE "SystemLog" ADD CONSTRAINT "SystemLog_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SystemLog" ADD CONSTRAINT "SystemLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
