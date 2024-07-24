/*
  Warnings:

  - Added the required column `lecturerName` to the `added_questions_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "added_questions_table" ADD COLUMN     "lecturerName" TEXT NOT NULL;
