import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Home/Banner";
import Contact from "../../components/Home/Contact";
import FAQ from "../../components/Home/FAQ";
import Intro from "../../components/Home/Intro";
import Stat from "../../components/Home/Stat";
import Featured from "../../components/Home/Featured";

const Homepage = () => {
    const gadgets=useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <Featured gadgets={gadgets}></Featured>
            <Contact></Contact>
            <Stat></Stat>
            <FAQ></FAQ>
        </div>
    );
};

export default Homepage;