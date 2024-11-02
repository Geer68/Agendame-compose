import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';
import { Employee } from './employee.entity';
import { Service } from './service.entity';

@Table({
  tableName: 'employee_services',
  timestamps: true,
})
export class EmployeeService extends Model {
  @PrimaryKey
  @AllowNull(false)
  @ForeignKey(() => Employee)
  @Column(DataType.INTEGER)
  employee_id: number;

  @PrimaryKey
  @AllowNull(false)
  @ForeignKey(() => Service)
  @Column(DataType.INTEGER)
  service_id: number;
}
