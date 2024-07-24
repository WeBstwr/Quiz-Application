import { create } from "zustand";

const useQuestionStore = create((set) => ({
  topics: [],
  setTopics: (topics) => set({ topics }),
  addTopic: (newTopic) =>
    set((state) => ({
      topics: [...state.topics, newTopic],
    })),
  deleteTopic: (topicId) =>
    set((state) => ({
      topics: state.topics.filter((topic) => topic.id !== topicId),
    })),

  questions: {},
  setQuestions: (topicId, questions) =>
    set((state) => ({
      questions: {
        ...state.questions,
        [topicId]: questions,
      },
    })),
  addQuestion: (topicId, newQuestion) =>
    set((state) => ({
      questions: {
        ...state.questions,
        [topicId]: [...(state.questions[topicId] || []), newQuestion],
      },
    })),
  deleteQuestion: (questionId) =>
    set((state) => {
      const topicId = Object.keys(state.questions).find((id) =>
        state.questions[id].some((question) => question.id === questionId),
      );
      return {
        questions: {
          ...state.questions,
          [topicId]: state.questions[topicId].filter(
            (question) => question.id !== questionId,
          ),
        },
      };
    }),

  user: null,
  setUser: (user) => set({ user }),

  currentTopic: null,
  setCurrentTopic: (topic) => set({ currentTopic: topic }),

  isLoading: false,
  setLoading: (loadingStatus) => set({ isLoading: loadingStatus }),
}));

export default useQuestionStore;
