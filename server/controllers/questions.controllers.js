import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const addQuestion = async (req, res) => {
  const adminId = req.user.id;
  const {
    topicTitle,
    lecturerName,
    questionNum,
    question,
    choices,
    correctAnswer,
  } = req.body;

  try {
    const newQuestion = await client.questions.create({
      data: {
        topicTitle,
        lecturerName,
        questionNum,
        question,
        choices,
        correctAnswer,
        adminId,
      },
    });
    res.status(201).json({ success: true, data: newQuestion });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
