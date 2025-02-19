import Link from "next/link";
import Image from "next/image";

const Recents = ({ recents }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2">
            {recents.map((recent) => (
                <Link key={recent.name} href={recent.link} className="">
                    <div className="bg-white flex flex-row items-center m-2 rounded-sm shadow-md transition-transform transform hover:scale-105">
                        <Image
                            src="/placeholder.avif"
                            alt={recent.name}
                            width={100}
                            height={100}
                            className="m-2 w-[100px] h-[100px] object-cover rounded-md"
                        />
                        <div>
                            <h4 className="mb-2 text-[#8B9B80]">
                                {recent.name}
                            </h4>
                            <p className="text-xs mr-2 text-wrap italic w-full truncate">
                                {recent.caption}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Recents;
