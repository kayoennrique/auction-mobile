import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Card from '../../../components/Card';

import { formatDecimalToReal } from '../../../business/formatters/coin';

export default function Bid({ id, valor, color }) {
  return <Card style={styles.card}>
    <View style={styles.input}>
      <FontAwesome5 name="hand-paper" size={24} color={color} />
      <Text style={styles.indetifier}>#{id}</Text>
    </View>
    <Text style={styles.bid}>{formatDecimalToReal(valor)}</Text>
  </Card>

}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 16,

    marginHorizontal: 16,
    marginVertical: 8,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indetifier: {
    fontSize: 14,
    marginLeft: 8,
    color: '#4A4A4A',
  },
  bid: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
  }
});
