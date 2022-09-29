import { EntityRepository, Repository, getRepository } from "typeorm";

import { Reason } from "../infra/typeorm/entities/Reason";

@EntityRepository(Reason)
class ReasonRepository extends Repository<Reason> {
  private ormRepository: Repository<Reason>;

  constructor() {
    super();
    this.ormRepository = getRepository(Reason);
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

  public async findByNatureId(nature_id: string) {
    const find = await this.ormRepository.find({
      where: { nature_id }
    });

    return find || undefined;
  }
}

export default ReasonRepository; 