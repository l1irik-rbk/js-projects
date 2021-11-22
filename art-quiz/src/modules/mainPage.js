import Category from './category';
import Settings from './settings';

class MainPage {
  constructor() {
    this.mainPage = document.querySelector('.main__page');
    this.screen = `
      <div class="container">
        <div class="main__page-wrapper">
          <div class="main__pag-settings"></div>
          <div class="logo"></div>
          <div class="main__page-quiz">
            <div class="main__page-quiz__artists">Artist quiz</div>
            <div class="main__page-quiz__pictures">Pictures quiz</div>
          </div>
        </div>
    </div>
    `;
    this.mainPage.innerHTML = this.screen;
    this.mainPageArtistsBtn = this.mainPage.querySelector('.main__page-quiz__artists');
    this.mainPagePicturesBtn = this.mainPage.querySelector('.main__page-quiz__pictures');
    this.settings = this.mainPage.querySelector('.main__pag-settings');
    this.mainPage.classList.add('active__page');

    this.isArtist = false;
    this.counter = 0;

    this.mainPage.classList.add('active');
    this.mainPageArtistsBtn.addEventListener('click', this.switchCategory.bind(this));
    this.mainPagePicturesBtn.addEventListener('click', this.switchCategory.bind(this));
    this.settings.addEventListener('click', this.openSettings.bind(this));
  }

  switchCategory(e) {
    let categoryText;
    if (e.target === this.mainPageArtistsBtn) {
      categoryText = this.mainPageArtistsBtn.textContent;
      this.isArtist = true;
    } else if (e.target === this.mainPagePicturesBtn) {
      categoryText = this.mainPagePicturesBtn.textContent;
      this.isArtist = false;
    }

    this.mainPage.classList.add('deactivate__page');
    this.mainPage.classList.remove('active__page');
    setTimeout(() => {
      this.mainPage.classList.remove('deactivate__page');
      this.mainPage.classList.remove('active');
      new Category(this.isArtist, this.counter, categoryText);
    }, 1000);
  }

  openSettings() {
    this.mainPage.classList.add('deactivate__page');
    this.mainPage.classList.remove('active__page');
    setTimeout(() => {
      this.mainPage.classList.remove('deactivate__page');
      this.mainPage.classList.remove('active');
      new Settings();
    }, 1000);
  }
}

export default MainPage;
