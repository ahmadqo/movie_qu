import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMovies} from '../store/slices/movieSlice';
import {RootState, AppDispatch} from '../store';
import MovieList from '../components/organisms/MovieList';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {movies, loading, error} = useSelector(
    (state: RootState) => state.movies,
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) {
    return <Text style={styles.loading}>Loading. ..</Text>;
  }
  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>HALOOO</Text>
      {/* <MovieList movies={movies} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    textAlign: 'center',
    marginTop: 20,
  },
  error: {
    flex: 1,
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
});

export default HomeScreen;
