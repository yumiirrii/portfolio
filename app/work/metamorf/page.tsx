import { DetailCard } from "@/app/components/DetailCard";
import { NavigationBar } from "@/app/components/NavigationBar";
import { featuredDetailData } from "@/app/data";

export default function WorkDetailMetamorf() {
    const data = featuredDetailData.metamorf;

    return (
        <div className="landing-bg bg-cover w-full min-h-screen flex flex-col">
            <NavigationBar />
            <div className="px-5 sm:px-20 xl:px-40 pt-10 pb-15">
                <DetailCard key={data.name} detail={data} />
            </div>
        </div>
    );
}
