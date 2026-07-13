import { NavigationBar } from "@/app/components/NavigationBar";
import { OthersDetailCard } from "@/app/components/OthersDetailCard";
import { othersDetailData } from "@/app/data";

export default function WorkOthers() {
    const data = othersDetailData;

    return (
        <div className="landing-bg bg-cover w-full min-h-screen flex flex-col">
            <NavigationBar />
            <div className="px-5 sm:px-20 xl:px-40 pt-10 pb-15">
                {data.map((detail) => (
                    <OthersDetailCard key={detail.name} detail={detail} />
                ))}
            </div>
        </div>
    );
}
