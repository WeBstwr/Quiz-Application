// src/store/questionStore.js
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const questionStore = (set) => ({
  questions: [],
  currentQuestionIndex: 0,
  addQuestion: (question) => {
    set((state) => ({
      questions: [...state.questions, question],
    }));
  },
  setQuestions: (newQuestions) => {
    set(() => ({ questions: newQuestions }));
  },
  clearQuestions: () => {
    set(() => ({ questions: [] }));
  },
  nextQuestion: () => {
    set((state) => ({
      currentQuestionIndex:
        state.currentQuestionIndex < state.questions.length - 1
          ? state.currentQuestionIndex + 1
          : state.currentQuestionIndex,
    }));
  },
  previousQuestion: () => {
    set((state) => ({
      currentQuestionIndex:
        state.currentQuestionIndex > 0
          ? state.currentQuestionIndex - 1
          : state.currentQuestionIndex,
    }));
  },
});

const useQuestionStore = create(
  devtools(persist(questionStore, { name: "quiz-app-questions" })),
);

export default useQuestionStore;
