function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate an API call or any asynchronous operation
        setTimeout(() => {
            // Resolve the Promise with a dummy response
            resolve("Response from API");
        }, 2000); // Simulating a delay of 2 seconds
    });
}

export default getResponseFromAPI;
