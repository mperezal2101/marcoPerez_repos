import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Repositories } from './../../repositories/entities/repositories.entity';

@Entity()
export class Metrics {
  @PrimaryGeneratedColumn()
  id_metric: number;
  @Column({ type: 'decimal', precision: 2, default: 0 })
  coverage: number;
  @Column({ type: 'int' })
  bugs: number;
  @Column({ type: 'int' })
  vulnerabilities: number;
  @Column({ type: 'int' })
  hostpot: number;
  @Column({ type: 'int' })
  code_smells: number;
  @OneToOne(() => Repositories, (repository) => repository.metrics, {
    onDelete: 'CASCADE',
  })
  repository: Repositories;
}
