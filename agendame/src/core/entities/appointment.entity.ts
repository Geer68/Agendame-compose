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
} from 'sequelize-typescript';
import { Client } from './client.entity';
import { Entrepreneurship } from './entrepreneurship.entity';
import { Employee } from './employee.entity';
import { Service } from './service.entity';
import { Payment } from './payment.entity';

@Table({
  tableName: 'appointments',
  timestamps: true,
})
export class Appointment extends Model {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => Entrepreneurship)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  entrepreneurship_id: number;

  @ForeignKey(() => Service)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  service_id: number;

  @ForeignKey(() => Employee)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  employee_id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  event_id: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  appointment_start: Date;

  @AllowNull(false)
  @Column(DataType.DATE)
  appointment_end: Date;

  @ForeignKey(() => Client)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  client_id: number;

  @AllowNull(false)
  @Column(DataType.DATE)
  creation_datetime: Date;

  @Column(DataType.DATE)
  confirmation_datetime: Date;

  @Column(DataType.DATE)
  cancellation_datetime: Date;

  @ForeignKey(() => Payment)
  @Column(DataType.INTEGER)
  payment_id: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  final_price: number;

  // Associations
  @BelongsTo(() => Entrepreneurship)
  entrepreneurship: Entrepreneurship;

  @BelongsTo(() => Service)
  service: Service;

  @BelongsTo(() => Employee)
  employee: Employee;

  @BelongsTo(() => Client)
  client: Client;

  @BelongsTo(() => Payment)
  payment: Payment;
}
