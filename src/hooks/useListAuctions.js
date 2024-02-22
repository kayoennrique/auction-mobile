import { useState, useEffect } from 'react';
import { getAuctions } from '../repository/auction';

export default function useListAuctions() {
  const [auctions, setAuctions] = useState([]);

  const updateAuctions = async () => {
    const auctionsUpdated = await getAuctions();
    setAuctions(auctionsUpdated);
  };

  useEffect(() => {
    updateAuctions();
  }, []);

  return [ auctions, updateAuctions ];
}