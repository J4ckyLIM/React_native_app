import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { Routes } from '../../routes';
import { Block } from '../components/layout/Block';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { theme } from '../theme';
import { Movie } from '../../domain/Movie';
import { MovieItemList } from '../components/card/MovieItemList';
import { SearchBar } from '../components/input/SearchBar';

import { getMoviesByTitle, getTopRatedMovie } from './hooks/getMovieList';

export const HomeScreen = ({ navigation }: NavigationInjectedProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const showMovieDetail = useCallback(
    (movieToDisplay: Movie) => {
      navigation.navigate(Routes.Details, { movie: movieToDisplay });
    },
    [navigation],
  );

  const searchMovieByTitle = useCallback(
    async (value: string) => {
      let movieListBis: Movie[];
      if (value !== '') {
        movieListBis = await getMoviesByTitle({ text: value });
      } else {
        movieListBis = await getTopRatedMovie();
      }
      setMovies(movieListBis);
    },
    [setMovies],
  );

  useEffect(() => {
    (async () => {
      const movieList = await getTopRatedMovie();
      setMovies(movieList);
    })();
  }, [setMovies]);

  return (
    <ScreenContainer
      mainViewProps={{
        style: {
          backgroundColor: theme.colors.inAppDarkScreenBackgroundColor,
          padding: theme.spacing.m,
        },
      }}
      headerTitle={'Home'}
      showHeaderTitle={true}
      headerTitleColor={'#FFFFFF'}>
      <SearchBar
        onChangeText={value => {
          searchMovieByTitle(value);
        }}
      />
      <Block marginTop={10}>
        {movies.length > 0 &&
          movies.map(movie => (
            <MovieItemList
              movie={movie}
              key={movie.id}
              onPress={mv => {
                showMovieDetail(mv);
              }}
            />
          ))}
      </Block>
    </ScreenContainer>
  );
};
