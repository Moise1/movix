import { PureComponent } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { movieItem } from "../components/movieItem";

export class List extends PureComponent {
  render() {
    const { data, title } = this.props;
    return (
      <View style={styles.listContainer}>
        <View>
          <Text style={styles.txt}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={movieItem}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 25,
  },
  txt: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold",
    paddingBotom: 20,
  },
});
