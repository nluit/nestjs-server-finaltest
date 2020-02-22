// export class TaskEntity {}
import { Column, Entity, PrimaryGeneratedColumn ,  ManyToOne } from 'typeorm';
import { Order } from '../order/order.entity';
import {Product } from '../product/product.entity'
@Entity()
export class Detail {
  @PrimaryGeneratedColumn()
    id:number
  @Column() 
    price : number;
  @Column() 
    qty : number;  
  @Column() 
    total_cost : number; 

  @ManyToOne(type => Order, order => order.id)
    order_id : Order;
    @ManyToOne(type => Product , product => product.id)
    product_id  : Product;
  
}