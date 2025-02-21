import Cards from "../components/Cards";
import Recents from "../components/Recents";
import Standouts from "../components/Standouts";

const standouts = [
    { link: "recipes/from-scratch" },
    { link: "recipes/from-scratch" },
    { link: "recipes/from-scratch" },
];

const categories = [
    { name: "from scratch", link: "recipes/from-scratch" },
    { name: "breakfast", link: "recipes/breakfast" },
    { name: "bread", link: "recipes/bread" },
    { name: "dinner", link: "recipes/dinner" },
    { name: "lunch", link: "recipes/lunch" },
    { name: "snacks", link: "recipes/snacks" },
    { name: "soups", link: "recipes/soups" },
    { name: "sweets", link: "recipes/sweets" },
];

const recents = [
    {
        name: "from scratch",
        link: "recipes/from-scratch",
        caption:
            "Lorem ipsum dolor sit amet consectetur. Mi dolor vestibulum fusce scelerisque. Enim vel sed vestibulum turpis enim felis nibh. ",
    },
    {
        name: "breakfast",
        link: "recipes/breakfast",
        caption:
            "Lorem ipsum dolor sit amet consectetur. Mi dolor vestibulum fusce scelerisque. Enim vel sed vestibulum turpis enim felis nibh. ",
    },
    {
        name: "bread",
        link: "recipes/bread",
        caption:
            "Lorem ipsum dolor sit amet consectetur. Mi dolor vestibulum fusce scelerisque. Enim vel sed vestibulum turpis enim felis nibh. ",
    },
    {
        name: "dinner",
        link: "recipes/dinner",
        caption:
            "Lorem ipsum dolor sit amet consectetur. Mi dolor vestibulum fusce scelerisque. Enim vel sed vestibulum turpis enim felis nibh. ",
    },
    {
        name: "lunch",
        link: "recipes/lunch",
        caption:
            "Lorem ipsum dolor sit amet consectetur. Mi dolor vestibulum fusce scelerisque. Enim vel sed vestibulum turpis enim felis nibh. ",
    },
    {
        name: "snacks",
        link: "recipes/snacks",
        caption:
            "Lorem ipsum dolor sit amet consectetur. Mi dolor vestibulum fusce scelerisque. Enim vel sed vestibulum turpis enim felis nibh. ",
    },
];

export default function Home() {
    return (
        <div className="">
            <main className="w-full flex justify-center transition-all duration-500 ease-in-out">
                <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 transition-all duration-500 ease-in-out">
                    <div className="mt-10 flex flex-col justify-center items-center">
                        <Standouts standouts={standouts}/>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-2xl">Recently dished out...</h2>
                        <div className="mt-10 bg-[#D98262] bg-opacity-70 p-2">
                            <Recents recents={recents} />
                        </div>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-2xl">Pick your plate...</h2>
                        <div className="mt-10 overflow-x-scroll  flex flex-row flex-nowrap w-full">
                            <Cards cards={categories} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
