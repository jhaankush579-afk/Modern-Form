import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {users , userDocument} from './user.schema'
import { Model  } from 'mongoose'

@Injectable()
export class UserService {
    constructor(@InjectModel(users.name) private userModel: Model<userDocument>){}
    async getData() {
        return await this.userModel.find()
    }

    async postData(payload: any){
        return await this.userModel.insertOne(payload)
    } 
}
