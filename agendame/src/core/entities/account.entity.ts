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
  tableName: 'accounts',
  timestamps: true,
})
export class Account extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  userId: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  type: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  provider: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  providerAccount: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  refreshToken: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  accessToken: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  expires_at: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  id_token: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  scope: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  sesion_state: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  token_type: string;
}
