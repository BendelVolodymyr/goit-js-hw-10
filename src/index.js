import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';


// console.log(fetchCatByBreed('abys'))

const selectEl = document.querySelector('.breed-select');
const pLoaderEl = document.querySelector('.loader');
const pErrorEl = document.querySelector('.error');
const divCatInfoEl = document.querySelector('.cat-info');

selectEl.addEventListener('change', test)

function test() {
    const target = this.value;
    return fetchCatByBreed(target).then((data) => {
        data.forEach(({ url, height, width}) => {
            const newDivEl = document.createElement('div');
            newDivEl.style.cssText = `
            background-image: url("${url}");
            height: ${height}px;
            width: ${width}px;`;
            return divCatInfoEl.append(newDivEl);
        })
        
    })
}
// 
fetchBreeds().then((data) => {
    let allCats = []; 
    new SlimSelect({
    select: '.breed-select',
    settings: {
    placeholderText: 'Choose a cat',
  }
});
    data.forEach(({name, id}) => {
        const newOptionEl = document.createElement('option');
        newOptionEl.textContent = name;
        newOptionEl.value = id;
        allCats.push(newOptionEl);
    });;
    return selectEl.append(...allCats);
});




// console.log(test);
