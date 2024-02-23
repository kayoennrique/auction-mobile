import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SENT, NOT_SENT } from '../../../../src/business/constants/statesBind';

import SendBid from '../../../../src/screens/Auction/components/SendBid';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('screens/Auction/components/SendBid', () => {
  it('deve enviar o lance quando o botão for pressionado', async () => {
    const sendBid = jest.fn(() => new Promise(resolve => resolve(SENT)))

    const {
      getByPlaceholderText,
      getByA11yHint,
      getByText
    } = render(
      <SendBid
        sendBid={sendBid}
        color="blue"
      />
    );
    const input = getByPlaceholderText("R$");
    const button = getByA11yHint("Enviar lance");

    fireEvent.changeText(input, "10");
    fireEvent.press(button);

    expect(sendBid).toHaveBeenCalledWith("10");
    await waitFor(() => {
      expect(getByText(SENT)).toBeTruthy();
    });

    expect(() => getByText(NOT_SENT)).toThrow();
  });
});