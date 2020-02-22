import { Column, Entity, PrimaryGeneratedColumn ,  OneToMany } from 'typeorm';
import { Order } from '../order/order.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
    id:number
  @Column({ length: 500 }) 
    usename: string;
  @Column({ length: 500 }) 
    password: string;
  @Column({ length: 500 }) 
    phone: string;
  @Column()
    email: string;
  @Column() 
    date_of_birth: Date;   
    @OneToMany(type => Order, order => order.id)
    orders: Order[];
}