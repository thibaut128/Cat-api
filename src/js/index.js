import '../scss/app.scss';
import 'bootstrap';
import Search from './search';
import Cat from './cat';
import Image from './image';

class App {
    constructor () {
        this.initApp();
    }
    initApp () {
      this.cat = new Cat();
      this.search = new Search(this.cat);
      this.image = new Image();
    }
}
new App();
