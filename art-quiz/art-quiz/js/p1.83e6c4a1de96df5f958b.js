(()=>{"use strict";let t,i=!0,s=!1,e=5;function a(){localStorage.getItem("isMuted")&&(i=JSON.parse(localStorage.getItem("isMuted"))),localStorage.getItem("timeGame")&&(s=JSON.parse(localStorage.getItem("timeGame"))),localStorage.getItem("saundValue")&&(t=localStorage.getItem("saundValue")),localStorage.getItem("timeOfGame")&&(e=localStorage.getItem("timeOfGame"))}window.addEventListener("beforeunload",(function(){localStorage.setItem("isMuted",JSON.stringify(i)),localStorage.setItem("timeGame",JSON.stringify(s)),localStorage.setItem("saundValue",t),localStorage.setItem("timeOfGame",e)})),window.addEventListener("load",a);const n=class{constructor(t,i,s,e,a,n,c,r,o){this.score=t,this.raundObj=i,this.marker=s,this.counter=n,this.category=e,this.isArtist=a,this.quizQuestions=c,this.number=r,this.categoryText=o,this.popup=document.querySelector(".popup"),this.screen='\n        <div class="popup__answer">\n          <div class="popup__container">\n            <div class="popup__content">\n              <div class="popup__answer-img">\n                <div class="popup__answer-img__result"></div>\n              </div>\n              <div class="popup__answer-wrapper">\n                <div class="popup__answer-title"></div>\n                <div class="popup__answer-text"><span class="popup__answer-author"></span>, <span\n                    class="popup__answer-year"></span></div>\n              </div>\n              <div class="popup__answer-next">Next</div>\n            </div>\n          </div>\n        </div>\n      ',this.popup.innerHTML=this.screen,this.popupNextBtn=this.popup.querySelector(".popup__answer-next"),this.popupAnswerImg=this.popup.querySelector(".popup__answer-img"),this.popupAnswerResult=this.popup.querySelector(".popup__answer-img__result"),this.popupAnswerTitle=this.popup.querySelector(".popup__answer-title"),this.popupAnswerAuthor=this.popup.querySelector(".popup__answer-author"),this.popupAnswerYear=this.popup.querySelector(".popup__answer-year"),this.popup.classList.add("active"),this.setPopup(),this.popup.querySelector(".popup__content").classList.add("popup--active")}setPopup(){this.counter++,this.marker?this.popupAnswerResult.style.backgroundImage="url('assets/svg/true.svg')":this.popupAnswerResult.style.backgroundImage="url('assets/svg/false.svg')",this.popupAnswerImg.style.backgroundImage=`url('assets/image-data/img/${this.raundObj.imageNum}.jpg')`,this.popupAnswerTitle.textContent=this.raundObj.name,this.popupAnswerAuthor.textContent=this.raundObj.author,this.popupAnswerYear.textContent=this.raundObj.year,this.counter<10?this.popupNextBtn.addEventListener("click",(()=>{this.quizQuestions.classList.remove("active__page"),this.quizQuestions.classList.add("deactivate__page"),this.popup.querySelector(".popup__content").classList.remove("popup--active"),this.popup.querySelector(".popup__content").classList.add("popup__content-deactivate"),setTimeout((()=>{this.quizQuestions.classList.remove("deactivate__page"),this.popup.querySelector(".popup__content").classList.remove("popup__content-deactivate"),this.popup.classList.remove("active"),new l(this.category,this.isArtist,this.counter,this.score,this.number,this.categoryText)}),1e3)})):this.popupNextBtn.addEventListener("click",(()=>{if(this.popup.innerHTML=`\n          <div class="popup__final">\n            <div class="popup__container">\n              <div class="popup__content">\n                <div class="popup__final-img"></div>\n                <div class="popup__final-text">Congratulations!</div>\n                <div class="popup__final-score"><span class="popup__change-score">${this.score}</span>/10</div>\n                <div class="popup__buttons">\n                  <button class="popup__final-btn popup__home-btn">Home</button>\n                  <button class="popup__final-btn popup__next-btn">Next Quiz</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        `,!i){const i=new Audio("./assets/audio/game-over.mp3");i.volume=t,i.play()}const s=this.popup.querySelector(".popup__home-btn"),e=this.popup.querySelector(".popup__change-score"),a=this.popup.querySelector(".popup__next-btn");e.textContent=this.score,a.addEventListener("click",(()=>{this.quizQuestions.classList.remove("active__page"),this.quizQuestions.classList.add("deactivate__page"),this.popup.querySelector(".popup__content").classList.remove("popup--active"),this.popup.querySelector(".popup__content").classList.add("popup__content-deactivate"),setTimeout((()=>{this.quizQuestions.classList.remove("deactivate__page"),this.popup.querySelector(".popup__content").classList.remove("popup__content-deactivate"),this.popup.classList.remove("active"),this.quizQuestions.classList.remove("active"),new d(this.isArtist,0,this.categoryText)}),1e3)})),s.addEventListener("click",(()=>{this.quizQuestions.classList.remove("active__page"),this.quizQuestions.classList.add("deactivate__page"),this.popup.querySelector(".popup__content").classList.remove("popup--active"),this.popup.querySelector(".popup__content").classList.add("popup__content-deactivate"),setTimeout((()=>{this.quizQuestions.classList.remove("deactivate__page"),this.popup.querySelector(".popup__content").classList.remove("popup__content-deactivate"),this.popup.classList.remove("active"),this.quizQuestions.classList.remove("active"),new _}),1e3)}))}))}};let c=[];function r(t){return Math.floor(Math.random()*t)}let o=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];window.addEventListener("beforeunload",(function(){localStorage.setItem("answers",JSON.stringify(o))})),window.addEventListener("load",(function(){localStorage.getItem("answers")&&(o=JSON.parse(localStorage.getItem("answers")))}));const l=class{constructor(t,i,s,e,a,n){this.category=t,this.isArtist=i,this.counter=s,this.score=e,this.number=a,this.categoryText=n,this.quizQuestions=document.querySelector(".quiz__questions"),this.isArtist?this.screen='\n        <div class="quiz__pictures-category">\n          <div class="container">\n            <div class="category">\n              <div class="category__timer">\n                <div class="category__timer-close"></div>\n                <div class="category__timer-line"><div class="category__timer-line__dynamic"></div></div>\n                <div class="category__timer-time">0:<span class="corrent__time"></span></div>\n              </div>\n              <div class="category__question">Кто автор этой картины?</div>\n              <div class="category__img">\n                <ul class="points">\n                    <li class="point"></li>\n                    <li class="point"></li>\n                    <li class="point"></li>\n                    <li class="point"></li>\n                    <li class="point"></li>\n                    <li class="point"></li>\n                    <li class="point"></li>\n                    <li class="point"></li>\n                    <li class="point"></li>\n                    <li class="point"></li>\n                  </ul>\n              </div>\n              <div class="category__answers">\n                <div class="category__answer" id="a1"></div>\n                <div class="category__answer" id="a2"></div>\n                <div class="category__answer" id="a3"></div>\n                <div class="category__answer" id="a4"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      ':this.screen='\n        <div class="quiz__pictures-category">\n          <div class="container">\n            <div class="category">\n              <div class="category__timer">\n                <div class="category__timer-close"></div>\n                <div class="category__timer-line"><div class="category__timer-line__dynamic"></div></div>\n                <div class="category__timer-time">0:<span class="corrent__time"></span></div>\n              </div>\n              <div class="category__question"></div>\n              <div class="category__answers">\n                <div class="category__answer category__answer-img " id="a1"></div>\n                <div class="category__answer category__answer-img" id="a2"></div>\n                <div class="category__answer category__answer-img" id="a3"></div>\n                <div class="category__answer category__answer-img" id="a4"></div>\n              </div>\n              <ul class="points points__img">\n                <li class="point"></li>\n                <li class="point"></li>\n                <li class="point"></li>\n                <li class="point"></li>\n                <li class="point"></li>\n                <li class="point"></li>\n                <li class="point"></li>\n                <li class="point"></li>\n                <li class="point"></li>\n                <li class="point"></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      ',this.quizQuestions.innerHTML=this.screen,this.categoryImg=this.quizQuestions.querySelector(".category__img"),this.answers=[this.quizQuestions.querySelector("#a1"),this.quizQuestions.querySelector("#a2"),this.quizQuestions.querySelector("#a3"),this.quizQuestions.querySelector("#a4")],this.points=this.quizQuestions.querySelectorAll(".point"),this.correntTime=this.quizQuestions.querySelector(".corrent__time"),this.dynamicLine=this.quizQuestions.querySelector(".category__timer-line__dynamic"),this.line=this.quizQuestions.querySelector(".category__timer-line"),this.closeBtn=this.quizQuestions.querySelector(".category__timer-close"),this.quizQuestions.classList.add("active__page"),this.quizQuestions.classList.add("active"),this.closeBtn.addEventListener("click",this.closeRaund.bind(this)),this.setQuestion()}async setQuestion(){try{const t=await this.getRandomAutors(),i=await this.getRandomPictures(),a=await this.getRaund();let r=0;10===c.length&&(c=[]),this.isArtist?this.categoryImg.style.backgroundImage=`url('assets/image-data/full/${a.imageNum}full.jpg')`:this.quizQuestions.querySelector(".category__question").textContent=`Какую картину написал ${a.author}?`;for(let t=0;t<c.length;t++)this.points[t].classList.add(c[t]);this.correntTime.textContent=+e<10?`0${e}`:`${e}`,s&&this.timeGames(),this.answers.forEach((s=>{this.isArtist?s.textContent=t[r++]:s.style.backgroundImage=`url('assets/image-data/img/${i[r++]}.jpg')`,s.addEventListener("click",(t=>{let i;if(10===o[this.number].length&&(o[this.number]=[]),this.isArtist||(i=t.target.style.backgroundImage.split("/"),i=i[i.length-1].split(".")[0]),t.target!==s||t.target.textContent!==a.author&&i!==a.imageNum){if(!this.isArtist){const t=document.createElement("div");t.classList.add("category__answer-img--false"),s.append(t)}this.music("./assets/audio/uncorrect.mp3"),s.classList.add("wrong-answer"),c.push("point__wrong"),o[this.number].push("point__wrong"),this.points[this.counter].classList.add("point__wrong"),new n(this.score,a,!1,this.category,this.isArtist,this.counter,this.quizQuestions,this.number,this.categoryText)}else{if(!this.isArtist){const t=document.createElement("div");t.classList.add("category__answer-img--true"),s.append(t)}this.music("./assets/audio/correct.mp3"),this.score++,s.classList.add("correct-answer"),c.push("point__correct"),o[this.number].push("point__correct"),this.points[this.counter].classList.add("point__correct"),new n(this.score,a,!0,this.category,this.isArtist,this.counter,this.quizQuestions,this.number,this.categoryText)}}))}))}catch(t){console.log(t)}}async timeGames(){try{let s=this.correntTime.textContent;const a=await this.getRaund(),r=this.correntTime,{answers:l}=this,{number:u}=this,{counter:d}=this,{points:_}=this,{score:v}=this,{category:g}=this,{isArtist:h}=this,{quizQuestions:p}=this,{categoryText:m}=this,{dynamicLine:y}=this,q=this.closeBtn,{line:z}=this,L=+window.getComputedStyle(z).width.replace("px","");let w=0;q.addEventListener("click",(()=>clearTimeout(S))),l.forEach((t=>t.addEventListener("click",(()=>clearTimeout(S)))));let S=setTimeout((function q(){if(s--,w+=L/e,y.style.width=`${w}px`,r.textContent=s<10?`0${s}`:`${s}`,0!==s&&(S=setTimeout(q,1e3)),0===s){if(!i){const i=new Audio("./assets/audio/uncorrect.mp3");i.volume=t,i.play()}w=0,l.forEach((t=>t.classList.add("wrong-answer"))),c.push("point__wrong"),o[u].push("point__wrong"),_[d].classList.add("point__wrong"),new n(v,a,!1,g,h,d,p,u,m)}}),1e3)}catch(t){console.log(t)}}closeRaund(){c=[],this.quizQuestions.classList.add("deactivate__page"),this.quizQuestions.classList.remove("active__page"),setTimeout((()=>{this.quizQuestions.classList.remove("deactivate__page"),this.quizQuestions.classList.remove("active"),new _}),1e3)}music(s){if(!i){const i=new Audio(s);i.volume=t,i.play()}}async getData(){try{const t=await fetch("data.json");return await t.json()}catch(t){console.log(t)}}async getRaund(){try{10===this.counter&&(this.counter=0,this.score=0,this.pointsAnswers=[]);const t=await this.getData();let i;i=this.isArtist?t.filter((t=>t.category===this.category)).slice(0,10):t.filter((t=>t.category===this.category)).reverse().slice(0,10);const{imageNum:s}=i[this.counter],{author:e}=i[this.counter],{year:a}=i[this.counter],{name:n}=i[this.counter];return{imageNum:s,author:e,year:a,name:n}}catch(t){console.log(t)}}async getRandomAutors(){try{const t=await this.getRaund(),i=await this.getData(),s=[];let e=0;for(let t=0;t<4+e;t++){const t=i[r(i.length)].author;s.includes(t)?e++:s.push(t)}return s.includes(t.author)||(s[r(s.length)]=t.author),s}catch(t){console.log(t)}}async getRandomPictures(){try{const t=await this.getRaund(),i=await this.getData(),s=[];let e=0;for(let t=0;t<4+e;t++){const t=i[r(i.length)].imageNum;s.includes(t)?e++:s.push(t)}return s.includes(t.imageNum)||(s[r(s.length)]=t.imageNum),s}catch(t){console.log(t)}}},u=class{constructor(t,i,s,e,a){this.raund=t,this.number=i,this.categoryText=s,this.isArtist=e,this.counter=a,this.result=document.querySelector(".result"),this.screen=`\n    <div class="container">\n      <div class="result__wrapper">\n        <div class="result__header">\n          <div class="result__header-left">\n            <div class="result__header-logo"><img class="quiz__logo-img" src="assets/svg/new-logo.svg" alt="logo"></div>\n            <div class="result__header-category">${this.categoryText}</div>\n          </div>\n          <div class="result__header-right">\n            <div class="result__header-home__btn">Home</div>\n            <div class="result__header-categories">Categories</div>\n          </div>\n        </div>\n        <div class="result__main">\n          <div class="result__main-img">\n            <div class="result__main-img__popup">\n              <div class="result__main-img__title"></div>\n              <div class="result__main-img__name"></div>\n            </div>\n          </div>\n          <div class="result__main-img">\n            <div class="result__main-img__popup">\n              <div class="result__main-img__title"></div>\n              <div class="result__main-img__name"></div>\n            </div>\n          </div>\n          <div class="result__main-img">\n            <div class="result__main-img__popup">\n              <div class="result__main-img__title"></div>\n              <div class="result__main-img__name"></div>\n            </div>\n          </div>\n          <div class="result__main-img">\n            <div class="result__main-img__popup">\n              <div class="result__main-img__title"></div>\n              <div class="result__main-img__name"></div>\n            </div>\n          </div>\n          <div class="result__main-img">\n            <div class="result__main-img__popup">\n              <div class="result__main-img__title"></div>\n              <div class="result__main-img__name"></div>\n            </div>\n          </div>\n          <div class="result__main-img">\n            <div class="result__main-img__popup">\n              <div class="result__main-img__title"></div>\n              <div class="result__main-img__name"></div>\n            </div>\n          </div>\n          <div class="result__main-img">\n            <div class="result__main-img__popup">\n              <div class="result__main-img__title"></div>\n              <div class="result__main-img__name"></div>\n            </div>\n          </div>\n          <div class="result__main-img">\n            <div class="result__main-img__popup">\n              <div class="result__main-img__title"></div>\n              <div class="result__main-img__name"></div>\n            </div>\n          </div>\n          <div class="result__main-img">\n            <div class="result__main-img__popup">\n              <div class="result__main-img__title"></div>\n              <div class="result__main-img__name"></div>\n            </div>\n          </div>\n          <div class="result__main-img">\n            <div class="result__main-img__popup">\n              <div class="result__main-img__title"></div>\n              <div class="result__main-img__name"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div> \n    `,this.result.classList.add("active"),this.counterRes=0,this.result.innerHTML=this.screen,this.resultsImgs=this.result.querySelectorAll(".result__main-img"),this.homeBtn=this.result.querySelector(".result__header-home__btn"),this.headerCategory=this.result.querySelector(".result__header-category"),this.result.classList.add("active__page"),this.resultsImgs.forEach((async t=>{const i=t.querySelector(".result__main-img__title"),s=t.querySelector(".result__main-img__name"),e=await this.getRaundInfo();"point__correct"===o[this.number][this.counterRes]&&t.classList.add("quiz__category-img--active"),i.textContent=e[this.counterRes].name,s.textContent=`${e[this.counterRes].author}, ${e[this.counterRes].year}`,t.style.backgroundImage=`url('assets/image-data/img/${e[this.counterRes].imageNum}.jpg')`,t.addEventListener("click",(()=>{t.querySelector(".result__main-img__popup").classList.toggle("result__main-img__popup--active")})),this.counterRes++})),this.homeBtn.addEventListener("click",this.goHome.bind(this)),this.headerCategory.addEventListener("click",this.openCategory.bind(this))}async getRaundInfo(){try{const t=await fetch("data.json"),i=await t.json();let s;return s=this.isArtist?i.filter((t=>t.category===this.raund)).slice(0,12):i.filter((t=>t.category===this.raund)).reverse().slice(0,12),s}catch(t){console.log(t)}}goHome(){this.result.classList.add("deactivate__page"),this.result.classList.remove("active__page"),setTimeout((()=>{this.result.classList.remove("deactivate__page"),this.result.classList.remove("active"),new _}),1e3)}openCategory(){this.result.classList.add("deactivate__page"),this.result.classList.remove("active__page"),setTimeout((()=>{this.result.classList.remove("deactivate__page"),this.result.classList.remove("active"),new d(this.isArtist,this.counter,this.categoryText)}),1e3)}},d=class{constructor(t,i,s){this.isArtist=t,this.counter=i,this.categoryText=s,this.isArtist?this.id=0:this.id=12,this.quiz=document.querySelector(".quiz"),this.screen=`\n      <div class="new__quiz">\n        <div class="container">\n          <div class="quiz-wrapper">\n            <div class="quiz__header">\n              <div class="quiz__header-wrapper">\n                <div class="quiz__header-logo"><img class="quiz__logo-img" src="assets/svg/new-logo.svg" alt="logo">\n                </div>\n                <div class="quiz__header-home__btn">Home</div>\n                <div class="quiz__header-categories">Categories</div>\n              </div>\n          </div>\n          <h2 class="quiz__title">${this.categoryText}</h2>\n          <ul class="quiz__categories">\n            <li class="quiz__category" id="${0+this.id}">\n              <div class="quiz__category-top">\n                <div class="quiz__category-header">Realism</div>\n                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>\n              </div>\n              <div class="quiz__category-img">\n                <div class="quiz__reload hidden">\n                  <div class="quiz__reload-text">SCORE</div>\n                </div>\n              </div>\n            </li>\n\n            <li class="quiz__category" id="${1+this.id}">\n              <div class="quiz__category-top">\n                <div class="quiz__category-header">Impressionism</div>\n                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>\n              </div>\n              <div class="quiz__category-img">\n                <div class="quiz__reload hidden">\n                  <div class="quiz__reload-text">SCORE</div>\n                </div>\n              </div>\n            </li>\n\n            <li class="quiz__category" id="${2+this.id}">\n              <div class="quiz__category-top">\n                <div class="quiz__category-header">Religion</div>\n                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>\n              </div>\n              <div class="quiz__category-img">\n                <div class="quiz__reload hidden">\n                  <div class="quiz__reload-text">SCORE</div>\n                </div>\n              </div>\n            </li>\n\n            <li class="quiz__category" id="${3+this.id}">\n              <div class="quiz__category-top">\n                <div class="quiz__category-header">Portrait</div>\n                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>\n              </div>\n              <div class="quiz__category-img">\n                <div class="quiz__reload hidden">\n                  <div class="quiz__reload-text">SCORE</div>\n                </div>\n              </div>\n            </li>\n\n            <li class="quiz__category" id="${4+this.id}">\n              <div class="quiz__category-top">\n                <div class="quiz__category-header">Renaissance</div>\n                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>\n              </div>\n              <div class="quiz__category-img">\n                <div class="quiz__reload hidden">\n                  <div class="quiz__reload-text">SCORE</div>\n                </div>\n              </div>\n            </li>\n\n            <li class="quiz__category" id="${5+this.id}">\n              <div class="quiz__category-top">\n                <div class="quiz__category-header">Painting</div>\n                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>\n              </div>\n              <div class="quiz__category-img">\n                <div class="quiz__reload hidden">\n                  <div class="quiz__reload-text">SCORE</div>\n                </div>\n              </div>\n            </li>\n\n            <li class="quiz__category" id="${6+this.id}">\n              <div class="quiz__category-top">\n                <div class="quiz__category-header">Landscape</div>\n                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>\n              </div>\n              <div class="quiz__category-img">\n                <div class="quiz__reload hidden">\n                  <div class="quiz__reload-text">SCORE</div>\n                </div>\n              </div>\n            </li>\n\n            <li class="quiz__category" id="${7+this.id}">\n              <div class="quiz__category-top">\n                <div class="quiz__category-header">Marine</div>\n                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>\n              </div>\n              <div class="quiz__category-img">\n                <div class="quiz__reload hidden">\n                  <div class="quiz__reload-text">SCORE</div>\n                </div>\n              </div>\n            </li>\n\n            <li class="quiz__category" id="${8+this.id}">\n              <div class="quiz__category-top">\n                <div class="quiz__category-header">Avant-garde</div>\n                <div class="quiz__category-score"> <span class="quiz__category-counter">0</span>/10</div>\n              </div>\n              <div class="quiz__category-img">\n                <div class="quiz__reload hidden">\n                  <div class="quiz__reload-text">SCORE</div>\n                </div>\n              </div>\n            </li>\n\n            <li class="quiz__category" id="${9+this.id}">\n              <div class="quiz__category-top">\n                <div class="quiz__category-header">Surrealism</div>\n                <div class="quiz__category-score"><span class="quiz__category-counter">0</span>/10</div>\n              </div>\n              <div class="quiz__category-img">\n                <div class="quiz__reload hidden">\n                  <div class="quiz__reload-text">SCORE</div>\n                </div>\n              </div>\n            </li>\n\n            <li class="quiz__category" id="${10+this.id}">\n              <div class="quiz__category-top">\n                <div class="quiz__category-header">Surrealism</div>\n                <div class="quiz__category-score"><span class="quiz__category-counter">0</span>/10</div>\n              </div>\n              <div class="quiz__category-img">\n                <div class="quiz__reload hidden">\n                  <div class="quiz__reload-text">SCORE</div>\n                </div>\n            </li>\n\n            <li class="quiz__category" id="${11+this.id}">\n              <div class="quiz__category-top">\n                <div class="quiz__category-header">Expressionism</div>\n                <div class="quiz__category-score"><span class="quiz__category-counter">0</span>/10</div>\n              </div>\n              <div class="quiz__category-img">\n                <div class="quiz__reload hidden">\n                  <div class="quiz__reload-text">SCORE</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    `,this.quiz.innerHTML=this.screen,this.quizCategories=this.quiz.querySelectorAll(".quiz__category"),this.quizCategoryImg=this.quiz.querySelectorAll(".quiz__category-img"),this.homeBtn=this.quiz.querySelector(".quiz__header-home__btn"),this.quiz.classList.add("active"),this.quiz.classList.add("active__page"),this.homeBtn.addEventListener("click",this.goHome.bind(this)),this.setCategory()}async setCategory(){try{const t=function(){const t=[];for(let i=0;i<o.length;i++){let s=0;for(let t=0;t<o[i].length;t++)0!==o[i].length&&"point__correct"===o[i][t]&&s++;t.push(s)}return t}(),i=await this.getPictures();for(let t=0;t<i.length;t++)this.quizCategoryImg[t].style.backgroundImage=`url('assets/image-data/img/${i[t]}.jpg')`;for(let i=0;i<this.quizCategories.length;i++)if(0!==t[i+this.id]){this.quizCategories[i].querySelector(".quiz__category-score").classList.add("active"),this.quizCategories[i].querySelector(".quiz__category-counter").textContent=t[i+this.id],this.quizCategories[i].querySelector(".quiz__category-img").classList.add("quiz__category-img--active");const s=this.quizCategories[i].querySelector(".quiz__reload");s.classList.remove("hidden"),s.addEventListener("click",(t=>{if(t.stopPropagation(),t.currentTarget===s){const t=this.quizCategories[i].querySelector(".quiz__category-header").textContent.toLowerCase(),s=+this.quizCategories[i].id;this.quiz.classList.add("deactivate__page"),this.quiz.classList.remove("active__page"),setTimeout((()=>{this.quiz.classList.remove("deactivate__page"),this.quiz.classList.remove("active"),new u(t,s,this.categoryText,this.isArtist,this.counter)}),1e3)}}))}this.quizCategories.forEach((t=>{t.addEventListener("click",(i=>{if(i.currentTarget===t){const i=t.querySelector(".quiz__category-header").textContent.toLowerCase(),s=+t.id;o[s]=[],this.quiz.classList.add("deactivate__page"),this.quiz.classList.remove("active__page"),setTimeout((()=>{this.quiz.classList.remove("deactivate__page"),this.quiz.classList.remove("active"),new l(i,this.isArtist,this.counter,0,s,this.categoryText)}),1e3)}}))}))}catch(t){console.log(t)}}async getPictures(){try{const t=await fetch("data.json"),i=await t.json(),s=[],e=[];if(i.forEach((t=>{s.includes(t.category)||s.push(t.category)})),this.isArtist){for(let t=0;t<s.length;t++)for(let a=i.length/2;a<i.length;a++)if(s[t]===i[a].category){e.push(i[a].imageNum);break}}else for(let t=0;t<s.length;t++)for(let a=i.length-1;a>0;a--)if(s[t]===i[a].category){e.push(i[a].imageNum);break}return e}catch(t){console.log(t)}}goHome(){this.quiz.classList.add("deactivate__page"),this.quiz.classList.remove("active__page"),setTimeout((()=>{this.quiz.classList.remove("deactivate__page"),this.quiz.classList.remove("active"),new _}),1e3)}},_=class{constructor(){this.mainPage=document.querySelector(".main__page"),this.screen='\n      <div class="container">\n        <div class="main__page-wrapper">\n          <div class="main__pag-settings"></div>\n          <div class="logo"></div>\n          <div class="main__page-quiz">\n            <div class="main__page-quiz__artists">Artist quiz</div>\n            <div class="main__page-quiz__pictures">Pictures quiz</div>\n          </div>\n        </div>\n    </div>\n    ',this.mainPage.innerHTML=this.screen,this.mainPageArtistsBtn=this.mainPage.querySelector(".main__page-quiz__artists"),this.mainPagePicturesBtn=this.mainPage.querySelector(".main__page-quiz__pictures"),this.settings=this.mainPage.querySelector(".main__pag-settings"),this.mainPage.classList.add("active__page"),this.isArtist=!1,this.counter=0,this.mainPage.classList.add("active"),this.mainPageArtistsBtn.addEventListener("click",this.switchCategory.bind(this)),this.mainPagePicturesBtn.addEventListener("click",this.switchCategory.bind(this)),this.settings.addEventListener("click",this.openSettings.bind(this))}switchCategory(t){let i;t.target===this.mainPageArtistsBtn?(i=this.mainPageArtistsBtn.textContent,this.isArtist=!0):t.target===this.mainPagePicturesBtn&&(i=this.mainPagePicturesBtn.textContent,this.isArtist=!1),this.mainPage.classList.add("deactivate__page"),this.mainPage.classList.remove("active__page"),setTimeout((()=>{this.mainPage.classList.remove("deactivate__page"),this.mainPage.classList.remove("active"),new d(this.isArtist,this.counter,i)}),1e3)}openSettings(){this.mainPage.classList.add("deactivate__page"),this.mainPage.classList.remove("active__page"),setTimeout((()=>{this.mainPage.classList.remove("deactivate__page"),this.mainPage.classList.remove("active"),new class{constructor(){this.settings=document.querySelector(".settings"),this.screen='\n      <div class="container">\n        <div class="settings__wrapper">\n          <div class="settings__header">\n            <div class="settngs__btn">Home</div>\n          </div>\n          <div class="settings__main">\n            <div class="settings__main-volume">\n              <label for="volume">Volume</label><div class="volume__btn"></div>\n              <input type="range" min="0" max="1" step="0.05" name="volume" id="volume" value="0.2" disabled>\n            </div>\n            <div class="settings__main-time">\n              <label for="time">Time game</label>\n              <input id="time" type="checkbox">\n            </div>\n            <div class="settings__main-change__time">\n              <div class="settings__main-change__time-title">Time to answer</div>\n              <div class="settings__main-change__time-wrapper">\n                <button class="settings__main-change__time-btn minus" type="button"><img src="assets/svg/minus.svg" alt="minus"></button>\n                <input class="settings__main-change__time-number" type="number" min="5" max="30" value="5" readonly>\n                <button class="settings__main-change__time-btn plus" type="button"><img src="assets/svg/plus.svg" alt="plus"></button>\n              </div>               \n            </div>\n          </div>\n        </div>\n      </div>\n    ',this.settings.innerHTML=this.screen,this.settngsBtn=this.settings.querySelector(".settngs__btn"),this.settings.classList.add("active"),this.volume=this.settings.querySelector("#volume"),this.volumeBtn=this.settings.querySelector(".volume__btn"),this.time=this.settings.querySelector("#time"),this.timeNumber=this.settings.querySelector(".settings__main-change__time-number"),this.minus=this.settings.querySelector(".minus"),this.plus=this.settings.querySelector(".plus"),this.settings.classList.add("active__page"),this.settngsBtn.addEventListener("click",this.goHome.bind(this)),this.volumeBtn.addEventListener("click",this.toggleSaunds.bind(this)),this.volume.addEventListener("input",this.saundValue.bind(this)),this.time.addEventListener("input",this.timeGame.bind(this)),this.minus.addEventListener("click",this.setTimeOfGame.bind(this)),this.plus.addEventListener("click",this.setTimeOfGame.bind(this)),this.setFromLocalStorage()}goHome(){this.settings.classList.add("deactivate__page"),this.settings.classList.remove("active__page"),setTimeout((()=>{this.settings.classList.remove("deactivate__page"),this.settings.classList.remove("active"),new _}),1e3)}toggleSaunds(){i?(i=!1,this.volumeBtn.style.backgroundImage="url('./assets/svg/sound-on.svg')",this.volume.removeAttribute("disabled"),this.volume.style.background=`linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${100*t}%, #A4A4A4 ${100*t}%, #A4A4A4 100%)`):(i=!0,this.volumeBtn.style.backgroundImage="url('./assets/svg/sound-off.svg')",this.volume.setAttribute("disabled","disabled"),this.volume.style.background=`linear-gradient(to right, #A4A4A4 0%, ${100*t}%, #A4A4A4 ${100*t}%, #A4A4A4 100%)`)}saundValue(){t=this.volume.value,this.volume.style.background=`linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${100*t}%, #A4A4A4 ${100*t}%, #A4A4A4 100%)`;const i=new Audio("./assets/audio/correct.mp3");i.volume=t,i.play(),console.log(t)}timeGame(){s=this.time.checked}setTimeOfGame(t){t.currentTarget===this.minus?+this.timeNumber.value>5&&(this.timeNumber.value=parseInt(this.timeNumber.value)-5,e=+this.timeNumber.value):t.currentTarget===this.plus&&+this.timeNumber.value<30&&(this.timeNumber.value=parseInt(this.timeNumber.value)+5,e=+this.timeNumber.value)}setFromLocalStorage(){a(),this.timeNumber.value=e,this.time.checked=s,i||(this.volumeBtn.style.backgroundImage="url('./assets/svg/sound-on.svg')",this.volume.removeAttribute("disabled"),this.volume.style.background=`linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${100*t}%, #A4A4A4 ${100*t}%, #A4A4A4 100%)`)}}}),1e3)}};new _})();