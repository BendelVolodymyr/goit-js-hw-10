export const fetchBreeds = () => {
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const API_KEY = 'live_yhKx5EW7r5s5EKWButootd2z8zjtwxwBhL2KtG8Vaujfjusynd9eugh1xm5dCi7E';

return fetch(`${BASE_URL}/breeds?${API_KEY}`).then(response => {
    if (!response.ok) {
        throw new Error(response.statusText || 'Помилка');
    }
    return response.json();
}).then(data => {
    return data;
})
};

export const fetchCatByBreed = (breedId) => {

};