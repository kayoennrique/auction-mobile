import React, { useState } from 'react';
import useListAuctions from '../../hooks/useListAuctions';

import { View, FlatList, StyleSheet } from 'react-native';
import Auction from './components/Auction';

export default function ListAuctions() {
  const [auctions, getAuctions] = useListAuctions();
  const [loading, setLoading] = useState(false);
  
  const updateList = async () => {
    setLoading(true);
    await getAuctions();
    setLoading(false);
  };

  return (
    <FlatList
      data={auctions}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <Auction {...item} />}
      onRefresh={updateList}
      refreshing={loading}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 8,
  },
});
