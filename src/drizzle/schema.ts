import { pgTable, serial, text } from 'drizzle-orm/pg-core';


export const employee = pgTable('employee', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
    department: text('department').notNull(),
    current_position: text('current_position').notNull(),
    date_of_joining: text('date_of_joining').notNull(),
    gender: text('gender').notNull(),
    employee_code: text('employee_code').notNull(),
    school: text('school').notNull(),
    position_applied_for: text('position_applied_for').notNull(),
    date_of_brith: text('date_of_brith').notNull(),
    qualification: text('qualification').notNull(),
    degree: text('degree').notNull(),
    area: text('area').notNull(),
    year: text('year').notNull(),
    university: text('university').notNull(),
    country: text('country').notNull(),
    grade: text('grade').notNull(),
    job: text('job').notNull(),
    designation: text('designation').notNull(),
    oraganization: text('oraganization').notNull(),
    start_date: text('start_date').notNull(),
    end_date: text('end_date').notNull(),
    total_period: text('total_period').notNull(),
    professional_experience: text('professional_experience').notNull(),
    work_experience: text('work_experience').notNull(),
    total_experience: text('total_experience').notNull(),
    Current_Assignments: text('Current_Assignments').notNull(),
    Achievements: text('Achievements').notNull(),
    Last_Promotion: text('Last_Promotion').notNull(),
    Last_Promotion_Year: text('Last_Promotion_Year').notNull(),
    Performance_Grades: text('Performance_Grades').notNull(),
    Status: text('Status').notNull(),
    date1: text('date1').notNull(),
    date2: text('date2').notNull(),

});