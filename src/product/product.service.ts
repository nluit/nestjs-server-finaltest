import { Injectable } from '@nestjs/common';
import { Product } from './product.entity' ;
import { InjectRepository } from '@nestjs/typeorm';
import { Repository , Not , }  from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import {ProductDto} from './product.dto';
import { CategoryService } from '../category/category.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>, 
    private categoryservice : CategoryService
  ) {}

  async findAll (): Promise<Product[]> {
    return await this.productRepo.find({
      relations :["category"],

    });
  }

  async findOne (id: number): Promise<Product> {
    return await this.productRepo.findOne({ where : {id : id } , relations :["category"]})
  }

  async findDate(): Promise<Product[]> {

    return await this.productRepo.find({
      // select : ["product_name"],
      order: { createdAt: "DESC" },
      take : 5
      
    })
  }

  async findSaleProduct() : Promise<Product[]> {
    return await this.productRepo.find({
      discount : Not(0)
    })
  }

  async findProduct(id:number): Promise<Product[]> {
    return await this.productRepo.find({
      relations :["category"],
      where : { category : {
        id : id
      } }
    })
  }

  async findProductCategory(id): Promise<Product[]> {
    return await this.productRepo.find({
      relations :["category"],
      where : { category : {
        id : id
      } }
    })
  }

  async create ( product : ProductDto ): Promise<Product> {
    const newProduct = new Product();
    newProduct.product_name = product.product_name;
    newProduct.product_price = Number(product.product_price);
    newProduct.img = product.img;
    newProduct.desc = product.desc;
    newProduct.discount=Number(product.discount);
    const  result = await this.categoryservice.findOne(Number(product.categoryId));
    console.log(result);
    newProduct.category = result;
    newProduct.save();
    return await newProduct;
  }

  async update(task: Product): Promise<UpdateResult> {
    return await this.productRepo.update(task.id, task);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.productRepo.delete(id);
  }
}