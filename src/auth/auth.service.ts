import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private users = [
    {
      phone: '597333307',
      password: bcrypt.hashSync('12345678', 10),
    },
  ];

  constructor(private jwtService: JwtService) {}

  async validateUser(phone: string, pass: string): Promise<any> {
    const user = this.users.find((user) => user.phone === phone);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { phone: user.phone };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
