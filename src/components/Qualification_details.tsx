"use client"
import { Qualification_detailsSchema, Qualification_detailsType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import Headings from "./Headings";
import Qualificationinput from "./Qualificationinput";
import { Button } from "./ui/button";





type Props = {};

export default function Qualification_details({ }: Props) {
    const form = useForm<Qualification_detailsType>({
        resolver: zodResolver(Qualification_detailsSchema),
    });
    const OnSubmit = (data: Qualification_detailsType) => {
        console.log(data);
    };
    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(OnSubmit)}
                    className="mt-12 w-[90%] m-auto"
                >
                    <Headings heading={"QUALIFICATION DETAILS"} />

                    <div className="grid grid-cols-2  gap-5">
                        <div>
                            <Qualificationinput
                                form={form}
                                label="Qualification"
                                name="qualification"
                                type="text"
                            />
                            <Qualificationinput
                                form={form}
                                label="Degree"
                                name="degree"
                                type="text"
                            />
                            <Qualificationinput
                                form={form}
                                label="Area"
                                name="area"
                                type="text"
                            />
                            <Qualificationinput
                                form={form}
                                label="Year"
                                name="year"
                                type="text"
                            />

                        </div>
                        <div>
                            <Qualificationinput
                                form={form}
                                label="University/Institute"
                                name="university"
                                type="text"
                            />
                            <Qualificationinput
                                form={form}
                                label="Country"
                                name="country"
                                type="text"
                            />
                            <Qualificationinput
                                form={form}
                                label="Grade"
                                name="grade"
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
