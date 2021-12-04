import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd56d03f56d5443008078ee0ee3df5c67',
        });
    }
}

export default AppLoader;
