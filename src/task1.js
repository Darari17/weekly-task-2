const fetchData = (status) => {
  // promise: proses asynchronous yang bisa menghasilkan resolve dan reject
  return new Promise((resolve, reject) => {
    if (status) {
      setTimeout(() => {
        resolve("Data berhasil disimpan");
      }, 3000);
    } else {
      reject("Gagal mengambil data");
    }
  });
};

fetchData(true)
  // then: untuk menangani hasil promise jika resolve
  .then((response) => {
    return response;
  })
  .then((result) => {
    console.log(result);
  })
  // catch: untuk menangani hasil promise jika reject
  .catch((err) => {
    console.log(err);
  });

//async: membuat kode seolah-olah synchronous
const fetchDataAsync = async () => {
  // try: kode yang kemungkinan akan error
  try {
    // await: menunggu promise
    const response = await fetchData(true);
    console.log(response);
    // catch: menangani error dari blok kode try
  } catch (error) {
    console.log(error);
  }
};
