import apiAuctions from '../services/apiAuctions';

export async function getAuctions() {
  try {
    const response = await apiAuctions.get(`/auctions`);
    return response.data;
  } catch (erro) {
    return [];
  }
}

export async function getAuction(id) {
  try {
    const response = await apiAuctions.get(`/auctions/${id}`);
    return response.data;
  } catch(erro) {
    return {};
  }
}
