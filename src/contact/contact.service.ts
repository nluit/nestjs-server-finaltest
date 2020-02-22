import { Injectable } from '@nestjs/common';
import * as SendMail from '@sendgrid/mail';
@Injectable()
export class ContactService {

    SendMessage(user){
        console.log(1)
        SendMail.setApiKey("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");
            const msg = {
            to: user.email,
            from: 'nluit99@gmail.com',
            subject: 'Đăng kí email',
            text: 'đăng kí email thành công',
            html: `<strong> ${ user.message }</strong>`,
            };
            SendMail.send(msg);
            console.log(2)
            // return {code :201 , "messagge":"success !"}
    }
    
}
