"use client"

import { Professional_detailsSchema, Professional_detailsType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";

import Professionalinput from "./Professionalinput";
import { Button } from "./ui/button";





type Props = {};

export default function Professional({ }: Props) {
    const form = useForm<Professional_detailsType>({
        resolver: zodResolver(Professional_detailsSchema),
    });
    const OnSubmit = (data: Professional_detailsType) => {
        console.log(data);
    };
    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(OnSubmit)}
                    className="mt-12 w-[90%] m-auto"
                >
                    <div>
                        <Professionalinput
                            form={form}
                            label="Professional Experience before UMT"
                            name="professional_experience"
                            type="text"
                        />
                        <Professionalinput
                            form={form}
                            label="Work Experience @ UMT"
                            name="work_experience"
                            type="text"
                        />
                        <Professionalinput
                            form={form}
                            label="Total Experience"
                            name="total_experience"
                            type="text"
                        />

                    </div>
                    <div>
                        <Button type="submit" className="">Submit</Button>
                    </div>



                </form>
            </Form>

        </div>
    );
}
