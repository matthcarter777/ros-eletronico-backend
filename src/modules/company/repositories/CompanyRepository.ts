import { EntityRepository, Repository, getRepository } from "typeorm";

import { Company } from "../infra/typeorm/entities/Company";

@EntityRepository(Company)
class CompanyRepository extends Repository<Company> {
  private ormRepository: Repository<Company>;

  constructor() {
    super();
    this.ormRepository = getRepository(Company);
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

export default CompanyRepository; 