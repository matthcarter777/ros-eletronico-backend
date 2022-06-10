import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
class User {
  
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  roles_id: string;

  @Column()
  password: string;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}
 export { User };
