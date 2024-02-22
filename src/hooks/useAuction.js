import { useState, useEffect } from 'react';
import { getAuction } from '../repository/auction';
import { addBind, getBidsFromAuction } from '../repository/bid';
import { validBind, validateBindNumericFormat } from '../business/validators/bind';
import { formatBrazilianToDecimal } from '../business/formatters/coin';
import { VALID, NOT_SENT, SENT } from '../business/constants/statesBind';

export default function useAuction(id) {
  const [auction, setAuction] = useState({});

  const updateAuction = async () => {
    const auctionUpdated = await getAuction(id);
    const bidsUpdated = await getBidsFromAuction(id);
    setAuction({ ...auctionUpdated, bids: bidsUpdated });
  };
  
  const sendBid = async (valor) => {
    const stateFormatLance = validateBindNumericFormat(valor);
    if (stateFormatLance !== VALID) {
      return stateFormatLance;
    }

    const valueNumeric = formatBrazilianToDecimal(valor);
    const stateBid = validBind(valueNumeric, auction);
    if (stateBid !== VALID) {
      return stateBid;
    }

    const bidFormatted = { 
      valor: valueNumeric, 
      leilaoId: auction.id 
    };

    const add = await addBind(bidFormatted);
    if (add) {
      await updateAuction();
      return SENT;
    }

    return NOT_SENT;
  };

  useEffect(() => {
    updateAuction();
  }, []);

  return [ auction, updateAuction, sendBid ];
}

