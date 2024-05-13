import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { UseFormReturn } from "react-hook-form";
import { Profile_detailsType } from "@/lib/types";
import { Textarea } from "./ui/textarea";

type Props = {
    label: string;
    type: string;
    name: "date1" | "date2"
    form: UseFormReturn<Profile_detailsType>;
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