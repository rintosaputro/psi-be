import { Controller, Get, Query } from '@nestjs/common';
import { RandomUserService } from './random-user.service';

@Controller('random-users')
export class RandomUserController {
  constructor(private service: RandomUserService) {}

  @Get()
  getUsers(@Query('results') results = 10, @Query('page') page = 1) {
    return this.service.getUsers(Number(results), Number(page));
  }
}
