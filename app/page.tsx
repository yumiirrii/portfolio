import { Hero } from "./components/Hero";
import { landingData } from "./data";
import { WorksSection } from "./components/WorksSection";
import { AboutSection } from "./components/AboutSection";
import { NavigationBar } from "./components/NavigationBar";

export default function Home() {
    const data = landingData;

    return (
        <div className="landing-bg bg-cover bg-center w-full min-w-full min-h-svh flex flex-col">
            <NavigationBar />

            <main className="max-w-[1600px] w-full mx-auto flex flex-col">
                {/* ヒーロー */}
                <Hero />

                {/* 自己紹介エリア */}
                <AboutSection about={data.about} />

                {/* Work一覧エリア */}
                <WorksSection works={data.works} />
            </main>
        </div>
    );
}
