// import $ from 'jquery';
import Image from './image';

export default class Search {
  constructor (cat) {
    this.cat = cat;
    this.image = new Image();
    this.initEls();
    this.initEvents();
  }

  initEls () {
      this.$els = {
        input: document.querySelector('.js-select-input'), // Utilisation du querySelector car .addEventListener ne marche pas avec le $()
        button: document.querySelector('.js-select-button')
      };
    }

  initEvents () {
    this.$els.input.addEventListener('change', (event) => this.searchCat());
    this.$els.button.addEventListener('click', (event) => this.randomCat());
  }

  searchCat () {
    let breedId = this.$els.input.selectedIndex;
    this.cat.makeCat(undefined, breedId);
    let breedImg = this.cat.breedResponse[breedId].id;
    this.image.getImage(breedImg);
    console.log('BreedId :', breedId);
  }

  randomCat () {
    let breedId = Math.floor(Math.random() * (this.cat.breedResponse.length - 0 + 1) + 0);
    this.cat.makeCat(undefined, breedId);
    let breedImg = this.cat.breedResponse[breedId].id;
    this.image.getImage(breedImg);
    this.$els.input.selectedIndex = breedId;
    console.log('BreedId :', breedId);
  }
}
