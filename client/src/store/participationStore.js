import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { apiBase } from "../utils/config.js";

const participationStore = (set) => ({
  participation: [],
  setParticipation: (participation) => set({ participation }),
  fetchParticipationByStudentId: async () => {
    try {
      const response = await fetch(`${apiBase}/api/participation/student`, {
        method: "GET",
        credentials: "include",
      });
      const result = await response.json();
      if (result.success) {
        set({ participation: result.data });
      } else {
        console.log("Error fetching participation data:", result.message);
      }
    } catch (error) {
      console.log("Failed to fetch participation data", error);
    }
  },
});

const useParticipationStore = create(
  devtools(persist(participationStore, { name: "quiz-app-participation" })),
);

export default useParticipationStore;
