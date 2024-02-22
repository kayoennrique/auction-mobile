import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from '../../../components/Icon';
import Card from '../../../components/Card';

import { formatDecimalToReal } from '../../../business/formatters/coin';

export default function Auction({ id, name, initialValue, icon, color }) {
  const navigation = useNavigation();

  return (
    <Card 
      onPress={() => navigation.navigate('Leilao', { id })}
      style={styles.card}
      Component={TouchableOpacity}
    >
      <Icon color={color} name={icon} style={styles.top} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.amount}>
          <Text style={styles.captionBid}>Valor Inicial</Text>
          <Text style={styles.valueBid}>{formatDecimalToReal(initialValue)}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  top: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  info: {
    padding: 8,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 18,
    color: '#4A4A4A',
  },
  amount: {
    alignItems: 'flex-end',
  },
  captionBid: {
    fontSize: 14,
    color: '#4A4A4A',
  },
  valueBid: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
  }
});