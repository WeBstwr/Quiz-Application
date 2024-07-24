import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const addParticipation = async (req, res) => {
  const studentId = req.user.id;
  const { topicName, topicId, questionsDone, results } = req.body;

  try {
    const newParticipation = await client.studentParticipation.create({
      data: {
        studentId,
        topicId,
        topicName,
        questionsDone,
        results,
      },
      select: {
        id: true,
        topicId: true,
        topicName: true,
        questionsDone: true,
        results: true,
      },
    });
    res.status(201).json({ success: true, data: newParticipation });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: e.message });
  }
};

export const getParticipationByStudentId = async (req, res) => {
  const studentId = req.user.id;

  try {
    const participations = await client.studentParticipation.findMany({
      where: { studentId },
    });

    res.status(200).json({ success: true, data: participations });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: e.message });
  }
};

export const getParticipationByTopicId = async (req, res) => {
  const { topicId } = req.params;

  try {
    const participations = await client.studentParticipation.findMany({
      where: { topicId },
    });

    res.status(200).json({ success: true, data: participations });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: e.message });
  }
};
