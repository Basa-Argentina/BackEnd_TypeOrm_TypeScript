import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
  
}