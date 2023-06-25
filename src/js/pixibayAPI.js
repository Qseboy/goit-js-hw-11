import axios from 'axios';

export default class PixibayAPI {
  #API_KEY = '37744661-08f3a379c0cffb6ec7b2d5f40';
  #BASE_URL = 'https://pixabay.com/api/';

  page = 0;
  per_page = 40;

  total_hits = null;
  query = null;

  async fetchPhotos() {
    this.page += 1;

    try {
      return await axios.get(
        `${this.#BASE_URL}?key=${this.#API_KEY}&q=${
          this.query
        }&image_type=photo&orientation=horizontal&safesearch=true&per_page=${
          this.per_page
        }&page=${this.page}`
      );
    } catch (err) {
      console.log(err);
    }
  }
}
