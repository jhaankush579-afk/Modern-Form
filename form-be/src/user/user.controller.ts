import { Controller , Get , Post , Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Get()
    getUsersData() {
        return this.userService.getData()
    }

    @Post()
    addData(@Body() payload: any) {
        console.log(payload)
        return this.userService.postData(payload)
    }
}
