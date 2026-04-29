import { Injectable } from '@nestjs/common';

@Injectable()
export class CheckoutService {
  processCheckout(price: number, voucher: number) {
    const discount = price * voucher;
    const finalPrice = price - discount;
    const point = discount * 0.02;

    return {
      price,
      discount,
      finalPrice,
      point,
    };
  }
}
