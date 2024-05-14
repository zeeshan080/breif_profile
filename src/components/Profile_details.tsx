"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Forminputs from "./Forminputs";
import Headings from "./Headings";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Form_detailsSchema, Form_detailsType } from "@/lib/type";
import { Form } from "./ui/form";

type Props = {};

export default function Profile_details({ }: Props) {
    const form = useForm<Form_detailsType>({
        resolver: zodResolver(Form_detailsSchema),

    });
    const OnSubmit = (data: Form_detailsType) => {
        console.log(data);
        alert("data send")
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
                            <Forminputs
                                form={form}
                                label="Name"
                                name="name"
                                type="text"
                            />
                            <Forminputs
                                form={form}
                                label="Department"
                                name="department"
                                type="text"
                            />
                            <Forminputs
                                form={form}
                                label="Current Position"
                                name="current_position"
                                type="text"
                            />
                            <Forminputs
                                form={form}
                                label="Date of joining"
                                name="date_of_joining"
                                type="date"
                            />
                            <Forminputs
                                form={form}
                                label="Gender"
                                name="gender"
                                type="text"
                            />
                        </div>
                        <div>
                            <Forminputs
                                form={form}
                                label="Employee Code"
                                name="employee_code"
                                type="text"
                            />
                            <Forminputs
                                form={form}
                                label="School"
                                name="school"
                                type="text"
                            />
                            <Forminputs
                                form={form}
                                label="Position Applied For"
                                name="position_applied_for"
                                type="text"
                            />
                            <Forminputs
                                form={form}
                                label="Date of Birth"
                                name="date_of_brith"
                                type="date"
                            />
                        </div>


                    </div>
                    <Headings heading={"QUALIFICATION DETAILS"} />

                    <div className="grid grid-cols-2  gap-5">
                        <div>
                            <Forminputs
                                form={form}
                                label="Qualification"
                                name="qualification"
                                type="text"
                            />
                            <Forminputs
                                form={form}
                                label="Degree"
                                name="degree"
                                type="text"
                            />
                            <Forminputs
                                form={form}
                                label="Area"
                                name="area"
                                type="text"
                            />
                            <Forminputs
                                form={form}
                                label="Year"
                                name="year"
                                type="number"
                            />


                        </div>
                        <div>
                            <Forminputs
                                form={form}
                                label="University"
                                name="university"
                                type="text"
                            />
                            <Forminputs
                                form={form}
                                label="Country"
                                name="country"
                                type="text"
                            />
                            <Forminputs
                                form={form}
                                label="Grade"
                                name="grade"
                                type="text"
                            />
                        </div>

                    </div>
                    <Headings heading={"PROFESSIONAL EXPERIENCE(Post 16 Years Qualification)"} />

                    <div className="grid grid-cols-2  gap-5">
                        <div>
                            <Forminputs
                                form={form}
                                label="Job"
                                name="job"
                                type="text"
                            />
                            <Forminputs
                                form={form}
                                label="Designation"
                                name="designation"
                                type="text"
                            />
                            <Forminputs
                                form={form}
                                label="Organization Name & City"
                                name="oraganization"
                                type="text"
                            />

                        </div>
                        <div>
                            <Forminputs
                                form={form}
                                label="Start Date"
                                name="start_date"
                                type="date"
                            />
                            <Forminputs
                                form={form}
                                label="End Date"
                                name="end_date"
                                type="date"
                            />
                            <Forminputs
                                form={form}
                                label="Total Period"
                                name="total_period"
                                type="text"
                            />

                        </div>
                        <div>
                            <Forminputs
                                form={form}
                                label="Professional Experience before UMT"
                                name="professional_experience"
                                type="number"
                            />
                            <Forminputs
                                form={form}
                                label="Work Experience @ UMT"
                                name="work_experience"
                                type="number"
                            />
                            <Forminputs
                                form={form}
                                label="Total Experience"
                                name="total_experience"
                                type="text"
                            />

                        </div>



                    </div>
                    <div className="mt-12">
                        <div>
                            <Forminputs
                                form={form}
                                label="Current Assignments"
                                name="Current_Assignments"
                                istextarea={true}
                                type="text"
                            />
                            <Forminputs
                                form={form}
                                label="Achievements"
                                name="Achievements"
                                istextarea={true}
                                type="text"

                            />
                            <Forminputs
                                form={form}
                                label="Last Promotion as"
                                name="Last_Promotion"
                                istextarea={true}
                                type="text"

                            />
                            <Forminputs
                                form={form}
                                label="Last Promotion Year"
                                name="Last_Promotion_Year"
                                istextarea={true}
                                type="text"

                            />
                            <Forminputs
                                form={form}
                                label="Performance Grades"
                                name="Performance_Grades"
                                istextarea={true}
                                type="text"

                            />
                            <Forminputs
                                form={form}
                                label="Status"
                                name="Status"
                                istextarea={true}
                                type="text"

                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 items-center">
                        <div className="grid w-[40%] m-auto gap-10 ">
                            <span><Checkbox /> Employee Signature</span>
                            <span><Checkbox /> School/UMD Head Signature</span>
                        </div>
                        <div>
                            <Forminputs form={form} label="Date" name="date1" type="date" />
                            <Forminputs form={form} label="Date" name="date2" type="date" />
                        </div>
                    </div>
                    <div>
                        <Button type="submit" className="" >Submit </Button>
                    </div>

                </form>
            </Form>

        </div>
    );
}
