const url = "https://jsonplaceholder.typicode.com/users";

const fetchAPI = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("gagal mengambil data");
    }

    const result = await response.json();

    const data = [];
    for (const x in result) {
      const obj = {
        name: result[x].name,
        address: result[x].address.city,
      };

      data.push(obj);
    }

    const sortedAscendingData = data.sort((a, b) => {
      if (a.address < b.address) return -1;
      if (a.address > b.address) return 1;
      return 0;
    });

    console.log(sortedAscendingData);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

fetchAPI(url);
