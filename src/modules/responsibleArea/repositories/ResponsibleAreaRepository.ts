import { EntityRepository, Repository, getRepository } from "typeorm";

import { ResponsibleArea } from "../infra/typeorm/entities/ResponsibleArea";

@EntityRepository(ResponsibleArea)
class ResponsibleAreaRepository extends Repository<ResponsibleArea> {
  private ormRepository: Repository<ResponsibleArea>;

  constructor() {
    super();
    this.ormRepository = getRepository(ResponsibleArea);
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

export default ResponsibleAreaRepository; 