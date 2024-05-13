"use client"

import { Experence_detailsSchema, Experence_detailsType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import Headings from "./Headings";
import Experenceinput from "./Experenceinput";
import { Button } from "./ui/button";





type Props = {};

export default function Experince({ }: Props) {
    const form = useForm<Experence_detailsType>({
        resolver: zodResolver(Experence_detailsSchema),
    });
    const OnSubmit = (data: Experence_detailsType) => {
        console.log(data);
    };
    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(OnSubmit)}
                    className="mt-12 w-[90%] m-auto"
                >
                    <Headings heading={"PROFESSIONAL EXPERIENCE(Post 16 Years Qualification)"} />

                    <div className="grid grid-cols-2  gap-5">
                        <div>
                            <Experenceinput
                                form={form}
                                label="Job"
                                name="job"
                                type="text"
                            />
                            <Experenceinput
                                form={form}
                                label="Designation"
                                name="designation"
                                type="text"
                            />
                            <Experenceinput
                                form={form}
                                label="Organization Name & City"
                                name="oraganization"
                                type="text"
                            />

                        </div>
                        <div>
                            <Experenceinput
                                form={form}
                                label="Start Date"
                                name="start_date"
                                type="date"
                            />
                            <Experenceinput
                                form={form}
                                label="End Date"
                                name="end_date"
                                type="date"
                            />
                            <Experenceinput
                                form={form}
                                label="Total Period"
                                name="total_period"
                                type="text"
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
