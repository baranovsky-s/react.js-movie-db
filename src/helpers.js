import { URL_IMAGE } from "./api";

const getCastImage = path => {
  return path
    ? `${URL_IMAGE}/w138_and_h175_face/${path}`
    : "/static/images/placeholder_138x175.jpg";
};

const getMovieImage = path => {
  return path
    ? `${URL_IMAGE}/w200/${path}`
    : "/static/images/placeholder_200x200.jpg";
};

const getBackdropImage = path => {
  return path
    ? `${URL_IMAGE}/w1400_and_h450_face/${path}`
    : "/static/images/placeholder_1400x450.jpg";
};

export { getCastImage, getMovieImage, getBackdropImage };
