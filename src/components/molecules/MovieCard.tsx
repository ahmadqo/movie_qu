import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MoviePoster from '../atoms/MoviePoster';
import {useMovieContext} from '../../context/MovieContext';

interface MovieCardProps {
  title: string;
  posterPath: string;
  voteAverage: number;
  id: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterPath,
  voteAverage,
  id,
}) => {
  const {addFavorite} = useMovieContext();

  return (
    <View style={styles.card}>
      <MoviePoster posterPath={posterPath} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.rating}>⭐ {voteAverage}</Text>
      <Button
        title="Add to Favorites"
        onPress={() =>
          addFavorite({
            id,
            title,
            poster_path: posterPath,
            vote_average: voteAverage,
            overview: '',
            release_date: '',
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rating: {
    marginTop: 4,
    color: 'gray',
  },
});

export default MovieCard;
