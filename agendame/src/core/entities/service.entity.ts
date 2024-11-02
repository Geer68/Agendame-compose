import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Entrepreneurship } from './entrepreneurship.entity';

@Table({
  tableName: 'services',
  timestamps: true,
})
export class Service extends Model {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => Entrepreneurship)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  entrepreneurship_id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  base_price: number;

  // Associations
  @BelongsTo(() => Entrepreneurship)
  entrepreneurship: Entrepreneurship;
}
