import { EntityRepository, Repository, getRepository } from "typeorm";

import { Ros } from "../infra/typeorm/entities/Ros";

@EntityRepository(Ros)
class RosRepository extends Repository<Ros> {
  private ormRepository: Repository<Ros>;

  constructor() {
    super();
    this.ormRepository = getRepository(Ros);
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

  public async findByResponsibleId(id: string) {
    const find = await this.ormRepository.find({
      where: { responsible_id: id}
    });

    return find || undefined;
  }
}

export default RosRepository; 