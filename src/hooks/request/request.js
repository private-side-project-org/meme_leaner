export default () => {
  const baseUrl = "http://localhost:8090/v1/memes/random";
  const response = fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => data);

  return response;
};
