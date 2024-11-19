import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt'
import * as crypto from 'crypto'
import { access } from 'fs';
import { use } from 'passport';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async register(name: string, email: string, password: string, confirmPassword: string) {
        if(password !== confirmPassword) {
            throw new UnauthorizedException('Password do not match');
        }
        return await this.usersService.createUser(name, email, password, confirmPassword);
    }

    async login(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        if(!user) throw new UnauthorizedException('Invalid credentials');

        const hashedPassword = crypto.createHash('sha512').update(password).digest('hex');
        if (user.password !== hashedPassword) throw new UnauthorizedException('Invalid credentials');

        const payload = { id: user.id, email: user.email };
        const accessToken = this.jwtService.sign(payload);

        return {
            access_token: accessToken,
            name: user.name,
            email: user.email,
        };
    }
}
