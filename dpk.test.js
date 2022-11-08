const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given input without partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ eventId: "testEventId" });
    expect(trivialKey).toBe("0");
  });

  it("Doesnot return the literal '0' when given input with partitionKey is not String", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: 123456789,
    });
    expect(trivialKey).not.toEqual("0");
  });

  it("Returns the literal '0' when given input with partitionKey is String", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "123456789",
    });
    expect(trivialKey).toBe("0");
  });
});
