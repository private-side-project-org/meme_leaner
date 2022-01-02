export default async (uri, option) => {
  const baseUrl = "http://localhost:8090/";
  console.log("baseurl", baseUrl);
  console.log("uri", uri);
  const response = await fetch(`${baseUrl}${uri}`, option)
    .then((res) => res.json())
    .then((data) => data);

  return response;
};
