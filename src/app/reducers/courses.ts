import { Course } from "../models/course";
import { actionTypes } from "../actions/courses";

const initialState: Course[] = [];

export const coursesReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD:
      return [
        action.payload,
        ...state
      ];
  }
};