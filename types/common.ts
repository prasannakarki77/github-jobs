export enum USER_TYPE {
  jobseeker = "USER",
  employer = "EMPLOYER",
}

export type UserType = USER_TYPE.jobseeker | USER_TYPE.employer;
