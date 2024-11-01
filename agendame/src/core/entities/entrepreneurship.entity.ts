import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  HasMany,
} from 'sequelize-typescript';
import { Service } from './service.entity';

@Table({
  tableName: 'entrepreneurships',
  timestamps: true,
})
export class Entrepreneurship extends Model {
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
  category: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  description: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  img: string;

  @AllowNull(true)
  @Column(DataType.JSONB)
  social_links: object;

  @AllowNull(true)
  @Column(DataType.STRING)
  cancellation_policy: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  reminder_text: string;

  @AllowNull(true)
  @Column(DataType.FLOAT)
  mp_interest_rate: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  account_id: number;

  // Associations
  @HasMany(() => Service)
  services: Service[];
}
