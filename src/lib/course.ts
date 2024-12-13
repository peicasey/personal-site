export enum CoursePurpose {
  ETAM = "Pre-ETAM Required",
  CS = "CS Required",
  CS_FUN = "CS Electives",
  STAT = "Stat Minor / Emphasis Area",
  CORE = "Core Curriculum",
  DEFAULT = "Default",
}

export enum CoursePurposeColors {
  ETAM = "#c8b757",
  CS = "#ffdfaa",
  CS_FUN = "#ffaa20",
  STAT = "#ffc567",
  CORE = "#808814",
  DEFAULT = "#d1cdc9",
}

export enum Year {
  ALL = "All",
  FRESHMAN = "Freshman",
  SOPHOMORE = "Sophomore",
  JUNIOR = "Junior",
  SENIOR = "Senior",
}

export const COURSE_COLOR_KEY = {
  [CoursePurpose.ETAM]: CoursePurposeColors.ETAM,
  [CoursePurpose.CS]: CoursePurposeColors.CS,
  [CoursePurpose.CS_FUN]: CoursePurposeColors.CS_FUN,
  [CoursePurpose.STAT]: CoursePurposeColors.STAT,
  [CoursePurpose.CORE]: CoursePurposeColors.CORE,
  [CoursePurpose.DEFAULT]: CoursePurposeColors.DEFAULT,
};

export function getCourseColor(coursePurpose: string | undefined): string {
  // personal project spaghetti code goes brrr
  if (Object.values(CoursePurpose).includes(coursePurpose as CoursePurpose)) {
    return COURSE_COLOR_KEY[coursePurpose as CoursePurpose] || "#7b7875";
  }

  return CoursePurposeColors.DEFAULT;
}

export type CourseInfo = {
  code: string;
  title: string;
  credit: number;
  professor: string;
  description: string;
  symbol: string;
  purpose?: CoursePurpose;
};

export type YearlyCourses = {
  year: Year.FRESHMAN | Year.SOPHOMORE | Year.JUNIOR | Year.SENIOR;
  semester: "Fall" | "Spring";
  courses: CourseInfo[];
};
