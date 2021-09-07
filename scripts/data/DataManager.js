let userCollection = [];

export const useUserCollection = () => {
    return [...userCollection];
}
export const getRandomUser = () => {
    return fetch('https://randomuser.me/api') 
    .then(response => response.json())
    .then(parsedResponse => {
        console.log("user info: ", parsedResponse)
        userCollection = parsedResponse.results
        return parsedResponse;
    })
} 