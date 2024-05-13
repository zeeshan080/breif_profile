import { z } from "zod";

export const Personal_detailsSchema = z.object({
    name: z.string(),
    department: z.string(),
    current_position: z.string(),
    date_of_joining: z.string(),
    gender: z.string(),
    employee_code: z.string(),
    school: z.string(),
    position_applied_for: z.string(),
    date_of_brith: z.string(),
});

export type Personal_detailsType = z.infer<typeof Personal_detailsSchema>;

export const Qualification_detailsSchema = z.object({
    qualification: z.string(),
    degree: z.string(),
    area: z.string(),
    year: z.string(),
    university: z.string(),
    country: z.string(),
    grade: z.string(),
});

export type Qualification_detailsType = z.infer<typeof Qualification_detailsSchema>;

export const Experence_detailsSchema = z.object({
    job: z.string(),
    designation: z.string(),
    oraganization: z.string(),
    start_date: z.string(),
    end_date: z.string(),
    total_period: z.string(),
});

export type Experence_detailsType = z.infer<typeof Experence_detailsSchema>;

export const Professional_detailsSchema = z.object({
    professional_experience: z.string(),
    work_experience: z.string(),
    total_experience: z.string(),
});

export type Professional_detailsType = z.infer<typeof Professional_detailsSchema>;

export const Profile_detailsSchema = z.object({
    Current_Assignments: z.string(),
    Achievements: z.string(),
    Last_Promotion: z.string(),
    Last_Promotion_Year: z.string(),
    Performance_Grades: z.string(),
    Status: z.string(),
    Employee_Signature: z.string(),
    School_Signature: z.string(),
    date1: z.string(),
    date2: z.string()




});

export type Profile_detailsType = z.infer<typeof Profile_detailsSchema>;