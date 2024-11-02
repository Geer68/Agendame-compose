import {
  AllowNull,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'verification_token',
  timestamps: true,
})
export class VerificationToken extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.STRING)
  identifier: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  expires: Date;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  userId: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  sessionToken: string;
}
