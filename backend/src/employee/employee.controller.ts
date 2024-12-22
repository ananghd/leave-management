export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  async findAll() {
    return this.employeeService.findAll();
  }

  async findOne(id: string) {
    return this.employeeService.findOne(id);
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  async remove(id: string) {
    return this.employeeService.remove(id);
  }
}