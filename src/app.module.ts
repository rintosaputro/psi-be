import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutService } from './checkout/checkout.service';
import { CheckoutModule } from './checkout/checkout.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RandomUserService } from './random-user/random-user.service';
import { RandomUserController } from './random-user/random-user.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CheckoutModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, RandomUserController],
  providers: [AppService, CheckoutService, RandomUserService],
})
export class AppModule {}
