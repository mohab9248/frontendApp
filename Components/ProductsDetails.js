import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

function ProductsDetails() {
  const {
    params: {id},
  } = useRoute();

  axios.get;
  return (
    <View>
      <Text>DetailsPage</Text>
    </View>
  );
}

export default ProductsDetails;
