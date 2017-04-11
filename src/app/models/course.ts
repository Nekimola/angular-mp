export class Course {
  id: string;
  title: string;
  duration: number;
  description: string;
  topRated: boolean;
  date: number;

  constructor (properties: any) {
    this.id = properties.id;
    this.title = properties.title;
    this.duration = properties.duration;
    this.description = properties.description;
    this.date = properties.date;
  }
}