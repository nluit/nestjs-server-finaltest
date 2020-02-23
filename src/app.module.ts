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
     
      type: 'postgres',
      host: 'ec2-52-203-160-194.compute-1.amazonaws.com',
      port: 5432,
      username: 'wfxtczwdklhucy',
      password: 'fd8ebab2e83a47a586b9b581fbf71b88ebca890cadc76eb17d6a1bea173473eb',
      database: 'd4mkh6prk38r7t',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
     ProductModule,CategoryModule, ContactModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, ContactService],
  
})
export class AppModule {}
