import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'payments',
  timestamps: true,
})
export class Payment extends Model {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  mp_transaction_number: string;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  amount: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  fees: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  net_amount: number;
}
