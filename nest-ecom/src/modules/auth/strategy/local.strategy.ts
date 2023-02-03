/* eslint-disable prettier/prettier */
import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/modules/users/user.entity";
import { UsersService } from "src/modules/users/users.service";

export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly userService: UsersService) {
        super();
    }

    async validate(username: string, password: string){
        const user: User = await this.userService.getUserByUsername(username, password);
        if (user) return user;
        if (user == undefined) throw new UnauthorizedException('User Not found');
        if (user.password != password)
            throw new UnauthorizedException('Invalid password');
    }
}
