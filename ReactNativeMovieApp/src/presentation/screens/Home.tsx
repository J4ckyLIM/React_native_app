import React, { useCallback, useEffect, useState } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import axios from 'axios';

import { Routes } from '../../routes';
import { MainButton } from '../components/button/Button';
import { Block } from '../components/layout/Block';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { theme } from '../theme';
import { Movie } from '../../domain/Movie';
import { MovieItemList } from '../components/card/MovieItemList';

import { getTopRatedMovie } from './hooks/getMovieList';

export const HomeScreen = ({ navigation }: NavigationInjectedProps) => {
  const navigateToDetails = useCallback(() => {
    navigation.navigate({ routeName: Routes.Details });
  }, [navigation]);

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    (async () => {
      const movieList = await getTopRatedMovie();
      setMovies(movieList);
    })();
  }, []);

  return (
    <ScreenContainer
      mainViewProps={{
        style: {
          backgroundColor: theme.colors.inAppScreenBackroundColor,
          padding: theme.spacing.m,
        },
      }}
      headerTitle={'Home'}
      showHeaderTitle={true}>
      <Block>
        <MainButton label={'Go to details'} onPress={navigateToDetails} />
        {movies.length > 0 &&
          movies.map(movie => (
            <MovieItemList movie={movie} key={movie.title} />
          ))}
      </Block>
    </ScreenContainer>
  );
};
