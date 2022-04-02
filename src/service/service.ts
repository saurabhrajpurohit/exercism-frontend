class Service {
    BASE_URL = process.env.REACT_APP_BASE_URL;
    constructor() {
        this.BASE_URL = `${this.BASE_URL}/api/v2`;
    }

    getTracks() {
        return fetch(`${this.BASE_URL}/tracks`).then(res => res.json()).then(res => res.tracks);
    }

    getTestimonials(track: string|undefined, order: string, page: number, exercise: string) {
        let url = `${this.BASE_URL}/hiring/testimonials?page=${page}`;
        if(track) {
            url = `${url}&track=${track}`;
        }
        if(exercise) {
            url = `${url}&exercise=${exercise}`;
        }
        if(order) {
            url = `${url}&order=${order}`;
        }
        return fetch(url).then(res => res.json());
    }
}

export default new Service();