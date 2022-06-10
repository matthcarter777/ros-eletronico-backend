import { EntityRepository, Repository, getRepository } from "typeorm";

import { ForgotPassword } from "../infra/typeorm/entities/Forgotpassword";

@EntityRepository(ForgotPassword)
class ForgotPasswordRepository extends Repository<ForgotPassword> {
  private ormRepository: Repository<ForgotPassword>;

  constructor() {
    super();
    this.ormRepository = getRepository(ForgotPassword);
  }
  
  public async findById(id: string) {
    const find = await this.ormRepository.findOne({
      where: { id }
    });

    return find || undefined;
  }

  public async findByUserId(id: string) {
    const find = await this.ormRepository.findOne({
      where: { user_id: id }
    });

    return find || undefined;
  }

}

export default ForgotPasswordRepository; 