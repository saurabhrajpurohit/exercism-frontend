import HomeScreenLayout from "../layout/HomeScreenLayout";
import Testimonials from "../components/Testimonials";
import Select from "../components/Select";
const Home = () => {
    return (
        <HomeScreenLayout>
            <div className="text-center">
                <Testimonials totalTestimonials={47} />
            </div>
            <div className="px-10">
                <div className="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 rounded-lg ring-gray-900/5 w-full">
                    <Select />
                </div>
            </div>
        </HomeScreenLayout>
    );
}

export default Home;