-- CreateTable
CREATE TABLE "topics_table" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "lecturer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "topics_table_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "added_questions_table" ADD CONSTRAINT "added_questions_table_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topics_table"("id") ON DELETE SET NULL ON UPDATE CASCADE;
