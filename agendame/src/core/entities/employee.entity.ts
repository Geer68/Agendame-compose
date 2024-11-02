import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Entrepreneurship } from './entrepreneurship.entity';
import { Appointment } from './appointment.entity';

@Table({
  tableName: 'employees',
  timestamps: true,
})
export class Employee extends Model {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  first_name: string;

  @Column(DataType.STRING)
  last_name: string;

  @ForeignKey(() => Entrepreneurship)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  entrepreneurship_id: number;

  // Associations
  @BelongsTo(() => Entrepreneurship)
  entrepreneurship: Entrepreneurship;

  @HasMany(() => Appointment)
  appointments: Appointment[];
}
