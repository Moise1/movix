import { PureComponent } from "react";
import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { IMG_URL } from "@env";
const imgPlaceholder = require("../../assets/img-placeholder.png");

export class Card extends PureComponent {
  render() {
    const { item, navigation } = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(
          "Details", {
          id: item.id
        })}
        style={styles.cardContainer}
      >
        <Image
          resizeMode="cover"
          style={styles.img}
          source={
            item.poster_path
              ? { uri: `${IMG_URL}/t/p/w500${item.poster_path}` }
              : imgPlaceholder
          }
        />
        {!item.poster_path && (
          <Text style={styles.movieTitle}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 5,
    position: "relative",
    alignItems: "center",
    height: 200,
  },
  img: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieTitle: {
    position: "absolute",
    width: 100,
    top: 10,
    textAlign: "center",
  },
});
