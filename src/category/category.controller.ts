import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service'
import { Category } from './category.entity'


@Controller('category')
export class CategoryController {
  constructor(private readonly cateService: CategoryService) {

  }

  @Get()
  findAll(){
    return this.cateService.findAll()
  }

  @Get(':id')
  get(@Param() params) {
    return this.cateService.findOne(params.id);
  }

  @Post()
  create(@Body('cate_name') cate_name: string ) {
    return this.cateService.create(cate_name);
  }

  // @Put()
  // update(@Body() task: Category) {
  //   return this.cateService.update(task);
  // }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.cateService.delete(params.id);
  }
}