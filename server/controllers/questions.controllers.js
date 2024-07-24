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
    let topic = await client.topic.findFirst({
      where: { title: topicTitle, lecturer: lecturerName },
    });

    if (!topic) {
      topic = await client.topic.create({
        data: { title: topicTitle, lecturer: lecturerName },
      });
    }

    const newQuestion = await client.questions.create({
      data: {
        topicTitle,
        lecturerName,
        questionNum,
        question,
        choices,
        correctAnswer,
        adminId,
        topicId: topic.id,
      },
    });

    res.status(201).json({ success: true, data: newQuestion });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: e.message });
  }
};

export const getQuestionsByTopicId = async (req, res) => {
  const { topicId } = req.params;

  try {
    const questions = await client.questions.findMany({
      where: { topicId: topicId },
    });

    if (questions.length > 0) {
      res.status(200).json({ success: true, data: questions });
    } else {
      res.status(404).json({ success: false, message: "Questions not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: error.message });
  }
};
