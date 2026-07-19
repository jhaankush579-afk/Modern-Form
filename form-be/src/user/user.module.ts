import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import {users , userSchema} from './user.schema'

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: users.name,
        schema: userSchema
      }
    ])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
