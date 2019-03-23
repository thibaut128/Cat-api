import $ from 'jquery';
import Image from './image';

export default class Cat {
    constructor () {
        this.image = new Image();
        this.initEls();
        this.initEvents();
    }
    initEls () {
    this.$els = {
        description: $('.js-cat-description'),
        temperament: $('.js-cat-temperament'),
        origin: $('.js-cat-origin'),
        weight: $('.js-cat-weight'),
        lifespan: $('.js-cat-lifespan'),
        select: $('.js-select-input')
      };
    }

  initEvents () {
    this.getBreed();
  }

  getBreed () {
    const api = {
      endpoint: 'https://api.thecatapi.com/v1/breeds/',
      headers: {
        'x-api-key': '6fd4149d-29e6-4d59-841f-38d169943038',
      }
    };

    $.getJSON(api.endpoint, api.params, api.headers)
      .then((breedResponse) => {
        this.breedResponse = breedResponse;
        let breedId = Math.floor(Math.random() * (breedResponse.length - 0 + 1) + 0);
        console.log('All breeds info array', breedResponse);
        this.makeSelect(breedResponse);
        this.makeCat(breedResponse, breedId);
        this.image.getImage(breedResponse);
      })

      .catch((e) => {
        console.log('error', e);
      });
  }

  makeSelect (breedResponse) {
    let value = 0;
    breedResponse.forEach((name) => {
      let $group = ('<option value="' + value + '">' + name.name + '</option>');
      this.$els.select.append($group);
      value++;
    });
  }

  makeCat (breedResponse = this.breedResponse, breedId) {
    let description = breedResponse[breedId].description;
    let temperament = breedResponse[breedId].temperament;
    let origin = breedResponse[breedId].origin;
    let weight = breedResponse[breedId].weight.metric;
    let lifespan = breedResponse[breedId].life_span;
      console.log('Description :', description);
      console.log('Temperament :', temperament);
      console.log('Origin :', origin);
      console.log('Weight :', weight);
      console.log('Lifespan :', lifespan);

    this.$els.description.html(description);
    this.$els.temperament.html(temperament);
    this.$els.origin.html(origin);
    this.$els.weight.html(weight + ' kg');
    this.$els.lifespan.html(lifespan + ' years');
  }
}
