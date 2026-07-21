import Link from "next/link";
import { navMenu } from "../data";

export const NavigationBar = () => {
    return (
        <div className="w-full flex justify-center pt-5 pb-2 md:py-5 sticky top-0 z-50 backdrop-blur-sm bg-transparent">
            <ul className="flex gap-x-7 md:gap-x-10">
                {navMenu.map((nav) => (
                    <li
                        key={nav.page}
                        className="font-display font-semibold text-sm"
                    >
                        <Link
                            href={nav.path}
                            className="inline-block px-2 pt-1 transition-opacity duration-200 hover:opacity-60 active:opacity-30"
                        >
                            {nav.page}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
