import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const getTopics = async (req, res) => {
  try {
    const topics = await client.topic.findMany();
    res.status(200).json({ success: true, data: topics });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createTopic = async (req, res) => {
  const { topicTitle, lecturerName } = req.body;

  try {
    const newTopic = await client.topic.create({
      data: {
        title: topicTitle,
        lecturer: lecturerName,
      },
    });
    res.status(201).json({ success: true, data: newTopic });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
