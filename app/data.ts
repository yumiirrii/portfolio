export const navMenu = [
    { page: "Home", path: "/" },
    { page: "About", path: "/" },
    { page: "Works", path: "/" },
];

export const landingData = {
    hero: {
        nameJp: "入入 入入入",
        nameEn: "Yyyyyy Iiiiiii",
        job: "Frontend Engineer",
    },
    about: {
        aboutMe:
            "エンジニア歴は6年です。バックエンド開発を3年経験した後、デザインやUI/UXへの関心から、現在はフロントエンド開発を行っています。\n個人開発では、Figmaを用いたデザインから実装まで一貫して取り組んでいます。使いやすさだけでなく、見た目の美しさとの両立を意識しながら、細部まで丁寧に作り込むことを心掛けています。",
        strengths: [
            {
                header: "Figmaでのデザインから実装まで一貫して対応",
                text: "服飾系大学での制作経験や出版社勤務で培ったデザインへの視点を活かし、Figmaを用いたデザインカンプ制作からアプリ実装までを個人で一貫して行っています。",
            },
            {
                header: "モダンなフロントエンド開発とUI/UXを意識した実装",
                text: "バックエンドからフロントエンドへ転向し、UI課題の分析や改善提案を行いながら、使いやすさを意識した設計・実装に取り組んでいます。",
            },
            {
                header: "バックエンド開発経験を活かした設計・実装",
                text: "API仕様やデータ構造を踏まえ、デザイン・フロントエンド・バックエンドのつながりを意識した設計・実装を行っています。",
            },
            {
                header: "航空会社での実務経験を背景としたコミュニケーション能力",
                text: "エンジニア以前の航空会社での顧客対応・現場調整経験を通じて培ったユーザー視点とコミュニケーション力を、チーム開発にも活かしています。",
            },
            {
                header: "継続的な個人開発・キャッチアップ",
                text: "様々な技術スタックを用いた個人開発を継続し、フレームワークごとの特性やモダンな開発手法を学びながらスキルアップに取り組んでいます。",
            },
        ],
        skills: [
            {
                header: "Frontend",
                text: "Next.js / React / TypeScript / Vue.js / Tailwind CSS / JavaScript",
            },
            {
                header: "Design",
                text: "Figma",
            },
            {
                header: "Backend",
                text: "Java / Spring Boot / PostgreSQL / Firestore",
            },
            {
                header: "Cloud",
                text: "Firebase / AWS / Vercel",
            },
        ],
    },
    works: {
        featured: [
            {
                imageUrl: "/works-metamorf.png",
                name: "METAMORF",
                text: "架空コスメティックブランド商品管理アプリ",
                year: "2026",
                path: "/work/metamorf",
            },
            {
                imageUrl: "/works-travelog.png",
                name: "TRAVELOG",
                text: "旅行の記録アーカイブアプリ",
                year: "2026",
                path: "/work/travelog",
            },
        ],
        others: [
            {
                name: "Report Maker",
                text: "週報作成アプリ",
            },
            {
                name: "Report Maker2",
                text: "週報作成アプリ",
            },
            {
                name: "Report Maker3",
                text: "週報作成アプリ",
            },
        ],
    },
};

export const featuredDetailData = {
    metamorf: {
        topImage: "/detail-metamorf-top.png",
        figmaImage: "/detail-metamorf-figma.png",
        pcImage: "/detail-metamorf-pc.png",
        mobileImage: "/detail-metamorf-mobile.png",
        name: "METAMORF",
        overview:
            "架空のコスメティックブランド「METAMORF（メタモルフ）」の商品閲覧・管理アプリ",
        year: "2026.06",
        concept:
            "ストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザイン",
        stack: "Next.js/TypeScript/Tailwind CSS/\nApp Router/React Hook Form/Zod/\nPrisma/PostgreSQL/Docker/\nHeroicons/Sonner",
        challenges:
            "ストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザインストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザインストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザイン",
    },
    travelog: {
        topImage: "/detail-travelog-top.png",
        figmaImage: "/detail-travelog-figma.png",
        pcImage: "/detail-travelog-pc.png",
        mobileImage: "/detail-travelog-mobile.png",
        name: "TRAVELOG",
        overview:
            "架空のコスメティックブランド「METAMORF（メタモルフ）」の商品閲覧・管理アプリ",
        year: "2026.06",
        concept:
            "ストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザイン",
        stack: "Next.js/TypeScript/Tailwind CSS/\nApp Router/React Hook Form/Zod/\nPrisma/PostgreSQL/Docker/\nHeroicons/Sonner",
        challenges:
            "ストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザインストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザインストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザイン",
    },
};

export const othersDetailData = [
    {
        mainImage: "/detail-reportmaker-main.png",
        largeImage: "/detail-reportmaker-large.png",
        name: "REPORT MAKER",
        overview:
            "架空のコスメティックブランド「METAMORF（メタモルフ）」の商品閲覧・管理アプリ",
        year: "2026.06",
        concept:
            "ストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザイン",
        stack: "Next.js/TypeScript/Tailwind CSS/\nApp Router/React Hook Form/Zod/\nPrisma/PostgreSQL/Docker/\nHeroicons/Sonner",
        challenges:
            "ストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザインストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザインストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザイン",
    },
    {
        mainImage: "/detail-movingapp-main.png",
        largeImage: "/detail-movingapp-large.png",
        name: "moving app",
        overview:
            "架空のコスメティックブランド「METAMORF（メタモルフ）」の商品閲覧・管理アプリ",
        year: "2026.06",
        concept:
            "ストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザイン",
        stack: "Next.js/TypeScript/Tailwind CSS/\nApp Router/React Hook Form/Zod/\nPrisma/PostgreSQL/Docker/\nHeroicons/Sonner",
        challenges:
            "ストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザインストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザインストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザイン",
    },
    {
        mainImage: "/detail-artistapp-main.png",
        largeImage: "/detail-artistapp-large.png",
        name: "artist app",
        overview:
            "架空のコスメティックブランド「METAMORF（メタモルフ）」の商品閲覧・管理アプリ",
        year: "2026.06",
        concept:
            "ストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザイン",
        stack: "Next.js/TypeScript/Tailwind CSS/\nApp Router/React Hook Form/Zod/\nPrisma/PostgreSQL/Docker/\nHeroicons/Sonner",
        challenges:
            "ストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザインストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザインストリートアパレルブランドを着想に、モダンでミニマルな世界観の中に前衛的な要素を取り入れたデザイン",
    },
];
