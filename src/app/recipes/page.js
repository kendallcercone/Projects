import Cards from "../../components/Cards";

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

const Recipes = () => {
    return (
        <div className="">
            <h2 className="text-4xl">Recipes</h2>
            <div className="mt-10 overflow-x-scroll flex flex-row flex-nowrap w-full">
                <Cards cards={categories} />
            </div>
        </div>
    );
};

export default Recipes;
