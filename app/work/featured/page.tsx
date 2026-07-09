import { DetailCard } from "@/app/components/DetailCard";
import { Title } from "@/app/components/Title";
import { featuredDetailData } from "@/app/data";

export default function WorkFeatured() {
    const data = featuredDetailData;

    return (
        <div className="landing-bg bg-cover w-full min-h-screen flex flex-col gap-y-7 px-5 sm:px-20 xl:px-40 py-10">
            <Title title="Work Detail (Featured)" />
            {data.map((detail, index) => (
                <DetailCard key={detail.name} detail={detail} />
            ))}
        </div>
    );
}
