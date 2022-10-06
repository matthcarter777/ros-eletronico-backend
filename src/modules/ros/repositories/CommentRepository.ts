import { EntityRepository, Repository, getRepository } from "typeorm";

import { Comment } from "../infra/typeorm/entities/Comment";

@EntityRepository(Comment)
class CommentRepository extends Repository<Comment> {
  private ormRepository: Repository<Comment>;

  constructor() {
    super();
    this.ormRepository = getRepository(Comment);
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

  public async findByRosId(id: string) {
    const find = await this.ormRepository.find({
      where: { ros_id: id}
    });

    return find || undefined;
  }
}

export default CommentRepository; 