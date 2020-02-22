import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactService } from './contact/contact.service';
import { ContactModule } from './contact/contact.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    CategoryModule,
     ProductModule, 
     OrderModule, 
     UsersModule, 
     OrderDetailModule,
     TypeOrmModule.forRoot({
      // type: 'mysql',
      // host: 'localhost',
      // port: 3306,
      // username: 'USERNAME',
      // password: 'PASSWORD',
      // database: 'sale',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // synchronize: true,
      // type: 'mysql',
      // host: 'db4free.net',
      // port: 3306,
      // username: 'nhatle',
      // password: 'Nhatle123',
      // database: 'sales_man_db',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // synchronize: true,
      // type: 'postgres',
      // host: 'ec2-23-22-156-110.compute-1.amazonaws.com',
      // port: 5432,
      // username: 'ygiolvzdfbvphy',
      // password: '16b80ade5316c4ead94ca00e0509b0e027ae22ae8987333107c1dc7b77fcdac3',
      // database: 'd2skprdms7c1f3',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // synchronize: true,
    }),
     ProductModule,CategoryModule, ContactModule, AuthModule, UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, ContactService],
  
})
export class AppModule {}
