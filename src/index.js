import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

const selectEl = document.querySelector('.breed-select');
const pLoaderEl = document.querySelector('.loader');
const pErrorEl = document.querySelector('.error');
const divCatInfoEl = document.querySelector('.cat-info');


selectEl.addEventListener('change', changeName)

let result = [];

function addClassListHidden(element) {
    return element.classList.add('is-hidden');
}

function removeClassListHidden(element) {
    return element.classList.remove('is-hidden');
}

function changeName() {
    const target = this.value;
    return fetchCatByBreed(target)
        .then((data) => {
            const { name, description, temperament, life_span, origin } = data[0].breeds[0];;
            const { url } = data[0];
            const valid = pErrorEl.classList.contains('is-hidden');
            if (valid == false) return addClassListHidden(pErrorEl); 
            removeClassListHidden(pLoaderEl);
            addClassListHidden(divCatInfoEl);
            setTimeout(() => {
                removeClassListHidden(divCatInfoEl);
                const total = `<img class="cat-info-img" src="${url}">
            <div class="cat-info__box-name">
                <h2 class="box-name-title">${name}</h2>
                <p class="box-text">${description}</p>
                <p class="box-text"><span class="text">Temperament:</span>${temperament}</p>
                <p class="box-text"><span class="text">life span:</span>${life_span} year</p>
                 <p class="box-text"><span class="text">Country of Origin:</span>${origin}</p>
            </div>`;
            return divCatInfoEl.innerHTML = total;
            }, 5000);
            
        }
        )
        .catch((err) => {
            
            removeClassListHidden(pErrorEl);
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
        })
        .finally(setTimeout(() => {
            addClassListHidden(pLoaderEl);
     }, 5000));
};

fetchBreeds().then((data) => {
    
    data.forEach(({ name, id }) => {
      result.push({ text: name, value: id });
        
    });
     return  new SlimSelect({
        select: '.breed-select',
        data: result,
    settings: {
        hideSelected: true,
        placeholderText: 'Choose a cat',
  }
});
});
