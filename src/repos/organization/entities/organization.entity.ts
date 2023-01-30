import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tribu } from './../../tribu/entities/tribu.entity';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;
  @Column({ type: 'int' })
  status: number;
  @OneToMany(() => Tribu, (tribes) => tribes.organization, {
    onDelete: 'CASCADE',
  })
  tribes: Tribu[];
}
