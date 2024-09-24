import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthService {

    constructor(private jwtService:JwtService){}

    async generateToken(user:any):Promise<string> {

        const payload = {username:user.username,sub:user.id};

        return this.jwtService.sign(payload) 
    }
    async validateUser(payload:any):Promise<any> {

        return {id:payload.sub,username:payload.username}
    }
}