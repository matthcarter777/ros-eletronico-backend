import { EntityRepository, Repository, getRepository } from "typeorm";

import { Responsible } from "../infra/typeorm/entities/Responsible";

@EntityRepository(Responsible)
class ResponsibleRepository extends Repository<Responsible> {
  private ormRepository: Repository<Responsible>;

  constructor() {
    super();
    this.ormRepository = getRepository(Responsible);
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

export default ResponsibleRepository; 