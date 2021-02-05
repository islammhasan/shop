import React, {useState} from 'react';
import {Text, View, FlatList, Image, ScrollView} from 'react-native';
import {Header} from '../../components/Header';
import {Button} from '../../components/Button';
import styles from './styles';
import {images} from '../../assets';

export const Payment = () => {
  const [showIndicator, setShowIndicator] = useState(false);
  return (
    <>
      <Header
        hasBack
        hasSearch
        onBackPress={() => alert('onBackPress')}
        onSearchPress={() => alert('onSearchPress')}
      />
      <Text style={styles.screenTitle}>Payment</Text>
      <ScrollView>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          keyExtractor={(item) => item.id}
          horizontal
          data={DATA}
          renderItem={({item}) => {
            return (
              <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={item.url} />
              </View>
            );
          }}
        />
        <View style={styles.paymentDetails}>
          <View style={styles.paymentText}>
            <Text numberOfLines={1} style={styles.title}>
              Subtotal
            </Text>
            <Text numberOfLines={1} style={styles.value}>
              $160.00
            </Text>
          </View>
          <View style={styles.paymentText}>
            <Text numberOfLines={1} style={styles.title}>
              Discount
            </Text>
            <Text numberOfLines={1} style={styles.value}>
              5%
            </Text>
          </View>
          <View style={styles.paymentText}>
            <Text numberOfLines={1} style={styles.title}>
              Shipping
            </Text>
            <Text numberOfLines={1} style={styles.value}>
              $10
            </Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.paymentText}>
            <Text numberOfLines={1} style={styles.title}>
              Total
            </Text>
            <Text numberOfLines={1} style={styles.value}>
              $162.00
            </Text>
          </View>
        </View>
      </ScrollView>
      <Button
        customStyle={styles.addCardBtn}
        title="Add Card"
        textCustomStyle={styles.addCardText}
        isLoading={showIndicator}
        disableBtn={showIndicator}
        onPress={() => alert('Add new card!')}
      />
      <Button
        customStyle={styles.checkoutBtn}
        title="Checkout"
        isLoading={showIndicator}
        disableBtn={showIndicator}
        onPress={() => setShowIndicator(!showIndicator)}
      />
    </>
  );
};

const DATA = [
  {
    id: '1',
    url: images.visa,
  },
  {
    id: '2',
    url: images.visa,
  },
  {
    id: '3',
    url: images.visa,
  },
];
