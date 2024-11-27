import React from "react";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import darkLogo from "../assets/logo-dark.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";
import instagram from "../assets/instagram.svg";

export default function Footer() {
    return (
        <footer className="bg-[#2A2D30] text-white py-12">
            <div className="container mx-auto px-8">
                {/* Logo and Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    {/* Logo */}
                    <div className="flex items-center gap-4 mb-6 md:mb-0">
                        <img
                            src={darkLogo}
                            alt="Lucky Beard"
                            className="h-12 w-auto"
                        />
                    </div>

                    {/* Navigation Links and Social Media */}
                    <div className="flex items-center gap-8">
                        {/* Policy Links */}
                        <nav className="flex items-center gap-6 text-sm">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Privacy policy
                            </a>
                            <span className="border-l-2 h-4 border-gray-300"></span>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Cookie policy
                            </a>
                        </nav>

                        {/* Social Media Links */}
                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3D4044] hover:bg-[#4A4D51] transition-colors"
                            >
                                <img
                                    src={whatsapp}
                                    alt="whatsapp"
                                    className="h-12 w-auto"
                                />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3D4044] hover:bg-[#4A4D51] transition-colors"
                            >
                                <img
                                    src={facebook}
                                    alt="facebook"
                                    className="h-12 w-auto"
                                />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3D4044] hover:bg-[#4A4D51] transition-colors"
                            >
                                <img
                                    src={instagram}
                                    alt="instagram"
                                    className="h-12 w-auto"
                                />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3D4044] hover:bg-[#4A4D51] transition-colors"
                            >
                                <img
                                    src={linkedin}
                                    alt="linkedin"
                                    className="h-12 w-auto"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Cookie Notice */}
                <div className=" pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-sm text-gray-400 md:pr-8">
                            By using this website, you agree to our use of
                            cookies. We use cookies to provide you with a great
                            experience and to help our website run effectively.
                        </p>
                        <button className="px-6 py-2 bg-[#FF4D4D] rounded-full text-sm font-medium hover:bg-[#FF3333] transition-colors whitespace-nowrap">
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
