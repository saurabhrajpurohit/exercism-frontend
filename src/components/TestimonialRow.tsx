import Testimonial from "../models/Testimonial"
import { durationFrom } from "../utils/utils"
import Avatar from "./Avatar"
import { ReactComponent as Right } from "../icons/right.svg";

export default ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <div key={testimonial.id} className="flex px-2 h-16 items-center justify-items-stretch">
            <div className="px-3">
                <img className="min-w-[28px]" width="28px" src={testimonial.track.icon_url} />
            </div>
            <div className="px-3">
                <Avatar src={testimonial.mentor.avatar_url} />
            </div>
            <div className="px-3 w-1/4 min-w-[25%]">
                <h4 className="text-[#130B43] text-base font-medium">{testimonial.mentor.handle}</h4>
                <p className="text-[#5C5589] text-sm">{`on ${testimonial.exercise.title}`}</p>
            </div>
            <div className="grow">
                <p className="text-base font-normal text-[#5C5589] text-ellipsis overflow-hidden ">
                    {testimonial.content}
                </p>
            </div>
            <div className="px-3 text-[#5C5589] font-medium text-sm min-w-[10%]">
                {durationFrom(testimonial.created_at)}
            </div>
            <div className="px-3 ">
                <Right />
            </div>
        </div>
    )
}