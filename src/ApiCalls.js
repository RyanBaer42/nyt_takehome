const API_KEY = process.env.REACT_APP_API_KEY

const fetchData = (category) => {
    let path;
    if (!category){
        path = 'science'
    } else {
        path = `${category}`
    }
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${path}.json?api-key=${API_KEY}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else if (response.status === 404) {
                throw new Error('404 Page not found');
            } else {
                throw new Error(`${response.status}`);
            }
        })
        .catch(error => {
            throw new Error(`: ${error.message}`);
        });
}

export default fetchData