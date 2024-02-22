export function formatHighestBidOfAuction(bids, initialValue) {
  const biggestBind = bids.reduce(
    (bigger, current) => current.valor > bigger ? current.valor : bigger,
    initialValue
  );
  return biggestBind;
}