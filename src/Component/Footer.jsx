import React from "react";
import {  FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
    return (
        <footer className="text-white footer footer-horizontal footer-center bg-primary text-base- content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a href="/terms" className="link link-hover">
                    Terms & Conditions
                </a>
                <a href="/privacy" className="link link-hover">
                    Privacy Policy
                </a>
                <a href="/about" className="link link-hover">
                    About Us
                </a>
                <a href="/contact" className="link link-hover">
                    Contact
                </a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                    >
                        <FacebookIcon />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                    >
                        <InstagramIcon />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                    >
                        <TwitterIcon />
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;