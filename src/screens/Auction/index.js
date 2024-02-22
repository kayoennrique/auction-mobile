import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import useAuction from '../../hooks/useAuction';

import { FlatList, View, StyleSheet } from 'react-native';
import SendBid from './components/SendBid';
import Bid from './components/Bid';
import Top from './components/Top';


export default function Auction() {
  const route = useRoute();
  const [loading, setLoading] = useState(false);

  const id = route.params.id;
  const [ auction, getAuction, sendBid ] = useAuction(id);
  
  const newBid = async (valor) => {
    const stateBid = await sendBid(valor);
    if (stateBid.valid)
      await updateAuction();

    return stateBid;
  }

  const updateAuction = async () => {
    setLoading(true);
    await getAuction();
    setLoading(false);
  };

  if (!auction.name) {
    return <View />
  }

  return <>
    <FlatList
      data={auction.bids}
      keyExtractor={(auction) => auction.id}
      renderItem={({ item }) => <Bid {...item} color={auction.color} />}
      ListHeaderComponent={() => <Top {...auction} />}
      onRefresh={updateAuction}
      refreshing={loading}
      contentContainerStyle={styles.list}
    />
    <SendBid color={auction.color} sendBid={newBid} />
  </>
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 110,
  },
});
