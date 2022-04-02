import Testimonial from "../models/Testimonial";
import TestimonialRow from "./TestimonialRow";
import { ReactComponent as Loader } from "../icons/loader.svg";

interface TracksTableProps {
    loading: boolean;
    testimonials: Testimonial[];
}

export default ({ testimonials, loading }: TracksTableProps) => {
    return (
        <div className="h-[520px] overflow-auto flex flex-col">
            {loading ? (
                <div className="h-full flex justify-center items-center">
                    <span className="animate-spin spin-slow">
                        <Loader />
                    </span>
                </div>
            ) : (
                testimonials.length ? testimonials.map((testimonial, index) => {
                    return (
                        <a key={testimonial.id} href="">
                            <div key={testimonial.id} className="border-b hover:bg-[#F4F7FD]">
                                <TestimonialRow testimonial={testimonial} />
                            </div>
                        </a>
                    )
                }) : (
                    <div className="h-full flex justify-center items-center">
                        <h3>There are no testimonials given by you</h3>
                    </div>
                ))
            }
        </div>
    )
}