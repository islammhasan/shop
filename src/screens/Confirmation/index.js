import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {images} from '../../assets';
import {Button} from '../../components/Button';
import styles from './styles';

export const Confirmation = ({navigation}) => {
  const [showIndicator, setShowIndicator] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={images.confirm} />
        <Text style={styles.heading}>Confirmation</Text>
        <Text style={styles.text}>
          You have successfully <Text>completed your payment procedure</Text>
        </Text>
      </View>
      <Button
        customStyle={styles.backHomeBtn}
        title="Back to Home"
        textCustomStyle={styles.btnText}
        onPress={() => navigation.navigate('Home')}
      />
    </>
  );
};
