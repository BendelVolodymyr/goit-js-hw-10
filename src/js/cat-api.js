const API_KEY = 'live_yhKx5EW7r5s5EKWButootd2z8zjtwxwBhL2KtG8Vaujfjusynd9eugh1xm5dCi7E';

export const fetchBreeds = () => {
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const END_POINT = '/breeds';
    const params = new URLSearchParams({
        api_key: API_KEY,
    })

return fetch(`${BASE_URL}${END_POINT}?${API_KEY}`).then(response => {
    if (!response.ok) {
        throw new Error(response.statusText || 'Помилка');
    }
    return response.json();
})};

export const fetchCatByBreed = (breedId) => {
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const END_POINT = '/images/search';
    const params = new URLSearchParams({
        breed_ids: breedId,
        api_key: API_KEY,    
    })

    return fetch(`${BASE_URL}${END_POINT}?${params}`).then((response) => {
        if (!response.ok) {
        throw new Error(response.statusText || 'Помилка');
    }
    return response.json();
    })
};