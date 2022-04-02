import testimonials from '../icons/testimonials.svg';
import { ReactComponent as Zigzag } from '../icons/zigzag.svg';

export default ({ totalTestimonials = 0 }: { totalTestimonials: number }) => {
    return (
        <div className="flex flex-col items-center w-full">
            <img height="55px" width="62px" src={testimonials} className="" />
            <div className="text-center flex align-center mt-3">
                <h1 className="text-3xl font-bold">
                    Testimonials I’ve left
                </h1>
                <div className="ml-5 px-3 border-2 rounded-full items-center flex">
                    <p className="text-sm text-[#5C5589]">
                        {totalTestimonials}
                    </p>
                </div>
            </div>
            <Zigzag />
        </div>
    )
}