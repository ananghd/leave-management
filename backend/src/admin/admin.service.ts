import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  private admins = [];

  create(createAdminDto: CreateAdminDto) {
    const newAdmin = { id: Date.now(), ...createAdminDto };
    this.admins.push(newAdmin);
    return newAdmin;
  }

  findAll() {
    return this.admins;
  }

  findOne(id: number) {
    return this.admins.find(admin => admin.id === id);
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    const adminIndex = this.admins.findIndex(admin => admin.id === id);
    if (adminIndex > -1) {
      this.admins[adminIndex] = { ...this.admins[adminIndex], ...updateAdminDto };
      return this.admins[adminIndex];
    }
    return null;
  }

  remove(id: number) {
    const adminIndex = this.admins.findIndex(admin => admin.id === id);
    if (adminIndex > -1) {
      return this.admins.splice(adminIndex, 1);
    }
    return null;
  }
}