import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import MovieCard from '../molecules/MovieCard';
import {Movie} from '../../types/movie';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({movies}) => (
  <FlatList
    data={movies}
    keyExtractor={item => item.id.toString()}
    renderItem={({item}) => (
      <MovieCard
        id={item.id}
        title={item.title}
        posterPath={item.poster_path}
        voteAverage={item.vote_average}
      />
    )}
    contentContainerStyle={styles.list}
  />
);

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
});

export default MovieList;
