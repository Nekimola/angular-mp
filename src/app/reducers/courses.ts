import { Course } from "../models/course";
import { actionTypes } from "../actions/courses";
import { AppState } from "../store";
import { Action } from "@ngrx/store";

export interface CoursesState  {
  loading: boolean,
  entities: Course[]
}

const initialState: CoursesState = {
  loading: false,
  entities: []
};

export const coursesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.LOAD_COURSES: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case actionTypes.LOAD_COURSES_SUCCESS: {
      return Object.assign({}, state, {
        entities: action.payload,
        loading: false
      });
    }

    // case actionTypes.ADD_COURSE: {
    //   return [
    //     action.payload,
    //     ...state
    //   ];
    // }

    case actionTypes.REMOVE_COURSE: {
      const index = state.entities.findIndex((course) => course.id === action.payload);
      return Object.assign({}, state, {
        entities: [
          ...state.entities.slice(0, index),
          ...state.entities.slice(index + 1)
        ]
      });
    }

    case actionTypes.SEARCH_COURSE: {
      console.log(action.payload);
      return state;
    }

    default: {
      return state;
    }
  }
};

export const getCourses = (appState: AppState) => appState.courses.entities;
export const getCoursesLoading = (appState: AppState) => appState.courses.loading;