import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { UseFormReturn } from "react-hook-form";
import { Form_detailsType } from "@/lib/type";
import { Textarea } from "./ui/textarea";

type Props = {
    label: string;
    type: string;
    name: "name" | "department" | "current_position" | "date_of_joining" | "gender" | "employee_code" | "school" | "position_applied_for" | "date_of_brith" | "qualification" | "degree" | "area" | "year" | "university" | "country" | "grade"
    | "job" | "designation" | "oraganization" | "start_date" | "end_date" | "total_period" | "professional_experience" | "work_experience" | "total_experience" | "Current_Assignments" | "Achievements" | "Last_Promotion" | "Last_Promotion_Year" | "Performance_Grades" | "Status" | "date1" | "date2";
    form: UseFormReturn<Form_detailsType>;
    istextarea?: boolean
};

export default function Forminputs({
    label,
    name,
    form,
    type,
    istextarea = false
}: Props) {
    return (
        <div>
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem className="flex items-center my-4">
                        <FormLabel className=" w-[20%] m-auto">{label}</FormLabel>
                        <FormControl className="w-[80%] m-auto ">
                            {istextarea ? (
                                <Textarea
                                    className="rounded-none border-[1px] border-[black]"
                                    {...field}
                                />

                            ) : (
                                <Input
                                    className="rounded-none border-[1px] border-[black]"
                                    {...field}
                                    type={type}
                                />
                            )}
                        </FormControl>
                    </FormItem>


                )}
            />
        </div>
    );
}