"use client"
import { Personal_detailsSchema, Personal_detailsType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import Personalinput from "./Personalinput";
import Headings from "./Headings";
import { Button } from "./ui/button";
import Qualificationinput from "./Qualificationinput";
import Experenceinput from "./Experenceinput";
import Professionalinput from "./Professionalinput";
import Profileinput from "./Profileinput";
import { Checkbox } from "./ui/checkbox";
import Dateinput from "./Dateinput";

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
                                type="date"
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
                                type="number"
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
                        <Professionalinput
                            form={form}
                            label="Professional Experience before UMT"
                            name="professional_experience"
                            type="number"
                        />
                        <Professionalinput
                            form={form}
                            label="Work Experience @ UMT"
                            name="work_experience"
                            type="number"
                        />
                        <Professionalinput
                            form={form}
                            label="Total Experience"
                            name="total_experience"
                            type="text"
                        />

                    </div>
                    <div className="mt-12">
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
                                type="number"
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
                        <Button type="submit" className="" >Submit </Button>
                    </div>

                </form>
            </Form>

        </div>
    );
}
