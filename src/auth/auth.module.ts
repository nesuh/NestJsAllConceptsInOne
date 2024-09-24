import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
@Module({
    imports:[
        PassportModule,
        JwtModule.register({
            secret:process.env.JWT_SECRET,
            signOptions:{expiresIn:'60m'},
        }),
    ],
    providers:[AuthService,AuthGuard],
    exports:[AuthService],
})

export class AuthModule{}