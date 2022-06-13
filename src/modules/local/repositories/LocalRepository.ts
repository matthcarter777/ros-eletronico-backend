import { EntityRepository, Repository, getRepository } from "typeorm";

import { Local } from "../infra/typeorm/entities/Local";

@EntityRepository(Local)
class LocalRepository extends Repository<Local> {
  private ormRepository: Repository<Local>;

  constructor() {
    super();
    this.ormRepository = getRepository(Local);
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

export default LocalRepository; 