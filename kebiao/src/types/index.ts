//定义一个接口
export interface Course {
  week: number;
  dayOfWeek: number; // 1-7分别代表周一至周日
  startTime: number; // 开始时间，0-9分别代表第1-10节
  endTime: number; // 结束时间，0-9分别代表第1-10节
  className: string;
  classroom: string;
}

export type Courses=Course[]