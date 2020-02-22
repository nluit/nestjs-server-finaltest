import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category ]),
],
  controllers: [ProductController],
  providers: [ProductService , CategoryService],
})
export class ProductModule {}