/*
  Warnings:

  - Added the required column `name` to the `AutomationRule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AutomationRule" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Device" ALTER COLUMN "firmwareVersion" DROP NOT NULL,
ALTER COLUMN "firmwareVersion" DROP DEFAULT;
