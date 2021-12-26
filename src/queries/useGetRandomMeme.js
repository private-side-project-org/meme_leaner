import { useQuery } from "react-query";
import request from "hooks/request/request";
import { QUERY_KEYS } from "utils/constants";

const { MEME } = QUERY_KEYS;

const getRandomMeme = () => {
  const response = request();

  return response;
};

// need error handling once BE implement it
export default (isButtonPressed) => {
  const { data, isLoading } = useQuery(MEME, getRandomMeme, {
    enabled: isButtonPressed,
  });

  return {
    scrapedMeme: data?.scrapedMeme,
    isLoading,
  };
};
