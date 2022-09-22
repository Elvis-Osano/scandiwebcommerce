import Decimal from "decimal.js";
import { ValueTransformer } from "typeorm";

export class DecimalTransformer implements ValueTransformer {
  /**
   * Used to marshal Decimal when writing to the database.
   */
  to(decimal?: Decimal): string {
    return decimal?.toString();
  }
  /**
   * Used to unmarshal Decimal when reading from the database to float
   */
  from(decimal?: string): any | null {
    return decimal ? parseFloat(decimal) : null;
  }
}
export const DecimalToString =
  (decimals: number = 2) =>
  (decimal?: any) =>
    decimal?.toFixed?.(decimals) || decimal;
