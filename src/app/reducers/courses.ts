import { Course } from "../models/course";
import { actionTypes } from "../actions/courses";

const initialState: Course[] = [];

export const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_COURSES_SUCCESS: {
      return action.payload;
    }

    case actionTypes.ADD_COURSE: {
      return [
        action.payload,
        ...state
      ];
    }

    case actionTypes.REMOVE_COURSE: {
      const index = state.findIndex((course) => course.id === action.payload);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }

    case actionTypes.SEARCH_COURSE: {
      console.log(action.payload);
      return state;
    }
  }
};