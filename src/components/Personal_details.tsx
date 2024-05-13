"use client"

import { Personal_detailsSchema, Personal_detailsType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import Personalinput from "./Personalinput";
import Headings from "./Headings";
import { Button } from "./ui/button";





type Props = {};

export default function Personal_details({ }: Props) {
    const form = useForm<Personal_detailsType>({
        resolver: zodResolver(Personal_detailsSchema),
    });
    const OnSubmit = (data: Personal_detailsType) => {
        console.log(data);
    };
    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(OnSubmit)}
                    className="mt-12 w-[90%] m-auto"
                >
                    <Headings heading={"PERSONAL DETAILS"} />

                    <div className="grid grid-cols-2  gap-5">
                        <div>
                            <Personalinput
                                form={form}
                                label="Name"
                                name="name"
                                type="text"
                            />
                            <Personalinput
                                form={form}
                                label="Department"
                                name="department"
                                type="text"
                            />
                            <Personalinput
                                form={form}
                                label="Current Position"
                                name="current_position"
                                type="text"
                            />
                            <Personalinput
                                form={form}
                                label="Date of joining"
                                name="date_of_joining"
                                type="text"
                            />
                            <Personalinput
                                form={form}
                                label="Gender"
                                name="gender"
                                type="text"
                            />
                        </div>
                        <div>
                            <Personalinput
                                form={form}
                                label="Employee Code"
                                name="employee_code"
                                type="text"
                            />
                            <Personalinput
                                form={form}
                                label="School"
                                name="school"
                                type="text"
                            />
                            <Personalinput
                                form={form}
                                label="Position Applied For"
                                name="position_applied_for"
                                type="text"
                            />
                            <Personalinput
                                form={form}
                                label="Date of Birth"
                                name="date_of_brith"
                                type="date"
                            />
                        </div>

                    </div>
                    <div>
                        <Button type="submit" className="">Submit</Button>
                    </div>

                </form>
            </Form>

        </div>
    );
}
