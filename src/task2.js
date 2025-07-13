const getDataFromServer = (status, callback) => {
  if (status) {
    setTimeout(() => {
      const products = ["Product 1", "Product 2", "Product 3"];
      callback(products, null);
    }, 3000);
  } else {
    const err = new Error("Failed to fetch data");
    callback(null, err);
  }
};

const processData = (items, err) => {
  try {
    if (items == null) {
      throw new Error(err);
    }
    console.log(items);
  } catch (error) {
    if (error instanceof Error) {
      // message dari err
      console.log(error.message);
    }
  }
};

getDataFromServer(true, processData);
