export const fetchBreeds = () => {
    const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
    const API_KEY = 'live_yhKx5EW7r5s5EKWButootd2z8zjtwxwBhL2KtG8Vaujfjusynd9eugh1xm5dCi7E';

return fetch(`${BASE_URL}?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
        throw new Error(response.statusText || 'Помилка');
    }
    return response.json();
})};

export const fetchCatByBreed = (breedId) => {
    const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
    const API_KEY = 'live_yhKx5EW7r5s5EKWButootd2z8zjtwxwBhL2KtG8Vaujfjusynd9eugh1xm5dCi7E';

    return fetch(`${BASE_URL}?breed_ids=${breedId}&${API_KEY}`).then((response) => {
        if (!response.ok) {
        throw new Error(response.statusText || 'Помилка');
    }
    return response.json();
    })
};