import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { ListItem } from '../components/ListItem';
// import dummyarticles from './dummies/article.json';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Constants } from 'expo-constants';

const URL = "https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=cc5ab85463304dfd91b44a63b5b19046" 

export const HomeScreen = ({navigation}) => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try
    {
      const response = await axios.get(URL)
      // console.log(response);
      setArticles(response.data.articles);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchArticles();
  }, []);
  
  return (
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <ListItem imageurl={item.urlToImage} title={item.title} auther={item.author} onPress={() => navigation.navigate("Article", {article: item})}/>
        )}
        keyExtractor={(item, index) => index.toString()}
      >
      </FlatList>
  );
}

const styles = StyleSheet.create({ container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: 'white',
    flexDirection: 'row',
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
