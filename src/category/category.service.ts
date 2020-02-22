import { Injectable } from '@nestjs/common';
import { Category } from './category.entity' 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    
    private readonly cateRepo: Repository<Category>,
  ) {}

  async findAll (): Promise<Category[]> {
    console.log(1);
    return await this.cateRepo.find();

  }

  async findOne (id: number): Promise<Category> {
    return await this.cateRepo.findOne(id)
  }


  async create (cate_name: string): Promise<Category> {
    const category = new Category();
    category.cate_name=cate_name;
    await category.save();
    return category;
  }

  // async update(task: Category): Promise<UpdateResult> {
  //   return await this.cateRepo.update(task.id, task);
  // }

  async delete(id): Promise<DeleteResult> {
    return await this.cateRepo.delete(id);
  }
}