import { Button } from "@/app/components/Button";
import { DetailCard } from "@/app/components/DetailCard";
import { NavigationBar } from "@/app/components/NavigationBar";
import { featuredDetailData } from "@/app/data";
import Link from "next/link";

export default function WorkDetailTravelog() {
    const data = featuredDetailData.travelog;

    return (
        <div className="landing-bg bg-cover w-full min-h-screen flex flex-col">
            <NavigationBar />
            <div className="max-w-[1600px] w-full mx-auto px-5 sm:px-15 lg:px-30 pt-10 pb-20 flex flex-col gap-y-10">
                <DetailCard key={data.name} detail={data} />
                <div className="w-full flex flex-col gap-y-5 md:flex-row justify-between">
                    <Link
                        href="/work/metamorf"
                        className="w-full flex justify-start"
                    >
                        <Button
                            label="Previous Work: METAMORF"
                            state="secondary"
                            rightArrow
                        />
                    </Link>
                    <Link
                        href="/work/others"
                        className="w-full flex justify-end"
                    >
                        <Button label="Next: Other Works" state="primary" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
