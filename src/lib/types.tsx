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
    qualification: z.string(),
    degree: z.string(),
    area: z.string(),
    year: z.string(),
    university: z.string(),
    country: z.string(),
    grade: z.string(),
    job: z.string(),
    designation: z.string(),
    oraganization: z.string(),
    start_date: z.string(),
    end_date: z.string(),
    total_period: z.string(),
    professional_experience: z.string(),
    work_experience: z.string(),
    total_experience: z.string(),
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

export type Personal_detailsType = z.infer<typeof Personal_detailsSchema>;


