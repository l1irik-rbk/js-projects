// type Callback<T> = (data: T) => void;
interface IDataResponse {
    status: string;
    sources: INews[]
}

interface INews {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

class Loader {
    baseLink: string;
    options: { apiKey: string };

    constructor(baseLink: string, options: { apiKey: string }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: string, options?: Record<string, string> },
        callback: <IDataResponse>(data: IDataResponse) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: object, endpoint: string) {
        const urlOptions: object = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        (Object.keys(urlOptions) as Array<keyof typeof urlOptions>).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: <IDataResponse>(data: IDataResponse) => void, options: { apiKey?: string } = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;


