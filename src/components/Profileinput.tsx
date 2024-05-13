import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { UseFormReturn } from "react-hook-form";
import { Personal_detailsType } from "@/lib/types";
import { Textarea } from "./ui/textarea";

type Props = {
    label: string;
    type: string;
    name: "Current_Assignments" | "Achievements" | "Last_Promotion" | "Last_Promotion_Year" | "Performance_Grades" | "Status";
    form: UseFormReturn<Personal_detailsType>;
};

export default function Profileinput({
    label = "",
    name,
    form,
    type,
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
                            <Textarea
                                className="rounded-none border-[1px] border-[black]"
                                {...field}
                            />
                        </FormControl>

                    </FormItem>


                )}
            />
        </div>
    );
}