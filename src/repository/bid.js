import apiAuctions from '../services/apiAuctions';

export async function getBidsFromAuction(id) {
  try {
    const response = await apiAuctions.get(`/bids?leilaoId=${id}&_sort=valor&_order=desc`);
    return response.data;
  } catch(erro) {
    return [];
  }
}

export async function addBind(bid) {
  try {
    await apiAuctions.post(`/bids`, bid);
    return true;
  } catch(erro) {
    return false;
  }
}