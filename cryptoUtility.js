const crypto = require("crypto");

const createSha3_512Hash = (data) => {
  return crypto.createHash("sha3-512").update(data).digest("hex");
};

module.exports = {
  createSha3_512Hash,
};
