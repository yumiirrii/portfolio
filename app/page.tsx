import { Hero } from "./components/Hero";
import { landingData } from "./data";
import { WorksSection } from "./components/WorksSection";
import { IntroductionSection } from "./components/IntroductionSection";

export default function Home() {
    const data = landingData;

    return (
        <div className="landing-bg bg-cover bg-center w-full min-w-full min-h-svh flex flex-col">
            {/* ヒーロー */}
            <Hero />

            {/* 自己紹介エリア */}
            <IntroductionSection introduction={data.introduction} />

            {/* Work一覧エリア */}
            <WorksSection works={data.works} />
        </div>
    );
}
