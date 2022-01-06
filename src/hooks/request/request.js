/**
 * function `request` access meme_learner_api to mutate/query, and return response
 *
 * @param { string } uri
 * @param { object } option // fetch options e.g. method, body, headers etc...
 * @returns response // api response
 */

export default async (uri, option) => {
  const baseUrl = "http://localhost:8090/";
  const response = await fetch(`${baseUrl}${uri}`, option)
    .then((res) => res.json())
    .then((data) => data);

  return response;
};
