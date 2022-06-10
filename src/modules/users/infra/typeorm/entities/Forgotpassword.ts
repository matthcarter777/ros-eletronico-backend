import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("forgot_password")
class ForgotPassword {
  
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}
 export { ForgotPassword };
