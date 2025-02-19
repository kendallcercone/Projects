import Link from "next/link";

const Footer = () => {
    return (
        <div className="mt-10 w-full h-[50] bg-[#8B9B80] bg-opacity-70 flex justify-end items-center pr-20 bottom-0">
            <Link href="https://www.google.com" className="text-xs">
                Instagram
        </Link>
        <p className="mx-4">|</p>
            <Link href="https://www.google.com" className="text-xs">
                Email
            </Link>
        </div>
    );
};

export default Footer;
