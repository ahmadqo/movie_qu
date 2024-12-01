import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface MoviePosterProps {
  posterPath: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({posterPath}) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <Image
      source={{uri: `${IMAGE_BASE_URL}${posterPath}`}}
      style={styles.poster}
    />
  );
};

const styles = StyleSheet.create({
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
});

export default MoviePoster;
