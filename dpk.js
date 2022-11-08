const CONSTANTS = require("./constants");
const CRYPTO_UTILITY = require("./cryptoUtility");
const TYPES_UTILTIY = require("./typesUtility");

exports.deterministicPartitionKey = (event) => {
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = CRYPTO_UTILITY.createSha3_512Hash(data);
    }
  }

  if (candidate && !TYPES_UTILTIY.isTypeString(candidate)) {
    candidate = JSON.stringify(candidate);
  } else {
    candidate = CONSTANTS.TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > CONSTANTS.MAX_PARTITION_KEY_LENGTH) {
    candidate = CRYPTO_UTILITY.createSha3_512Hash(candidate);
  }

  return candidate;
};
