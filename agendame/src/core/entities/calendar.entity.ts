import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Entrepreneurship } from './entrepreneurship.entity';
import { Service } from './service.entity';

@Table({
  tableName: 'calendars',
  timestamps: true,
})
export class Calendar extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.STRING)
  calendar_id: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  entrepreneurship_id: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  service_id: number;

  // Associations
  @BelongsTo(() => Entrepreneurship)
  entrepreneurship: Entrepreneurship;

  @BelongsTo(() => Service)
  service: Service;
}
