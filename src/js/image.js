import $ from 'jquery';

export default class Image {
    constructor () {
        this.initEls();
        this.initEvents();
    }
    initEls () {
    this.$els = {
      slider: document.querySelector('.js-carousel-item')
    };
    }

  initEvents () {

  }

  getImage (breedImg) {
    const api = {
      endpoint: 'https://api.thecatapi.com/v1/images/search',
      params: {
        'size': 'med',
        'format': 'json',
        'mime_types': 'jpg,png',
        'order': 'RANDOM',
        'page': '0',
        'limit': '6',
        // 'breed_id': breedImg,  ** La fonction de recherche d'image par race ne marche plus
        // (et renvoi un tableau vide) je récupère alors 6 image au hasard **
      },
      headers: {
        'x-api-key': '6fd4149d-29e6-4d59-841f-38d169943038',
        'Content-Type': 'application/json'
      }
    };

    $.getJSON(api.endpoint, api.params, api.headers)
      .then((imageResponse) => {
        console.log('Image array', imageResponse);
        this.makeSlider(imageResponse);
      })

      .catch((e) => {
        console.log('error', e);
      });
  }

  makeSlider (imageResponse) {
    let value = 0;
    let carouselInner = this.$els.slider;
    imageResponse.forEach((img) => {
      carouselInner = this.$els.slider.children[value];
      carouselInner.children[0].setAttribute('src', img.url);
      value++;
    });
  }
}
