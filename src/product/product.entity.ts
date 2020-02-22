// export class TaskEntity {}
import { Column, Entity, PrimaryGeneratedColumn ,  ManyToOne , OneToMany , BaseEntity} from 'typeorm';
import { Category} from '../category/category.entity';
import {Detail} from '../order-detail/order-detail.entity'
@Entity()
export class Product  extends BaseEntity {
  @PrimaryGeneratedColumn()
    id:number
  @Column({ length: 500 }) 
    product_name: string;
  @Column() 
    product_price: number;
  @Column({ length: 500 }) 
    img: string;
  @Column('text')
    desc: string;  
    @Column('number')
    discount: number; 
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: number;
  @ManyToOne(type => Category, category => category.id )
    category : Category;
  @OneToMany(type => Detail, detail => detail.id)
    details: Detail[];
}