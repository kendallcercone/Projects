import { Suspense } from "react";
import NavigationEvents from "../../../components/NavigationEvents";

const Categories = () => {
    return (
        <div>
            <Suspense fallback={null}>
                <NavigationEvents />
        </Suspense>
        </div>
    );
};

export default Categories;
