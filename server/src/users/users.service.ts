import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async createUser(name: string, email: string, password: string, confirmPassword: string): Promise<User> {
        const hashedPassword = crypto.createHash('sha512').update(password).digest('hex');
        const user = this.userRepository.create({ name, email, password: hashedPassword, confirmPassword: hashedPassword });
        return await this.userRepository.save(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { email } });
    }
}
