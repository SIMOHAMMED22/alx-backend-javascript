function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Here you can perform asynchronous operations, such as fetching data from an API
        // For now, let's just resolve the Promise with a dummy response
        resolve("Dummy response from API");
    });
}

export default getResponseFromAPI;
