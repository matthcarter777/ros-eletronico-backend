import { EntityRepository, Repository, getRepository } from "typeorm";

import { Observer } from "../infra/typeorm/entities/Observer";

@EntityRepository(Observer)
class ObserverRepository extends Repository<Observer> {
  private ormRepository: Repository<Observer>;

  constructor() {
    super();
    this.ormRepository = getRepository(Observer);
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

  public async findByCompanyId(company_id: string) {
    const find = await this.ormRepository.findOne({
      where: { company_id }
    });

    return find || undefined;
  }
}

export default ObserverRepository; 