import React from 'react';
import { Card } from 'react-native-paper';

import { Movie } from '../../../domain/Movie';
import { formatText } from '../../../utils/text';
import { styled } from '../../theme';
import { SecondaryLabel, TitleLabel } from '../label/Labels';
import { ColumnContainer, RowContainer } from '../layout/Containers';
import { VerticalSpacer } from '../layout/Spacer';

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

const VoteContainer = styled.View`
  width: 32px;
  height: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondaryTextColor};
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  margin-right: ${({ theme }) => theme.spacing.xs}px;
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
      <RowContainer isCentered={false} spaceBetween={false}>
        <ColumnContainer>
          <TitleLabel>
            {formatText({ text: movie.title, maximumSize: 35 })}
          </TitleLabel>
          <VerticalSpacer spacing={15} />
          <SecondaryLabel>({movie.releaseDate})</SecondaryLabel>
        </ColumnContainer>
        <VoteContainer>
          <TitleLabel isCenter={true}>{movie.voteAverage}</TitleLabel>
        </VoteContainer>
      </RowContainer>
    </Container>
  );
};
