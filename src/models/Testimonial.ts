interface Testimonial {
    content: string;
    created_at: Date;
    exercise: {
        slug: string;
        title: string;
        icon_url: string;
    };
    id: number;
    mentor: {
        handle: string;
        avatar_url: string;
    }
    track: {
        slug: string;
        title: string;
        icon_url: string;
    }
};

export default Testimonial;