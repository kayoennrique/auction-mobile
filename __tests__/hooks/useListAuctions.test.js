import { renderHook, act } from '@testing-library/react-hooks';
import useListAuctions from '../../src/hooks/useListAuctions';

import { getAuctions } from '../../src/repository/auction';

jest.mock('../../src/repository/auction');

const mockAuctions = [
  {
    id: 1,
    name: 'Auction',
    description: 'Auction description'
  }
]
  ;
const mockAuctionsAtt = [
  {
    id: 1,
    name: 'Auction',
    description: 'Auction description'
  },
  {
    id: 2,
    name: 'Auction',
    description: 'Auction description 2'
  }
];

describe('hooks/useListAuctions', () => {

  it('Must return a list of auctions and a function to update', async () => {
    getAuctions.mockImplementation(() => mockAuctions);

    const { result, waitForNextUpdate } = renderHook(() => useListAuctions());
    expect(result.current[0]).toEqual([]);

    await waitForNextUpdate();
    expect(result.current[0]).toEqual(mockAuctions);

    getAuctions.mockImplementation(() => mockAuctionsAtt);

    await act(() => result.current[1]());
    expect(result.current[0]).toEqual(mockAuctionsAtt);
  });
});