import { Author } from "./author";

export interface AddCourseFormModel {
  authors: Author[];
  date: string;
  description: string;
  duration: number;
  title: string;
}