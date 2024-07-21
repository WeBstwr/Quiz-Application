import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const userStore = (set) => ({
  user: null,
  changeUserInformation: (newUserObject) => {
    set(() => ({ user: newUserObject }));
  },
  clearUserInformation: () => {
    set(() => ({ user: null }));
  },
});

const useUserStore = create(
  devtools(persist(userStore, { name: "quiz-app-user" })),
);
export default useUserStore;
