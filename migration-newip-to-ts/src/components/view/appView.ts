import News from './news/news';
import Sources from './sources/sources';

interface IDataArticles {
    status: string;
    totalResults: number;
    articles: Array<IArticles>
}

interface IArticles {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
    source: { id: string, name: string }
}

interface IDataSources {
    status: string;
    sources: Array<ISourses>;
}

interface ISourses {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
    source: { id: string, name: string }
}

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IDataArticles) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IDataSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
