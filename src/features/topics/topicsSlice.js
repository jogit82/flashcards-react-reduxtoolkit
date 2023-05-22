import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    }
  }
};

export const topicsSlice = createSlice(options);
// Create a selector that selects the topics object nested within initialState.
export const selectTopics = (state) => state.topics.topics;
// Export actions
export const { addTopic, addQuizId } = topicsSlice.actions;
// Export reducers
export default topicsSlice.reducer;
