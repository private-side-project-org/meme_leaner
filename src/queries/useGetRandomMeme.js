import { useQuery } from "react-query";
import request from "hooks/request/request";
import { QUERY_KEYS } from "utils/constants";

const { MEME } = QUERY_KEYS;

const getRandomMeme = async () => {
  console.log("called", request);
  const response = await request("/v1/memes/random", {
    method: "GET",
  });

  console.log("response", response);

  return response;
};

// need error handling once BE implement it
export default (isButtonPressed) => {
  const {
    data,
    isLoading,
    refetch: refetchRandomMeme,
  } = useQuery(MEME, getRandomMeme, {
    enabled: isButtonPressed,
  });

  return {
    scrapedMeme: data?.scrapedMeme,
    isLoading,
    refetchRandomMeme,
  };
};
