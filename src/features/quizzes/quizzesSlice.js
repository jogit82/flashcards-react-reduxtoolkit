import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[quizId] = {
        id: quizId,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      };
    }
  }
};

// thunk to quiz to the related topic
export const addQuizAddQuizId = (quiz) => {
  const { quizId, name, topicId, cardIds } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizId({ quizId: quizId, topicId: topicId }));
  };
};

export const quizzesSlice = createSlice(options);
// Export selector
export const selectQuizzes = (state) => state.quizzes.quizzes;
// Export actions
export const { addQuiz } = quizzesSlice.actions;
// Export reducers
export default quizzesSlice.reducer;
