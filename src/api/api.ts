import axios from "axios";

const instance = axios.create({
    baseURL: 'http://hn.algolia.com/api/v1/',
    headers: {
        Accept: 'application/json',
    }
})

export const fetchHits = (query: string) => {
    const data = instance.get(`search`, {params: {query}})
        .then((response) => {
            console.log(response.data.hits)
            return response.data;
        });
    return data;
}