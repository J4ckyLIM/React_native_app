import { NavigationInjectedProps } from 'react-navigation';
import React, { useCallback, useEffect, useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Card } from 'react-native-paper';

import { ScreenContainer } from '../components/layout/ScreenContainer';
import { styled, theme } from '../theme';
import { ArrowColor } from '../components/button/BackButton';
import { Movie } from '../../domain/Movie';
import { formatText } from '../../utils/text';
import { DescriptionText, SecondaryLabel } from '../components/label/Labels';

import { getMovieVideo } from './hooks/getMovieList';

const Container = styled.View`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  flex-direction: column;
  background-color: ${theme.colors.shadowColor};
`;

const TrailerVideoContainer = styled.View`
  width: 100%;
  max-height: 50%;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: ${theme.spacing.xs}px;
`;

const DescriptionContainer = styled.View`
  width: 100%;
  height: 60%;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-horizontal: ${theme.spacing.sm}px;
`;

const SecondaryInfoContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const TitleLabel = styled.Text`
  color: ${theme.colors.lightColor};
  font-family: ${theme.fontFamily.heavy};
  font-size: ${theme.fontSizes.large}px;
  position: absolute;
  left: 110;
`;
export const DetailsScreen = ({ navigation }: NavigationInjectedProps) => {
  const movie: Movie = navigation.getParam('movie');
  const [playing, setPlaying] = useState<boolean>(false);

  const [videoId, setVideoId] = useState<string>('');
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    } else {
      setPlaying(true);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    (async () => {
      const videoKey = await getMovieVideo(movie.id);
      setVideoId(videoKey);
    })();
  }, [movie]);

  return (
    <ScreenContainer
      mainViewProps={{
        style: {
          backgroundColor: theme.colors.inAppScreenBackroundColor,
          padding: theme.spacing.m,
        },
      }}
      headerTitle={'Detail'}
      showHeaderTitle={true}
      displayGoBackArrow={true}
      backArrowColor={ArrowColor.white}
      headerTitleColor={theme.colors.titleColor}>
      <Container>
        <TrailerVideoContainer>
          <YoutubePlayer
            height={250}
            width={'100%'}
            play={playing}
            videoId={videoId}
            onChangeState={onStateChange}
          />
          {!playing && (
            <>
              <Card.Cover
                source={{ uri: movie.posterPath }}
                style={{
                  position: 'absolute',
                  width: 85,
                  height: 120,
                  bottom: 55,
                  left: 20,
                }}
              />
              <TitleLabel>
                {formatText({ text: movie.title, maximumSize: 50 })}
              </TitleLabel>
            </>
          )}
        </TrailerVideoContainer>
        <DescriptionContainer>
          <DescriptionText>{movie.description}</DescriptionText>
          <SecondaryInfoContainer>
            <SecondaryLabel>Date: {movie.releaseDate}</SecondaryLabel>
            <SecondaryLabel>
              {movie.voteAverage}{' '}
              <SecondaryLabel>({movie.voteCount} votes)</SecondaryLabel>
            </SecondaryLabel>
          </SecondaryInfoContainer>
        </DescriptionContainer>
      </Container>
    </ScreenContainer>
  );
};
