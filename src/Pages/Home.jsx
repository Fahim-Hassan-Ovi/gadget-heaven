import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import { Helmet } from "react-helmet";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {/* Banner */}
            <Banner />
            {/* Categories Tab section */}
            <Categories categories={categories} />
        </div>
    );
};

export default Home;