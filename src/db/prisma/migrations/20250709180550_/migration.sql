/*
  Warnings:

  - You are about to drop the column `firmwareVersion` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `lastKnownState` on the `Device` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mqttTopic]` on the table `Device` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `location` to the `Device` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mqttTopic` to the `Device` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Device" DROP COLUMN "firmwareVersion",
DROP COLUMN "lastKnownState",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "mqttTopic" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Device_mqttTopic_key" ON "Device"("mqttTopic");

-- CreateIndex
CREATE INDEX "Device_location_idx" ON "Device"("location");
