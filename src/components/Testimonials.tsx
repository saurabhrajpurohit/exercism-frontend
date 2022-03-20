import testimonials from '../images/testimonials.svg';
import zigzag from '../images/zigzag.svg';

export default ({ totalTestimonials = 0 }: { totalTestimonials: number }) => {
    return (
        <div className="">
            <div>
                <img src={testimonials} className="" />
                <div className="text-center flex align-center">
                    <h1 className="text-3xl font-bold">
                        Testimonials I’ve left
                    </h1>
                    <p className="text-xl">
                        {totalTestimonials}
                    </p>
                </div>
                <img src={zigzag} className="" />
            </div>
        </div>
    )
}