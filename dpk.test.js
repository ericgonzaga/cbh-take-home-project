const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns a constant partiationKey when given a constant string as event on input", () => {
    const trivialKey = deterministicPartitionKey('test');
    expect(trivialKey).toBe('0fa3727b22cbb0a5271dddfcb7d414a1a512284913ccd690b198751de8100b1ea1935c1b63c35837696f8e73709431de092894581bec9bbfe6532106733af6d8');
  });

  it("Returns the partitionKey when it`s given as property of the object parameter", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 'test' });
    expect(trivialKey).toBe('test');
  });

  it("Returns the partitionKey hash when it has length greater than 256", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890' });
    expect(trivialKey).toBe('12d9148d93530bd42bbe1067fa985cecabe0ae5a136c5b1e382afd03f20fa9b0bc66812b61564dd017f00901538b967d8e4596e8c625241ebf09e888354d86b4');
  });

});
