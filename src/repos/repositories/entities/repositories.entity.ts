import {
    PrimaryGeneratedColumn,Column,Entity,CreateDateColumn,OneToOne,JoinColumn,ManyToOne
  } from 'typeorm';
  import { Metrics } from './../../metrics/entities/metrics.entity'
  import { Tribu } from './../../tribu/entities/tribu.entity'

  export enum repoStates {
    ENABLE = 'E',
    DISABLE = 'D',
    ARCHIVED = 'A'
  }
  export enum registerStates {
    ACTIVE = 'A',
    INACTIVE = 'I',
  }
  //export type UserRoleType = "admin" | "editor" | "ghost"

  @Entity()
  export class Repositories {
    @PrimaryGeneratedColumn()
    id_repository: number;
    @Column({ type: 'varchar', length: 50 })
    name: string;
    //@Column({ type: "enum", enum: repoStates , default: repoStates.ENABLE })
    @Column({ type: 'varchar', length: 1, default: repoStates.ENABLE })
    state: repoStates;
    @CreateDateColumn({
      type: 'timestamptz',
      default: () => 'CURRENT_TIMESTAMP',
    })
    create_time: Date;
    @Column({ type: 'varchar', length: 1, default: registerStates.ACTIVE })
    //@Column({ type: "enum",enum: registerStates , default: registerStates.ACTIVE })
    status: registerStates;
    @OneToOne(() => Metrics,(metrics) => metrics.repository)
    @JoinColumn()
    metrics: Metrics
    @ManyToOne(() => Tribu, (tribe) => tribe.repositories)
    tribe: Tribu

  }