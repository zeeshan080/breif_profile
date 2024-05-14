import Profile_details from "@/components/Profile_details";

export default function Page() {
    return (
        <main>
            <h1 className="text-center font-bold text-[32px] mt-24">BRIEF PROFILE</h1>
            <div className="mb-10">
                <Profile_details />
            </div>
        </main>
    );
}

