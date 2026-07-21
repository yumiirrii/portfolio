import { Button } from "@/app/components/Button";
import { NavigationBar } from "@/app/components/NavigationBar";
import { OthersDetailCard } from "@/app/components/OthersDetailCard";
import { othersDetailData } from "@/app/data";
import Link from "next/link";

export default function WorkOthers() {
    const data = othersDetailData;

    return (
        <div className="landing-bg bg-cover w-full min-h-screen flex flex-col">
            <NavigationBar />
            <div className="max-w-[1600px] w-full mx-auto px-5 sm:px-15 lg:px-30 pt-10 pb-20 flex flex-col gap-y-10">
                {data.map((detail) => (
                    <OthersDetailCard key={detail.name} detail={detail} />
                ))}
                <Link href="/work/travelog" className="w-full">
                    <Button
                        label="Previous Work: TRAVELOG"
                        state="secondary"
                        rightArrow
                    />
                </Link>
            </div>
        </div>
    );
}
