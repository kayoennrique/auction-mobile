import React from 'react';

import { Text, View, StyleSheet } from 'react-native';
import Icon from '../../../components/Icon';

import { formatDecimalToReal } from '../../../business/formatters/coin';
import { formatHighestBidOfAuction } from '../../../business/formatters/bind';

export default function Top({ name, description, bids, initialValue, color, icon }) {
  const biggestBind = formatHighestBidOfAuction(bids, initialValue);

  return <>
    <Icon color={color} name={icon} style={styles.top} />
    <View style={styles.info}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.summary}>
        <View style={styles.melhorLance}>
          <Text style={styles.captionBid}>Melhor Lance</Text>
          <Text style={styles.valueBid}>{formatDecimalToReal(biggestBind)}</Text>
        </View>
        <View style={styles.divisor} />
        <View style={styles.initialBid}>
          <Text style={styles.captionBid}>Valor Inicial</Text>
          <Text style={styles.valueBid}>{formatDecimalToReal(initialValue)}</Text>
        </View>
      </View>
    </View>
  </>    
}

const styles = StyleSheet.create({
  top: {
    paddingTop: 48,
    paddingBottom: 48 + 24,
  },
  info: {
    flex: 1,
    marginTop: -24,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,

    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    color: '#4A4A4A',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',

    borderRadius: 8,
    
    backgroundColor: '#F3F2F2',

    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  captionBid: {
    fontSize: 14,
    color: '#4A4A4A',
  },
  valueBid: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  divisor: {
    width: 1,
    backgroundColor: '#e6e6e6',
  },
  initialBid: {
    alignItems: 'flex-end',
  },
});