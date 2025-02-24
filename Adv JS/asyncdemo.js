async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data fetched after 2 seconds");
        }, 2000);
    });
}

async function getData() {
    console.log("Fetching...");

    let dataPromise = fetchData(); // Start fetching but don't wait immediately

    let counter = 0;
    let interval = setInterval(() => {
        counter++;
        console.log(`Other task running... (${counter})`);
    }, 500); // Runs every 500ms

    let data = await dataPromise; // Now we wait for fetchData() to finish

    clearInterval(interval); // Stop the interval once fetchData() completes
    console.log(data); // Print fetched data
}

getData();
