/**
 * function `handleResponse` takes promise and resolve regardless response is error or not.
 */

const handleResponse = (res) => {
  return new Promise((resolve, reject) => {
    // gets body of response by res.json() which parse body text as JSON.
    res.json().then((parsedData) => {
      if (!res.ok) {
        // return parsedData with reject to trigger `onError` in react-query
        return reject(parsedData);
      }

      // return parsedData with resolve to trigger `onSuccess` in react-query
      return resolve(parsedData);
    });
  });
};

/**
 * function `request` access meme_learner_api to mutate/query, and return response
 *
 * @param { string } uri
 * @param { object } option // fetch options e.g. method, body, headers etc...
 * @returns response // api response
 */

export default async (uri, option) => {
  const baseUrl = "http://localhost:8090";
  const response = fetch(`${baseUrl}${uri}`, option).then(handleResponse);

  return response;
};
