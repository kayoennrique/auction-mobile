import {
  VALID,
  INVALID,
  LESS_THAN_INITIAL_VALUE,
  LESSOR_OR_EQUAL_TO_BIDS
} from "../constants/statesBind";

export function validateBindNumericFormat(valueInText) {
  if (valueInText.match(/^[1-9]+[0-9]*(\,[0-9]{1,2})?$/)) {
    return VALID;
  }

  return INVALID;
}

export function validBind(amount, { bids, initialValue }) {
  const bidGreaterOrEqualToInitial = validBindGreaterOrEqualToInitial(amount, initialValue);
  const bidGreaterThanBids = validBindGreaterThanBids(amount, bids);
  
  if(bidGreaterThanBids !== VALID) {
    return bidGreaterThanBids;
  }
  
  if(bidGreaterOrEqualToInitial !== VALID) {
    return bidGreaterOrEqualToInitial;
  }

  return bidGreaterThanBids;
}

function validBindGreaterOrEqualToInitial(amount, initialValue) {
  if (amount >= initialValue) {
    return VALID;
  }

  return LESS_THAN_INITIAL_VALUE;
}

function validBindGreaterThanBids(valor, bids) {
  const bidGreaterThanValue = bids.find(bid => bid.valor >= valor);
  if (!bidGreaterThanValue) {
    return VALID;
  }

  return LESSOR_OR_EQUAL_TO_BIDS;
}
