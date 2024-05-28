// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(phone: string, password: string): Promise<any> {
    // Simulate user data from a database
    const user = {
      phone: 'wineguard@gmail.com',
      password: await bcrypt.hash('12345678', 10),
    };

    if (user && user.phone === phone) {
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.phone, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
