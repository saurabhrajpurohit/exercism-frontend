let timeout: any;

export const durationFrom = (date: Date) => {
    date = new Date(date);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);
    if (days > 30 && days < 365) {
        let months = Math.floor(days / 30);
        return `${months == 1 ? "a" : months} months ago`;
    } else if (days > 365) {
        let years = Math.floor(days / 365);
        return `${years == 1 ? "a" : years} years ago`;
    } else if (days === 1) {
        return `a day ago`;
    } else if (days > 1) {
        return `${days} days ago`;
    } else if (hours === 1) {
        return `an hour ago`;
    } else if (hours > 1) {
        return `${hours} hours ago`;
    } else if (minutes === 1) {
        return `a minute ago`;
    } else if (minutes > 1) {
        return `${minutes} minutes ago`;
    } else if (seconds === 1) {
        return `a second ago`;
    } else if (seconds > 1) {
        return `${seconds} seconds ago`;
    }
};

export const debounce = (func: Function, wait: number) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        func()
    }, wait);
};
