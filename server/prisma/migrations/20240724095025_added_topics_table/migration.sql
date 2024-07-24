-- AddForeignKey
ALTER TABLE "added_questions_table" ADD CONSTRAINT "added_questions_table_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topics_table"("id") ON DELETE SET NULL ON UPDATE CASCADE;
