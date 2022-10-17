import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import { IMG_URL } from "@env";
import StarRating from "react-native-star-rating";
import { getMovie } from "../services";
import { PlayBtn } from "../components/PlayBtn";

const imgPlaceholder = require("../../assets/img-placeholder.png");

const { height } = Dimensions.get("screen");

export const Details = ({ route, navigation }) => {
  const { id } = route.params;
  const [movieDetails, setMovieDetails] = useState({});
  useEffect(() => {
    (async () => setMovieDetails(await getMovie(id)))();
  }, [id]);

  return (
    <>
      <ScrollView>
        <Image
          resizeMode="cover"
          style={styles.img}
          source={
            movieDetails.poster_path
              ? { uri: `${IMG_URL}/t/p/w500${movieDetails.poster_path}` }
              : imgPlaceholder
          }
        />

          <View style={styles.playBtnContainer}>
            <PlayBtn/>
          </View>

        <View style={styles.container}>

          <Text style={styles.title}>{movieDetails.title}</Text>
          {movieDetails.genres && (
            <View style={styles.genresContainer}>
              {movieDetails.genres.map(({ name, id }) => (
                <Text style={styles.genre} key={id}>
                  {name}
                </Text>
              ))}
            </View>
          )}
          <StarRating
            maxStars={5}
            rating={movieDetails.vote_average / 2}
          />
          <Text style={styles.overView}>{movieDetails.overview}</Text>

          <Text style={styles.relDate}>{`Release date: ${movieDetails.release_date}`}</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  img: {
    height: height / 2.5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  genresContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignContent: "center",
  },
  genre: {
    marginRight: 10,
    fontWeight: "bold",
  },
  ratingStars: {
    backgroundColor: "transparent",
  },
  relDate: {
    fontWeight: 'bold'
  },
  overView: {
    padding: 15,
  },
  playBtnContainer: {
     position: 'absolute',
     top: '42%',
     right: 20,
  }
});

// stopped at 5:55:04