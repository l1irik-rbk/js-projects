import News from './news/news';
import Sources from './sources/sources';
import { ISourses } from './sources/sources';
import { IArticles } from './news/news';

interface IDataArticles {
    status?: string;
    totalResults?: number;
    articles?: Array<IArticles>;
}

interface IDataSources {
    status?: string;
    sources?: Array<ISourses>;
}

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IDataArticles): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IDataSources): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
