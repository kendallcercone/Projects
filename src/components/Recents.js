import Link from "next/link";
import Image from "next/image";


const Recents = ({ recents }) => {

  console.log(recents)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2">
            {recents.map((recents) => (
                <Link
                    key={recents.title}
                    href={recents.link}
                    className=""
                >
                    <div className="bg-white flex flex-row items-center m-2 rounded-sm shadow-md transition-transform transform hover:scale-105">
                        <Image
                            src={recents.image}
                            alt={recents.title}
                            width={100}
                            height={100}
                            className="m-2 w-16 object-cover rounded-md"
                        />
                        <div>
                            <h4 className="mb-2 text-[#8B9B80]">
                                {recents.title}
                            </h4>
                            <p className="text-xs mr-2 text-wrap italic w-full truncate">
                                {recents.description}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Recents;
