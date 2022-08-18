const getData = async (url) => {
  const result = await fetch(url)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('error getting data');
      }
      return response.json().then((data) => {
        return data;
      });
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};

export { getData };
