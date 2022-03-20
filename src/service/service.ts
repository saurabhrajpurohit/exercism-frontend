export default class Service {
    BASE_URL = process.env.REACT_APP_BASE_URL;
    constructor() {
        this.BASE_URL = `${this.BASE_URL}/api/v2`;
    }

    async getTracks() {
        return fetch(`${this.getTracks}/tracks`).then(res => res.json());
    }

    async getTestimonials(track: string, order: string, page: number, exercise: string) {
        return fetch(`${this.BASE_URL}/hiring/testimonials`).then(res => res.json());
    }
}