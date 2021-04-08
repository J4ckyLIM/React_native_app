export interface Movie {
  /**
   * Title of the movie
   */
  title: string;

  popularity: number;

  releaseDate: string;

  description: string;

  voteAverage: number;

  voteCount: number;

  posterPath: string;

  backPosterPath: string;

  id: number;
}
