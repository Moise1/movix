import { PureComponent } from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export class PlayBtn extends PureComponent {
  state = {};
  render() {
    return (
      <Pressable style={styles.btn}>
        <Icon 
         name={"play-circle-outline"}
         size={30} 
         color={'#fff'}
         />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    alignContent: "center",
    borderRadius: 50,
    width: 50,
    padding: 10,
    backgroundColor: "#4481FC",
  },
});
