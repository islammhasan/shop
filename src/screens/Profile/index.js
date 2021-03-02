import React, { useLayoutEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { MenuComponent } from '../../components';
import { Header } from '../../components/Header';
import { PrimaryInput } from '../../components/PrimaryInput';
import styles from './styles';

export const Profile = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return <MenuComponent />
      },
      headerTitle: null
    })
  }, [navigation])
  return (
    <>
      {/* <Header
        hasBack
        hasSearch
        onBackPress={() => alert('onBackPress')}
        onSearchPress={() => alert('onSearchPress')}
      /> */}
      <Text style={styles.screenTitle}>Profile</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <PrimaryInput customStyle={styles.inputStyle} text={'Name'} />
        <PrimaryInput customStyle={styles.inputStyle} text={'Address lane'} />
        <PrimaryInput customStyle={styles.inputStyle} text={'City'} />
        <PrimaryInput customStyle={styles.inputStyle} text={'Gender'} />
        <PrimaryInput customStyle={styles.inputStyle} text={'Email'} />
        <PrimaryInput
          keyboardType="phone-pad"
          customStyle={styles.inputStyle}
          text={'Phone Number'}
        />
      </ScrollView>
    </>
  );
};
