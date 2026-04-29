import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body('username') username: string, @Res() res: Response) {
    const result = this.authService.login(username);

    res.cookie('access_token', result.access_token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
    });

    return res.json({
      message: 'Login success',
      user: result.user,
    });
  }
}
