/*
  Warnings:

  - A unique constraint covering the columns `[topicId]` on the table `added_questions_table` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "added_questions_table" DROP CONSTRAINT "added_questions_table_topicId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "added_questions_table_topicId_key" ON "added_questions_table"("topicId");
