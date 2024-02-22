import { formatBrazilianToDecimal, formatDecimalToReal } from "../../../src/business/formatters/coin";

describe("business/formatters/coin", () => {

  describe("formatBrazilianToDecimal", () => {

    it("Should return 8.59 when the value is '8.59'", () => {

      const result = formatBrazilianToDecimal("8,59");

      expect(result).toBe(8.59);
      console.log(result);
    });
  });

  describe("formatDecimalToReal", () => {

    it("Should return R$ 8.59 when the value is 8.59", () => {

      const result = formatDecimalToReal(8.59);

      expect(result).toMatch(/R\$\s8,59/);
    });
  });
});