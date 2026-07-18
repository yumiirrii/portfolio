import { Button } from "@/app/components/Button";
import { DetailCard } from "@/app/components/DetailCard";
import { NavigationBar } from "@/app/components/NavigationBar";
import { featuredDetailData } from "@/app/data";
import Link from "next/link";

export default function WorkDetailMetamorf() {
    const data = featuredDetailData.metamorf;

    return (
        <div className="landing-bg bg-cover w-full min-h-screen flex flex-col">
            <NavigationBar />
            <div className="max-w-[1600px] w-full mx-auto px-8 sm:px-15 lg:px-30 pt-10 pb-20 flex flex-col gap-y-10">
                <DetailCard key={data.name} detail={data} />
                <Link href="/work/travelog" className="w-full flex justify-end">
                    <Button label="Next Work: TRAVELOG" state="primary" />
                </Link>
            </div>
        </div>
    );
}
