import axios from 'axios';

import { Movie } from '../../../domain/Movie';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = 'b4d4c267aea648659aca8853a1f95666';
const API_IMAGE_URL = 'https://image.tmdb.org/t/p/w1280';

export const getMoviesByTitle = async ({
  text,
}: {
  text: string;
}): Promise<Movie[]> => {
  try {
    const movieResponse = await axios.get(
      `${API_BASE_URL}/search/movie?api_key=${API_TOKEN}&language=en&query=${text}
      }`,
    );
    const movies: Movie[] = movieResponse.data.results.map(movie => {
      return {
        title: movie.title,
        popularity: movie.popularity,
        releaseDate: movie.release_date,
        description: movie.overview,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
        posterPath: API_IMAGE_URL + movie.poster_path,
        backPostPath: API_IMAGE_URL + movie.backdrop_path,
        id: movie.id,
      };
    });
    return movies;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

export const getTopRatedMovie = async (): Promise<Movie[]> => {
  try {
    const movieResponse = await axios.get(
      `${API_BASE_URL}/movie/top_rated?api_key=${API_TOKEN}&language=en-US`,
    );
    const movies: Movie[] = movieResponse.data.results.map(movie => {
      return {
        title: movie.title,
        popularity: movie.popularity,
        releaseDate: movie.release_date,
        description: movie.overview,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
        posterPath: API_IMAGE_URL + movie.poster_path,
        backPostPath: API_IMAGE_URL + movie.backdrop_path,
        id: movie.id,
      };
    });
    return movies;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

export const getMovieVideo = async (id: number): Promise<string> => {
  try {
    const videoResponse = await axios.get(
      `${API_BASE_URL}/movie/${id}/videos?api_key=${API_TOKEN}`,
    );
    let defaultVideoId = 'gAbi2_n8_Mw';
    if (videoResponse.data.results && videoResponse.data.results.length > 0) {
      defaultVideoId = videoResponse.data.results[0].key;
    }
    return defaultVideoId;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};
