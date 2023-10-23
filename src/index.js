import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

const selectEl = document.querySelector('.breed-select');
const pLoaderEl = document.querySelector('p.loader-text');
const pErrorEl = document.querySelector('.error');
const divCatInfoEl = document.querySelector('.cat-info');
selectEl.addEventListener('change', changeName);

function addClassListHidden(element) {
    return element.classList.add('is-hidden');
}

function removeClassListHidden(element) {
    return element.classList.remove('is-hidden');
}

function addDomEl(name, description, temperament, life_span, origin, url) {
    const total = `<img class="cat-info-img" src="${url}">
            <div class="cat-info__box-name">
                <h2 class="box-name-title">${name}</h2>
                <p class="box-text">${description}</p>
                <p class="box-text"><span class="text">Temperament:</span>${temperament}</p>
                <p class="box-text"><span class="text">life span:</span>${life_span} year</p>
                 <p class="box-text"><span class="text">Country of Origin:</span>${origin}</p>
            </div>`;
            return divCatInfoEl.innerHTML = total;
};

function changeName() {
    const target = this.value;
    removeClassListHidden(pLoaderEl);
    addClassListHidden(divCatInfoEl);
    fetchCatByBreed(target)
        .then((data) => {
            const { name, description, temperament, life_span, origin } = data[0].breeds[0];;
            const { url } = data[0];
            const valid = pErrorEl.classList.contains('is-hidden');
            if (!valid) return addClassListHidden(pErrorEl);
            removeClassListHidden(divCatInfoEl);
            addDomEl(name, description, temperament, life_span, origin, url);    
            })
        .catch(() => {
            removeClassListHidden(pErrorEl);
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
        })
        .finally(() => {
            addClassListHidden(pLoaderEl)
        });
};

function getPetsList(data) {
    selectEl.innerHTML = data
        .map(({ name, id }) => `<option value="${id}">${name}</option>`).join('\n');
}

function resultFetchBreeds() {
    removeClassListHidden(pLoaderEl);
    fetchBreeds().then((data) => {
        getPetsList(data);
    }).catch((err) => {
            removeClassListHidden(pErrorEl);
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
        })
        .finally(() => {
            addClassListHidden(pLoaderEl)
        });
};


resultFetchBreeds();

// const result = data.map(({ name, id }) => {
//             return { text: name, value: id };
//         });
//         new SlimSelect({
//             select: '.breed-select',
//             data: result,
//             settings: {
//                 hideSelected: true,
//                 placeholderText: 'Choose a cat',
//             }
//         });