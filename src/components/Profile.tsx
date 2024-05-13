"use client"
import { Profile_detailsSchema, Profile_detailsType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { Button } from "./ui/button";
import Profileinput from "./Profileinput";
import { Checkbox } from "./ui/checkbox";
import Dateinput from "./Dateinput";





type Props = {};

export default function Profile({ }: Props) {
    const form = useForm<Profile_detailsType>({
        resolver: zodResolver(Profile_detailsSchema),
    });
    const OnSubmit = (data: Profile_detailsType) => {
        console.log(data);
    };
    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(OnSubmit)}
                    className="mt-12 w-[90%] m-auto"
                >

                    <div className="">
                        <div>
                            <Profileinput
                                form={form}
                                label="Current Assignments"
                                name="Current_Assignments"
                                type="text"
                            />
                            <Profileinput
                                form={form}
                                label="Achievements"
                                name="Achievements"
                                type="text"
                            />
                            <Profileinput
                                form={form}
                                label="Last Promotion as"
                                name="Last_Promotion"
                                type="text"
                            />
                            <Profileinput
                                form={form}
                                label="Last Promotion Year"
                                name="Last_Promotion_Year"
                                type="text"
                            />
                            <Profileinput
                                form={form}
                                label="Performance Grades"
                                name="Performance_Grades"
                                type="text"
                            />
                            <Profileinput
                                form={form}
                                label="Status"
                                name="Status"
                                type="text"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-5 items-center">
                            <div className="grid w-[40%] m-auto gap-10 ">
                                <span><Checkbox /> Employee Signature</span>
                                <span><Checkbox /> School/UMD Head Signature</span>



                            </div>
                            <div>
                                <Dateinput form={form} label="Date" name="date1" type="date" />
                                <Dateinput form={form} label="Date" name="date2" type="date" />



                            </div>
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
