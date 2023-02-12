const crypto = require("crypto");

/* REFACTORING EXPLANATION
First created 3 new test cases to test all scenarios I found out debugging the code, as you may see in dpk.test.je.
Then, I started removing the function hash, because it was duplicated in the code, 
and write it as separated function makes it easier to change the hash method and the digest parameter if we need.
At least, I tried to simplify as much as I could the conditions to make it short and clear to the next developers, 
maintaining the same expected results we got using the old function.
*/

const hash = (data) => { 
  return crypto.createHash("sha3-512").update(data).digest("hex");
};

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }
  
  const candidate = event.partitionKey || hash(JSON.stringify(event)); 

  return (candidate.length > MAX_PARTITION_KEY_LENGTH) ? hash(candidate) : candidate;
};