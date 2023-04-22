import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

// imageurl: 画像のURL
// title: タイトル
// auther: 著者

export const  ListItem = (props) => {
  return (
      <TouchableOpacity style={styles.itemContainer} onPress={props.onPress}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: props.imageurl }}
          ></Image>
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>
            {props.title}
          </Text>
          <Text style={styles.subtext}>
            {props.auther}
          </Text>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 5,
  },
  leftContainer: {
    width: 100,
    backgroundColor: 'green',
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    textSize : 16,
  },
  subtext:{
    fontSize: 12,
    color: 'gray',
  }
});
