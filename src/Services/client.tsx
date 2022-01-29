const client = async (url: string, customConfig={}) => {
  const fullUrl = `${process.env.REACT_APP_API_BASE_URL}/${url}`;

  return fetch(fullUrl, customConfig).then(async (response) => {
    if (response.ok) {
      const result = await response.json();
      return Promise.resolve(result);
    }
    if (response.status === 500) {
      return Promise.reject(new Error("Internal Server Error"));
    }
  });
};

export default client;
