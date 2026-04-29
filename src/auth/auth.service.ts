import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  private users = new Map();

  constructor(private jwtService: JwtService) {}

  login(username: string) {
    let user = this.users.get(username);

    if (!user) {
      user = {
        id: uuidv4(),
        username,
      };

      this.users.set(username, user);
    }

    const token = this.jwtService.sign(user);

    return {
      user,
      access_token: token,
    };
  }
}
