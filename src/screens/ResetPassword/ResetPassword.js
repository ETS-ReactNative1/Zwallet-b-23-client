/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './Style';
import Icon from 'react-native-vector-icons/Ionicons';

const ResetPassword = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Zwallet</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textLogin}>Reset Password</Text>
        <Text style={styles.descLogin}>
          Enter your Zwallet e-mail so we can send you a password reset link.
        </Text>
        <View style={styles.wrapperInput}>
          <Icon name="mail" style={styles.icon} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your e-mail"
            keyboardType="email-address"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        {/* <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('Create-Password')}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#6379F4'}]}
            onPress={() => props.navigation.navigate('Confirm-Otp')}>
            <Text style={[styles.buttonText, {color: 'white'}]}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ResetPassword;
