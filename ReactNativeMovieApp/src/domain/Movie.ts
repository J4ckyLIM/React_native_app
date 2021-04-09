export interface Movie {
  /**
   * Title of the movie
   */
  title: string;
  /**
   * Popularity of the movie
   */
  popularity: number;
  /**
   * Release date of the movie
   */
  releaseDate: string;
  /**
   * Description of the movie
   */
  description: string;
  /**
   * Rate of the movie (O to 10)
   */
  voteAverage: number;
  /**
   * Number of votes
   */
  voteCount: number;
  /**
   * Url of the poster
   */
  posterPath: string;
  /**
   * Url of the back poster
   */
  backPosterPath: string;
  /**
   * Id of the movie
   */
  id: number;
}
