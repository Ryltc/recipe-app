import React from 'react';
import { View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';

const TimerAlarm = ({ onClose }) => {
  return (
    <Modal isVisible={true}>
      <View>
        <Text>Timer Expired!</Text>
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default TimerAlarm;

