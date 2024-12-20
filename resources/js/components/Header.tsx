import { Link } from "@inertiajs/react";
import whiteLogo from "../assets/logo-white.svg";

export default function Header() {
    return (
        <header className="">
            <div className="container mx-auto px-8">
                <div className="flex justify-between items-center py-6">
                    <Link
                        href="/"
                        className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                    >
                        <img
                            src={whiteLogo}
                            alt="Lucky Beard"
                            className="h-12 w-auto"
                        />
                    </Link>
                    <Link
                        href="/create"
                        className="px-6 py-2.5 bg-[#FF4D4D] text-white rounded-full hover:bg-[#FF3333] transition-colors"
                    >
                        Create new article
                    </Link>
                </div>
            </div>
        </header>
    );
}
