// export class TaskEntity {}
import { Column, Entity, PrimaryGeneratedColumn ,  ManyToOne  , OneToMany } from 'typeorm';
import { User } from '../users/users.entity';
import {Detail} from '../order-detail/order-detail.entity'
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
    id:number
  @Column() 
    total_money: number;
  @Column() 
    date_created: Date;   
  @ManyToOne(type => User, user => user.id)
    user: User;
  
}