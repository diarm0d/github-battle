export function fetchPopularRepos(language) {
    console.log('entered')
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

    return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
        if (!data.items) {
            throw new Error(data.message)
        }
        console.log(data.items, "returning");
        return data.items
    })
}