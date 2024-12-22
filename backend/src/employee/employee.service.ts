import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  private employees = [];

  create(createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = { id: Date.now(), ...createEmployeeDto };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  findAll() {
    return this.employees;
  }

  findOne(id: number) {
    return this.employees.find(employee => employee.id === id);
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employeeIndex = this.employees.findIndex(employee => employee.id === id);
    if (employeeIndex > -1) {
      this.employees[employeeIndex] = { ...this.employees[employeeIndex], ...updateEmployeeDto };
      return this.employees[employeeIndex];
    }
    return null;
  }

  remove(id: number) {
    const employeeIndex = this.employees.findIndex(employee => employee.id === id);
    if (employeeIndex > -1) {
      return this.employees.splice(employeeIndex, 1);
    }
    return null;
  }
}