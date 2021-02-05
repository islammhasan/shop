import React, {useState} from 'react';
import {Text, ScrollView} from 'react-native';
import {Header} from '../../components/Header';
import {Button} from '../../components/Button';
import {PrimaryInput} from '../../components/PrimaryInput';
import styles from './styles';

export const CreateAddress = () => {
  const [showIndicator, setShowIndicator] = useState(false);
  return (
    <>
      <Header
        hasBack
        hasSearch
        onBackPress={() => alert('onBackPress')}
        onSearchPress={() => alert('onSearchPress')}
      />
      <Text style={styles.screenTitle}>CreateAddress</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <PrimaryInput customStyle={styles.inputStyle} text={'Name'} />
        <PrimaryInput customStyle={styles.inputStyle} text={'Address lane'} />
        <PrimaryInput customStyle={styles.inputStyle} text={'City'} />
        <PrimaryInput customStyle={styles.inputStyle} text={'Postal Code'} />
        <PrimaryInput
          keyboardType="phone-pad"
          customStyle={styles.inputStyle}
          text={'Phone Number'}
        />
      </ScrollView>
      <Button
        customStyle={styles.buttonStyle}
        title="Add Address"
        isLoading={showIndicator}
        disableBtn={showIndicator}
        onPress={() => setShowIndicator(!showIndicator)}
      />
    </>
  );
};
