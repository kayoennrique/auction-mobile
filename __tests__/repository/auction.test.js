import { getAuctions } from '../../src/repository/auction';

jest.mock('../../src/services/apiAuctions');

describe('repository/auction', () => {

  describe('getAuctions', () => {

    it('Deve retornar uma lista de leilões', async () => {

      const auctions = await getAuctions();
      console.log(auctions);
    });
  });
});