-- CreateTable
CREATE TABLE "added_questions_table" (
    "id" TEXT NOT NULL,
    "topicTitle" TEXT NOT NULL,
    "questionNum" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "choices" TEXT[],
    "correctAnswer" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,

    CONSTRAINT "added_questions_table_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "added_questions_table" ADD CONSTRAINT "added_questions_table_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "students_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
