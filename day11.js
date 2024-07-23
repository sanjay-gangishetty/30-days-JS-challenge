// Activity 1 - Understanding Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});
promise.then((msg) => console.log(msg));

var promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rejected after 2 seconds"));
  }, 2000);
});
promise2.catch((err) => console.log(err));

// Activity 2 - Chaining Promises
const fetchData1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data 1 fetched");
    }, 1000);
  });
};

const fetchData2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data 2 fetched");
    }, 1000);
  });
};

const fetchData3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data 3 fetched");
    }, 1000);
  });
};

const fetchData4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data 4 fetched");
    }, 1000);
  });
};

fetchData1()
  .then((msg) => {
    console.log(msg);
    return fetchData2();
  })
  .then((msg) => {
    console.log(msg);
    return fetchData3();
  })
  .then((msg) => {
    console.log(msg);
    return fetchData4();
  })
  .then((msg) => console.log(msg))
  .catch((err) => console.log("Error : " + err));

// Activity 3 - Using Async/Await
const logResolvedResult = async () => {
  var res = await fetchData1();
  console.log("Result is : " + res);
};

logResolvedResult();

function promiseReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise is rejected");
    }, 1000);
  });
}

const handleRejectedPromise = async () => {
  try {
    var result = await promiseReject();
  } catch (e) {
    console.log("Result of handled rejected promise is : " + e);
  }
};
handleRejectedPromise();

// Activity 4 - Fetch data from an API
fetch(
  "https://newsapi.org/v2/everything?q=tesla&from=2024-06-23&sortBy=publishedAt&apiKey=6121fe41980d4f2a95f6baf7534a3643",
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Total results are : " + data.totalResults);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

const fetchData = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2024-06-23&sortBy=publishedAt&apiKey=6121fe41980d4f2a95f6baf7534a3643",
  );
  const data = await response.json();
  console.log(
    "From async function -> Total results are : " + data.totalResults,
  );
};
fetchData();

// Activity 5 - Concurrent Promises
promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 200);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3000);
});

Promise.all([fetchData1(), promise2, promise3])
  .then((values) => {
    console.log("All promises resolved:", values);
  })
  .catch((error) => {
    console.error("One or more promises rejected:", error);
  });

Promise.race([fetchData1(), promise2, promise3])
  .then((value) => {
    console.log("From promise race : " + value);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
