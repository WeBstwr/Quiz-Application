import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const questionStore = (set) => ({
  questions: {},
  topics: [],
  addQuestion: (topicId, question) => {
    set((state) => ({
      questions: {
        ...state.questions,
        [topicId]: [...(state.questions[topicId] || []), question],
      },
    }));
  },
  addTopic: (topic) => {
    set((state) => ({
      topics: [...state.topics, topic],
    }));
  },
  getTopicById: (topicId) => {
    return (get().topics || []).find((topic) => topic.id === topicId);
  },
  setQuestions: (newQuestions) => {
    set(() => ({ questions: newQuestions }));
  },
  clearQuestions: () => {
    set(() => ({ questions: [] }));
  },
});

const useQuestionStore = create(
  devtools(persist(questionStore, { name: "quiz-app" })),
);

export default useQuestionStore;
