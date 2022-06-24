import { EntityRepository, Repository, getRepository } from "typeorm";

import { Shift } from "../infra/typeorm/entities/Shift";

@EntityRepository(Shift)
class ShiftRepository extends Repository<Shift> {
  private ormRepository: Repository<Shift>;

  constructor() {
    super();
    this.ormRepository = getRepository(Shift);
  }
  
  public async findAll() {
    const find = await this.ormRepository.find()

    return find || undefined;
  }

  public async findById(id: string) {
    const find = await this.ormRepository.findOne({
      where: { id }
    });

    return find || undefined;
  }

  public async findByName(name: string) {
    const find = await this.ormRepository.findOne({
      where: { name }
    });

    return find || undefined;
  }
}

export default ShiftRepository; 