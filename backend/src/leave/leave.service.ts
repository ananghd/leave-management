import { Injectable } from '@nestjs/common';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';
import { Leave } from './leave.entity'; // Assuming you have a Leave entity defined
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LeaveService {
  constructor(
    @InjectRepository(Leave)
    private leaveRepository: Repository<Leave>,
  ) {}

  create(createLeaveDto: CreateLeaveDto): Promise<Leave> {
    const leave = this.leaveRepository.create(createLeaveDto);
    return this.leaveRepository.save(leave);
  }

  findAll(): Promise<Leave[]> {
    return this.leaveRepository.find();
  }

  findOne(id: number): Promise<Leave> {
    return this.leaveRepository.findOne(id);
  }

  async update(id: number, updateLeaveDto: UpdateLeaveDto): Promise<Leave> {
    await this.leaveRepository.update(id, updateLeaveDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.leaveRepository.delete(id);
  }
}