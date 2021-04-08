import axios from 'axios';

import { Movie } from '../../../domain/Movie';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = 'b4d4c267aea648659aca8853a1f95666';

// export const getMovieList = ({ text }: { text?: string}) =>
//   useMemo(async () => {
//     const movieResponse = await axios.get(`${API_BASE_URL}/search/movie?api_key=${API_TOKEN}&language=en${text ? `&query=${text}` : ''}`)
//     console.log(movieResponse);
//     return movieResponse;
//   }, [text]);

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

        voteCount: movie.count,

        posterPath: movie.poster_path,
      };
    });
    return movies;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};
