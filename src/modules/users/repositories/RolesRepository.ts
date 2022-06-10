import { EntityRepository, Repository, getRepository } from "typeorm";

import { Roles } from "../infra/typeorm/entities/Roles";

@EntityRepository(Roles)
class UserRepository extends Repository<Roles> {
  private ormRepository: Repository<Roles>;

  constructor() {
    super();
    this.ormRepository = getRepository(Roles);
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

export default UserRepository; 