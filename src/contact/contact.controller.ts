import { Controller ,  Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import {ContactService} from './contact.service'
import {User} from './user';

@Controller('contact')
export class ContactController {
    constructor(private readonly cateService: ContactService ) {

    }  
    @Post()
    SendMail(@Body() user: User){
        // console.log(user);
        this.cateService.SendMessage(user);
        // console.log()
        return ;
        
    }
}
