import { Action } from "@ngrx/store";

import { Course } from "../models/course";
import { actionTypes } from "../actions/courses";
import { AppState } from "../store";

export interface CoursesState  {
  loading: boolean,
  loaded: boolean,
  searchQuery: string,
  totalItems: number,
  entities: Course[],
  editCourse: Course
}

const initialState: CoursesState = {
  loading: false,
  loaded: false,
  searchQuery: '',
  totalItems: 0,
  entities: [],
  editCourse: null
};

export const coursesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.REMOVE_COURSE:
    case actionTypes.LOAD_COURSES: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case actionTypes.LOAD_COURSES_SUCCESS: {
      return Object.assign({}, state, {
        entities: action.payload.data,
        totalItems: action.payload.totalItems,
        loading: false,
        loaded: true
      });
    }

    case actionTypes.REMOVE_COURSE_SUCCESS: {
      const index = state.entities.findIndex((course) => course.id === action.payload);
      return Object.assign({}, state, {
        loading: false,
        entities: [
          ...state.entities.slice(0, index),
          ...state.entities.slice(index + 1)
        ]
      });
    }

    case actionTypes.SEARCH_COURSE: {
      return Object.assign({}, state, {
        searchQuery: action.payload
      });
    }

    case actionTypes.ADD_COURSE: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case actionTypes.ADD_COURSE_FAIL:
    case actionTypes.ADD_COURSE_SUCCESS: {
      return Object.assign({}, state, {
        loading: false
      });
    }

    case actionTypes.GET_COURSE_SUCCESS: {
      return Object.assign({}, state, {
        editCourse: action.payload
      });
    }

    default: {
      return state;
    }
  }
};

export const getCourses = (appState: AppState) => appState.courses.entities;
export const getEditCourse = (appState: AppState) => appState.courses.editCourse;
export const getCourseById = (appState: AppState) => appState.courses.entities;
export const getTotalCourses = (appState: AppState) => appState.courses.totalItems;
export const getCoursesLoading = (appState: AppState) => appState.courses.loading;
export const getCoursesLoaded = (appState: AppState) => appState.courses.loaded;
export const getSearchQuery = (appState: AppState) => appState.courses.searchQuery;
export const getNoData = (appState: AppState) => !appState.courses.entities.length && !appState.courses.loading;

const twoWeeks = 1000 * 60 * 60 * 24 * 14;
export const getRecentCourses = (courses: Course[]) => courses.filter((course: any) => (new Date(course.date)).getTime() > (new Date()).getTime() - twoWeeks);
export const getSearchedCourses = (courses: Course[], searchQuery: string) => courses.filter(course => course.title.toLowerCase().indexOf(searchQuery) !== -1);