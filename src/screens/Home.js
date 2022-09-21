import { useState, useEffect } from "react";
import { IMG_URL } from "@env";
import { StyleSheet, Dimensions, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { getPopularMovies } from "../services";
import { List } from "../components/List";

export const Home = () => {
  const [data, setData] = useState([]);
  const device = Dimensions.get("screen");

  useEffect(() => {
    (async () => {
      setData(await getPopularMovies());
    })();
  }, []);

  const moviesImgs = data?.map(
    ({ poster_path }) => `${IMG_URL}/t/p/w500${poster_path}`
  );

  return (
    <>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={moviesImgs}
          autoPlay={true}
          circleLoop={true}
          sliderBoxHeight={device.height / 1.5}
          dotStyle={styles.dotStyle}
        />
      </View>
      <View style={styles.carousel}>
        <List data={data} title="My List Component" />
      </View>
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
