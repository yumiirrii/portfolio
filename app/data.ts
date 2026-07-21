export const navMenu = [
    { page: "Home", path: "/" },
    { page: "About", path: "/#about" },
    { page: "Works", path: "/#works" },
];

export const landingData = {
    hero: {
        nameJp: "入沢 友美子",
        nameEn: "Yumiko Irisawa",
        job: "Frontend Engineer",
    },
    about: {
        aboutMe:
            "エンジニアとして約6年間、バックエンド開発とフロントエンド開発を経験してきました。\nデザインやUI/UXへの関心から、現在はフロントエンド開発に注力するとともに、個人開発ではUIデザインから実装まで取り組んでいます。\n使いやすさだけでなく、視覚的な美しさとの両立を意識し、細部まで丁寧に作り込むことを心掛けています。デザインと実装の両方の視点を活かし、ユーザーにとって心地よい体験を提供できるエンジニアを目指しています。",
        strengths: [
            {
                header: "UIデザインから実装まで一貫して対応",
                text: "服飾系大学での制作経験や出版社勤務で培ったデザインへの視点を活かし、Figmaを用いたUIデザインからアプリケーション実装までを個人で行っています。",
            },
            {
                header: "モダンなフロントエンド開発とUIを意識した実装",
                text: "ReactやNext.jsなどを用いたフロントエンド開発に取り組み、デザインの意図を理解した上で、使いやすさと実装品質を両立したUI開発を行っています。",
            },
            {
                header: "バックエンド開発経験を活かした設計・実装",
                text: "API仕様やデータ構造を理解した上で、デザイン・フロントエンド・バックエンドのつながりを意識し、広い視点で開発を行っています。",
            },
            {
                header: "航空会社での実務経験を背景としたコミュニケーション力",
                text: "エンジニア以前の航空会社での顧客対応・現場調整経験で培ったコミュニケーション力と英語力を活かし、多様なメンバーと円滑に協働することができます。",
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
            {
                header: "Certifications",
                text: "基本情報技術者 / Java Silver SE 11 / HTML5プロフェッショナル レベル1 / TOEIC 905",
            },
        ],
    },
    works: {
        featured: [
            {
                imageUrl: "/works-metamorf.png",
                name: "METAMORF",
                text: "架空コスメティックブランドアプリ",
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
                text: "ウィークリーレポート作成アプリ",
            },
            {
                name: "Moving App",
                text: "引っ越しタスク管理アプリ",
            },
            {
                name: "Artist App",
                text: "現代アートをテーマにしたキュレーションアプリ",
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
        subName: "Cosmetic Catalog App",
        overview:
            "架空のコスメティックブランド「METAMORF」の商品閲覧・管理アプリ。ブランドイメージを反映したUIをデザインし、商品の閲覧・登録・編集・削除機能を実装しました。",
        year: "2026.06",
        concept:
            "ストリートアパレルブランドを着想に、大胆なグラフィックを採用し、ミニマルなレイアウトと組み合わせました。クールトーンを基調に、コスメのリキッドやグロッシーな質感、ミントブルーをアクセントとして取り入れ、大胆なビジュアルと洗練されたUIのバランスを意識しました。",
        stack: "Next.js / TypeScript / Tailwind CSS /\nReact Hook Form / Zod /\nPrisma / PostgreSQL / Neon /\nDocker / Vercel /\nHeroicons / Sonner",
        challenges: [
            "Figmaでデザインカンプを制作し、Next.jsとTailwind CSSを用いてピクセル単位で忠実にUIを再現しました。",
            "React Hook Form・Zod・Prismaを用いて、型安全なフォームバリデーションとデータ管理を実装し、保守性を意識した構成にしました。",
            "レスポンシブデザインに対応し、デスクトップからモバイルまで、一貫したブランドイメージと操作性を維持できるUIを設計・実装しました。",
        ],
        demoUrl: "https://cosmetic-app-lovat.vercel.app/",
        figmaUrl:
            "https://www.figma.com/design/vnP31nIxxD68gohWPgbqBO/Portfolio?node-id=0-1&t=5AXzkMJUDuGmGoLs-1",
        githubUrl: "https://github.com/yumiirrii/cosmetic-app",
    },
    travelog: {
        topImage: "/detail-travelog-top.png",
        figmaImage: "/detail-travelog-figma.png",
        pcImage: "/detail-travelog-pc.png",
        mobileImage: "/detail-travelog-mobile.png",
        name: "TRAVELOG",
        subName: "Travel Data Archive App",
        overview:
            "旅行で訪れた印象的な場所を記録・管理するトラベルアーカイブアプリ。旅行記録の閲覧・登録・編集・削除機能を実装しました。",
        year: "2026.06 (v3)\nPrevious Versions: 2025.08 (v1) / 2025.11 (v2)",
        concept:
            "1980年代に描かれたレトロフューチャーをコンセプトに、当時のコンピューターログを着想としてデザインしました。グレーやオフホワイトを基調とした配色でレトロなコンピューターをイメージし、ボタンやリンクのホバー時にはネオンカラーのグローエフェクトを取り入れることで、サイバー感をアクセントとして加えています。また、キービジュアルに青空の中の飛行機を採用し、旅への期待感や開放感を表現しました。",
        stack: "v2, v3: Next.js / TypeScript / Tailwind CSS /\nZod / PostgreSQL / Neon / Vercel / Heroicons\nv1: React / TypeScript / Firebase / Firestore",
        challenges: [
            "ReactからNext.jsへ移行し、App Routerを採用するとともに、プロジェクト全体をリファクタリングしました。",
            "v3ではFigmaでのデザイン設計からNext.jsによるUI実装まで一貫して行い、ビジュアルデザインを全面的に刷新しました。",
            "既存機能を活かしながらデザインを刷新し、短期間で効率的にリニューアルを進めました。",
        ],
        demoUrl: "https://travelog-newui.vercel.app/",
        figmaUrl:
            "https://www.figma.com/design/vnP31nIxxD68gohWPgbqBO/Portfolio?node-id=8-414&t=5AXzkMJUDuGmGoLs-1",
        githubUrl: "https://github.com/yumiirrii/travelog-newui",
    },
};

export const othersDetailData = [
    {
        mainImage: "/detail-reportmaker-main.png",
        largeImage: "/detail-reportmaker-large.png",
        name: "Report Maker",
        overview:
            "ステップ形式の入力UIで、週報を効率的に作成・管理できるレポート作成アプリ",
        year: "2023.09 (v1) / 2024.06 (v2) / 2026.02 (UI Refresh)",
        concept:
            "BEFORE：手書きレポートをイメージし、紙を連想させるベージュを基調としたデザインを採用しました。\nAFTER：コンセプトは維持しながら、ペールイエローやオレンジを基調とした明るい配色に刷新し、テキストの視認性を向上させました。アクセントカラーにインディゴブルーを取り入れ、爽やかで知的な印象に仕上げました。",
        stack: "Vue.js 3 (v2) / JavaScript / Java (Spring Boot) / Thymeleaf (v1) /\nMyBatis / PostgreSQL / AWS",
        challenges: [
            "Spring Boot・Vue.jsを用いて、バックエンドからフロントエンドまで一貫して実装しました。",
            "アコーディオンやモーダル、ステップ形式の入力UIを実装し、直感的に操作できる体験を目指しました。",
            "AWSへデプロイを行い、本番環境で動作するアプリとして公開しました。",
        ],
        figmaUrl:
            "https://www.figma.com/design/vnP31nIxxD68gohWPgbqBO/Portfolio?node-id=9-1718&t=5AXzkMJUDuGmGoLs-1",
        githubUrl: "https://github.com/yumiirrii/report-maker-vue",
    },
    {
        mainImage: "/detail-movingapp-main.png",
        largeImage: "/detail-movingapp-large.png",
        name: "Moving App",
        overview:
            "引っ越し準備の「やること」と「買うもの」を整理できる2画面構成のシンプルなタスク管理アプリ",
        year: "2021.09 (v1) / 2023.12 (v2) / 2024.05 (v3) / 2026.03 (UI Refresh)",
        concept:
            "BEFORE：画面ごとにブルーとピンクのアクセントカラーを使い分け、アイコンや丸みのあるフォントを取り入れることで、親しみやすくポップな印象に仕上げました。\nAFTER：カラーを画面全体の背景や要素に展開することで、画面の切り替えを直感的に認識できるデザインへ変更しました。また、ガラスモーフィズムや立体的なグラフィックを取り入れ、奥行きとデジタル感のある、現代的なビジュアル表現を目指しました。",
        stack: "React (v3) / TypeScript (v3) /\nVue.js 3 (v2) / Vue.js 2 (v1) / JavaScript (v1, 2) /\nFirebase / Firestore / Font Awesome",
        challenges: [
            "Vue.js 2、Vue.js 3、Reactと異なるフレームワークを段階的に経験し、コンポーネント設計や状態管理の違いを理解しました。",
            "Firebaseを利用し、データ管理やWebアプリの公開環境構築まで一通り実装しました。",
            "FigmaでワイヤーフレームからUIデザインを作成し、実装前に画面設計を整理するプロセスを経験しました。",
        ],
        figmaUrl:
            "https://www.figma.com/design/vnP31nIxxD68gohWPgbqBO/Portfolio?node-id=9-3097&t=5AXzkMJUDuGmGoLs-1",
        githubUrl: "https://github.com/yumiirrii/moving-app-react",
    },
    {
        mainImage: "/detail-artistapp-main.png",
        largeImage: "/detail-artistapp-large.png",
        name: "Artist App",
        overview:
            "1950年代以降の現代アート作品を年代別に紹介するキュレーションサイト",
        year: "2021.03",
        concept:
            "現代アートギャラリーの展示空間をイメージし、ホワイトを基調にアクセントカラーとしてピンクを使用しました。作品を主役として引き立てるため、余白を広く設け、クリーンでモダンなデザインを目指しました。",
        stack: "Java (Spring Boot) / Thymeleaf /\nDOMA2 / SQL / Bootstrap / Font Awesome",
        challenges: [
            "初めてのアプリ開発として、要件定義から設計、実装、テストまで開発工程全体を経験しました。",
            "CRUD機能の実装を通して、サーバーサイド処理やデータベースアクセスの流れを理解しました。",
            "UIライブラリを活用し、機能だけでなく操作性や見た目にもこだわって実装しました。",
        ],
        figmaUrl:
            "https://www.figma.com/design/vnP31nIxxD68gohWPgbqBO/Portfolio?node-id=12-3416&t=5AXzkMJUDuGmGoLs-1",
    },
];
