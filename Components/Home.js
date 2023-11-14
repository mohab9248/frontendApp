import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  useWindowDimensions,
  Image,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

function Home({navigation}) {
  const {width} = useWindowDimensions();

  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const Products_axios = async () => {
    const options = {
      method: 'GET',
      url: 'https://api.manoapp.com/api/v1/users/products/whats_new',
      headers: {
        StoreID: '4',
        Authorization: 'f44a4aabfc5992514d262d7f517327e7',
        UserAddressID: '60877',
      },
    };

    try {
      const response = await axios.request(options);

      setProducts(response.data.data.items);
      console.log(Products);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    Products_axios();
  }, []);

  if (loading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={index => index.id}
        data={Products.slice(0, 10)}
        contentContainerStyle={{marginBottom: '10px'}}
        renderItem={({item, index}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('details', {id: item.id});
            }}
            style={{
              width: 100,
              height: 160,
              margin: 5,
              flex: 1,
              padding: 2.5,
              borderRadius: 5,
              backgroundColor: index % 2 ? '#bdc3c7' : '#ecf0f1',
            }}>
            {item.images.map(index => {
              return (
                <Image
                  style={{
                    width: 95,
                    height: 95,
                    alignSelf: 'center',
                  }}
                  resizeMode="cover"
                  source={{uri: index.original}}
                />
              );
            })}
            <Text
              style={{fontSize: 15, fontWeight: 'bold'}}
              numberOfLines={2}
              ellipsizeMode="tail">
              {item.title}
            </Text>
            <Text numberOfLines={1}>
              {item.price}
              <Text style={{fontWeight: 'bold'}}>$</Text>
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

export default Home;
