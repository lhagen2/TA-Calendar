import { TA } from './ta';

enum WeekDay {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

export class TimeEntry {
    TA: TA;
    WeekDay: WeekDay
    StartTime: string;
    EndTime: string;
    Location: string;
}