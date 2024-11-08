import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { HasMany } from 'sequelize-typescript';
import { Appointment } from './appointment.entity';

@Table({
  tableName: 'clients',
  timestamps: true,
})
export class Client extends Model {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  lastname: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  email: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  phone: number;

  // Associations
  @HasMany(() => Appointment)
  appointments: Appointment[];
}
