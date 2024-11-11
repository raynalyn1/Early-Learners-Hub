import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt'
import * as crypto from 'crypto'
import { access } from 'fs';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async register(name: string, email: string, password: string) {
        return await this.usersService.createUser(name, email, password);
    }

    async login(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        if(!user) throw new UnauthorizedException('Invalid credentials');

        const hashedPassword = crypto.createHash('sha512').update(password).digest('hex');
        if (user.password !== hashedPassword) throw new UnauthorizedException('Invalid credentials');

        const payload = { id: user.id, email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
