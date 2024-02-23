import React from 'react';
import { render } from '@testing-library/react-native';
import { SENT } from '../../../../src/business/constants/statesBind';

import SendBid from '../../../../src/screens/Auction/components/SendBid';

describe('screens/Auction/components/SendBid', () => {
  it('deve enviar o lance quando o botão for pressionado', () => {
    const sendBid = jest.fn(() => new Promisse(resolve => resolve(SENT)))

    const { toJSON } = render(
      <SendBid
        sendBid={sendBid}
        color="blue"
      />
    );

    console.log(toJSON());
  });
});