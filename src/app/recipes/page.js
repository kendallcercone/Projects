import Cards from "../../components/Cards";
import AllRecipes from "../../components/AllRecipes";
import { getRecentRecipes } from "../../utils/getRecent";
import { getFeaturedRecipes } from "../../utils/getFeatured";

const Recipes = async () => {
    const recentRecipes = await getRecentRecipes();
    const featuredRecipes = await getFeaturedRecipes();

    return (
        <div className="p-4">
            <h2 className="text-4xl font-bold">Recipes</h2>
            <div className="mt-10">
                <h3 className="text-2xl font-semibold">Featured Recipes</h3>
                <Cards cards={featuredRecipes} />
            </div>
            <div className="mt-10">
                <h3 className="text-2xl font-semibold">Recent Recipes</h3>
                <Cards cards={recentRecipes} />
            </div>
            <div className="mt-10">
                <h3 className="text-2xl font-semibold">All Recipes</h3>
                <AllRecipes />
            </div>
        </div>
    );
};

export default Recipes;
