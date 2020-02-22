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
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'USERNAME',
      password: 'PASSWORD',
      database: 'sale',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      
    }),
     ProductModule,CategoryModule, ContactModule, AuthModule, UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, ContactService],
  
})
export class AppModule {}
