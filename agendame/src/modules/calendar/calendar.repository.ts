// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/sequelize';
// import { Calendar } from 'src/core/entities/calendar.entity';
// import { UpdateCalendarDto } from './dto/update-calendar.dto';
// import { CreateCalendarDto } from './dto/create-calendar.dto';

// @Injectable()
// export class CalendarRepository {
//   constructor(
//     @InjectModel(Calendar)
//     private readonly calendarModel: typeof Calendar,
//   ) {}

//   async create(createCalendarDto: CreateCalendarDto): Promise<Calendar> {
//     return
//     // return this.calendarModel.create(createCalendarDto);
//   }

//   async findAll(): Promise<Calendar[]> {
//     return this.calendarModel.findAll();
//   }

//   async findOne(id: number): Promise<Calendar> {
//     return this.calendarModel.findOne({ where: { id } });
//   }

//   async update(
//     id: number,
//     updateCalendarDto: UpdateCalendarDto,
//   ): Promise<[number, Calendar[]]> {
//     return this.calendarModel.update(updateCalendarDto, { where: { id } });
//   }

//   async remove(id: number): Promise<void> {
//     const calendar = await this.findOne(id);
//     await calendar.destroy();
//   }
// }
