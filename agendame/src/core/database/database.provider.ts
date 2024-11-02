import { Sequelize } from 'sequelize-typescript';
import { Client } from '../entities/client.entity';
import { Payment } from '../entities/payment.entity';
import { Account } from '../entities/account.entity';
import { Entrepreneurship } from '../entities/entrepreneurship.entity';
import { Appointment } from '../entities/appointment.entity';
import { Service } from '../entities/service.entity';
import { Employee } from '../entities/employee.entity';
import { EmployeeService } from '../entities/employeeService.entity';
import { Session } from '../entities/session.entity';
import { VerificationToken } from '../entities/verificationToken.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        logging: console.log,
      });
      sequelize.addModels([
        Client,
        Payment,
        Account,
        Entrepreneurship,
        Appointment,
        Service,
        Employee,
        EmployeeService,
        Session,
        VerificationToken,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
