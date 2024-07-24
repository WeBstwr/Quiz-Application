-- CreateTable
CREATE TABLE "students_participation_table" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "topicId" TEXT NOT NULL,
    "questionsDone" INTEGER NOT NULL,
    "results" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "students_participation_table_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "students_participation_table" ADD CONSTRAINT "students_participation_table_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students_participation_table" ADD CONSTRAINT "students_participation_table_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topics_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
