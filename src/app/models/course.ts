import { Author } from "./author";

export class Course {
  id: string;
  title: string;
  duration: number;
  description: string;
  isTopRated: boolean;
  date: number;
  authors: Author[];

  constructor (properties: any) {
    this.id = properties.id;
    this.title = properties.title;
    this.duration = properties.duration;
    this.description = properties.description;
    this.date = properties.date;
    this.isTopRated = properties.isTopRated;
    this.authors = properties.authors;
  }
}