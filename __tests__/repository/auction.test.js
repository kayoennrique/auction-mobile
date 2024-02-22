import { getAuctions } from '../../src/repository/auction';
import apiAuctions from '../../src/services/apiAuctions';

jest.mock('../../src/services/apiAuctions');

const mockAuctions = [
  {
    id: 1,
    name: 'Auction',
    description: 'Auction description'
  }
];

const mockRequest = (retorno) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: retorno
      }, 200);
    });
  });
}

const mockRequestErro = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 200);
  })
}

describe('repository/auction', () => {
  beforeEach(() => {
    apiAuctions.get.mockClear();
  });

  describe('getAuctions', () => {

    it('Should return a list of auctions', async () => {
      apiAuctions.get.mockImplementation(() => mockRequest(mockAuctions));

      const auctions = await getAuctions();
      expect(auctions).toEqual(mockAuctions);

      expect(apiAuctions.get).toHaveBeenCalledWith('/auctions');
      expect(apiAuctions.get).toHaveBeenCalledTimes(1);
    });

    it('Must return an empty list when the request fails', async () => {
      apiAuctions.get.mockImplementation(() => mockRequestErro());

      const auctions = await getAuctions();
      expect(auctions).toEqual([]);

      expect(apiAuctions.get).toHaveBeenCalledWith('/auctions');
      expect(apiAuctions.get).toHaveBeenCalledTimes(1);
    });
  });
});