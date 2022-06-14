import { EntityRepository, Repository, getRepository } from "typeorm";

import { Zone } from "../infra/typeorm/entities/Zone";

@EntityRepository(Zone)
class ZoneRepository extends Repository<Zone> {
  private ormRepository: Repository<Zone>;

  constructor() {
    super();
    this.ormRepository = getRepository(Zone);
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

export default ZoneRepository; 