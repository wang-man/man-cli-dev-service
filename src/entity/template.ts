import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Template {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  npmName: string;

  @Column('text')
  version: string;

}