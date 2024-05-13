import Experince from "@/components/Experince";
import Personal_details from "@/components/Personal_details";
import Professional from "@/components/Professional";
import Profile from "@/components/Profile";
import Qualification_details from "@/components/Qualification_details";

export default function Page() {
    return (
        <main>
            <h1 className="text-center font-bold text-[32px] mt-24">BRIEF PROFILE</h1>
            <div>
                <Personal_details />
            </div>
            <div>
                <Qualification_details />
            </div>
            <div>
                <Experince />
            </div>
            <div>
                <Professional />
            </div>
            <div>
                <Profile />
            </div>

        </main>
    );
}

