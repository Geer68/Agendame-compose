import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VerificationTokenService } from './verification-token.service';
import { CreateVerificationTokenDto } from './dto/create-verification-token.dto';
import { UpdateVerificationTokenDto } from './dto/update-verification-token.dto';

@Controller('verification-token')
export class VerificationTokenController {
  constructor(private readonly verificationTokenService: VerificationTokenService) {}

  @Post()
  create(@Body() createVerificationTokenDto: CreateVerificationTokenDto) {
    return this.verificationTokenService.create(createVerificationTokenDto);
  }

  @Get()
  findAll() {
    return this.verificationTokenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.verificationTokenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVerificationTokenDto: UpdateVerificationTokenDto) {
    return this.verificationTokenService.update(+id, updateVerificationTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.verificationTokenService.remove(+id);
  }
}
