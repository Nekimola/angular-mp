import { Course } from "../models/course";
import { actionTypes } from "../actions/courses";

const initialState: Course[] = [];

export const coursesReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD: {
      return [
        action.payload,
        ...state
      ];
    }

    case actionTypes.REMOVE: {
      const index = state.findIndex((course) => course.id === action.payload);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }

    case actionTypes.SEARCH: {
      console.log(action.payload);
      return state;
    }
  }
};