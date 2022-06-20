import { EntityRepository, Repository, getRepository } from "typeorm";

import { Manager } from "../infra/typeorm/entities/Manager";

@EntityRepository(Manager)
class ManagerRepository extends Repository<Manager> {
  private ormRepository: Repository<Manager>;

  constructor() {
    super();
    this.ormRepository = getRepository(Manager);
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

export default ManagerRepository; 