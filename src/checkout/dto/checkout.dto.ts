/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, Min, Max } from 'class-validator';

export class CheckoutDto {
  @IsNumber()
  @Min(0)
  price!: number;

  @IsNumber()
  @Min(0)
  @Max(1)
  voucher!: number;
}
