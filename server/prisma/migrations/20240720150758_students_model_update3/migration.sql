/*
  Warnings:

  - You are about to drop the column `approvedAcoount` on the `students_table` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "students_table" DROP COLUMN "approvedAcoount",
ADD COLUMN     "approvedAccount" BOOLEAN DEFAULT false;
