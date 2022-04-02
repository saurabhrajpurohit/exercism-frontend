interface Track {
    course?: boolean;
    icon_url: string;
    is_new?: boolean;
    last_touched_at?: string;
    links?: { 
        concepts: string;
        self: string;
        exercises: string;
     }
    num_concepts?: number;
    num_exercises?: number;
    slug: string;
    tags?: Array<string>;
    title: string;
    web_url?: string;
    count?: number;
};

export default Track;