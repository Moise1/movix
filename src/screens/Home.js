import { useState, useEffect } from "react";
import { IMG_URL } from "@env";
import { StyleSheet, Dimensions, View, ScrollView } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTv,
  getFamilyMovies,
} from "../services";
import { List } from "../components/List";

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const device = Dimensions.get("screen");

  useEffect(() => {
    (async () => {
      setPopularMovies(await getPopularMovies());
      setUpcomingMovies(await getUpcomingMovies());
      setPopularTv(await getPopularTv());
      setFamilyMovies(await getFamilyMovies());
    })();
  }, []);

  const popularMoviesImgs = popularMovies?.map(
    ({ poster_path }) => `${IMG_URL}/t/p/w500${poster_path}`
  );

  return (
    <>
      <ScrollView>
        <View style={styles.sliderContainer}>
          <SliderBox
            images={popularMoviesImgs}
            autoPlay={true}
            circleLoop={true}
            sliderBoxHeight={device.height / 1.5}
            dotStyle={styles.dotStyle}
          />
        </View>
        <View style={styles.carousel}>
          <List data={popularMovies} title="Popular Movies" />
        </View>

        <View style={styles.carousel}>
          <List data={upcomingMovies} title="Upcoming Movies" />
        </View>

        <View style={styles.carousel}>
          <List data={popularTv} title="Popular TV Shows" />
        </View>

        <View style={styles.carousel}>
          <List data={familyMovies} title="Family Movies" />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  dotStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
