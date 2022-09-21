import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getPopularMovies } from "../services";
import { SliderBox } from "react-native-image-slider-box";
import { IMG_URL } from "@env";

import React from "react";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => setData(await getPopularMovies()))();
  }, []);

  const moviesImgs = data?.map((m) => `${IMG_URL}/t/p/w500${m?.poster_path}`);
  return (
    <View style={styles.container}>
      <SliderBox images={moviesImgs} autoPlay={true} circleLoop={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
