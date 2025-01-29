import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            {/* Banner */}
            <Banner />
            {/* Categories Tab section */}
            <Categories categories={categories} />
        </div>
    );
};

export default Home;