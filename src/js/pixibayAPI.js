import axios from 'axios';

export default class PixibayAPI {
  #API_KEY = '37744661-08f3a379c0cffb6ec7b2d5f40';
  #BASE_URL = 'https://pixabay.com/api/';

  async fetchPhotos(search) {
    return await axios.get(
      `${this.#BASE_URL}?key=${
        this.#API_KEY
      }&q=${search}&image_type=photo&orientation=horizontal&safesearch=true`
    );
  }
}
