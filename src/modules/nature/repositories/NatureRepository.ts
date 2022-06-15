import { EntityRepository, Repository, getRepository } from "typeorm";

import { Nature } from "../infra/typeorm/entities/Nature";

@EntityRepository(Nature)
class NatureRepository extends Repository<Nature> {
  private ormRepository: Repository<Nature>;

  constructor() {
    super();
    this.ormRepository = getRepository(Nature);
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

export default NatureRepository; 