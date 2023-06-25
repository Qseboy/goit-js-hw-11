import Notiflix from 'notiflix';
import PixibayAPI from './js/pixibayAPI';

// Установка пути к шаблонам представлений

const formEl = document.querySelector('.search-form');
const divEl = document.querySelector('.gallary');

const pixiInstance = new PixibayAPI();

formEl.addEventListener('submit', async event => {
  event.preventDefault();

  const inputValue = event.target.firstElementChild.value;

  // check input value
  if (!inputValue) {
    Notiflix.Notify.failure('Input is empty');
    return;
  }

  console.log(await pixiInstance.fetchPhotos(inputValue));
});

/* <div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>; */

// axios.get(
//   ${BASE_URL}?key=${API_KEY}&q=cats&image_type=photo&orientation=horizontal&safesearch=true
// );

// const fetchPhotos = async () => {
//   try {
//     const response = await axios.get(
//       ${BASE_URL}?key=${API_KEY}&q=cats&image_type=photo&orientation=horizontal&safesearch=true
//     );
//     return await response.data;
//   } catch (err) {
//     console.log(err);
//   }
// };

//"Sorry, there are no images matching your search query. Please try again."
