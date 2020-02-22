
import { Column, Entity, PrimaryGeneratedColumn , OneToMany, BaseEntity } from 'typeorm';
import { Product} from '../product/product.entity'

@Entity()
export class Category  extends BaseEntity{
  @PrimaryGeneratedColumn()
    id:number
  @Column({ length: 500 }) 
    cate_name: string; 
  @OneToMany(type => Product, product => product.id)
    products: Product[];
}