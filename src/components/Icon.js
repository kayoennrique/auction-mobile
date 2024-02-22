import React from 'react';

import { View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Icon({ name, color, style }) {
  const styles = functionStyles(color);

  return <View style={[styles.bottom, style]}>
    <FontAwesome5 name={name || "question"} size={48} color='#ffffff' />
  </View>
}

const functionStyles = (color) => StyleSheet.create({
  bottom: {
    backgroundColor: color || '#093366',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});