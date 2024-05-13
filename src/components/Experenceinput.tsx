import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { UseFormReturn } from "react-hook-form";
import { Experence_detailsType } from "@/lib/types";

type Props = {
    label: string;
    type: string;
    name: "job" | "designation" | "oraganization" | "start_date" | "end_date" | "total_period";
    form: UseFormReturn<Experence_detailsType>;
};

export default function Experencesinput({
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
                            <Input
                                className="rounded-none border-[1px] border-[black]"
                                {...field}
                                type={type}
                            />
                        </FormControl>
                    </FormItem>


                )}
            />
        </div>
    );
}