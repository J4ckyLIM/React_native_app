import React from 'react';
import { Card } from 'react-native-paper';

import { Movie } from '../../../domain/Movie';
import { styled } from '../../theme';

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  border: 1px solid black;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.shadowColor};
`;

const Thumbnail = styled.View`
  width: 80px;
  height: 95px;
`;

const InfoContainer = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  flex-direction: row;
`;

const DescriptionContainer = styled.View`
  width: 72%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 7px;
`;

const VoteContainer = styled.View`
  width: 32px;
  height: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.borderColor};
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  margin-right: ${({ theme }) => theme.spacing.xs}px;
`;

const VoteLabel = styled.Text`
  color: #ffffff;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.heavy};
  font-size: ${({ theme }) => theme.fontSizes.large}px;
`;

const TitleLabel = styled.Text`
  color: #ffffff;
  font-family: ${({ theme }) => theme.fontFamily.heavy};
  font-size: ${({ theme }) => theme.fontSizes.large}px;
`;

const DateLabel = styled.Text`
  color: ${({ theme }) => theme.colors.inputPlaceholder};
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.fontSizes.normal}px;
`;

export const MovieItemList = ({
  movie,
  onPress,
}: {
  movie: Movie;
  onPress: (movie: Movie) => void;
}) => {
  return (
    <Container onPress={() => onPress(movie)}>
      <Thumbnail>
        <Card.Cover
          source={{ uri: movie.posterPath }}
          style={{ height: '100%' }}
        />
      </Thumbnail>
      <InfoContainer>
        <DescriptionContainer>
          <TitleLabel>{movie.title}</TitleLabel>
          <DateLabel>({movie.releaseDate})</DateLabel>
        </DescriptionContainer>
        <VoteContainer>
          <VoteLabel>{movie.voteAverage}</VoteLabel>
        </VoteContainer>
      </InfoContainer>
    </Container>
  );
};
