import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("reason")
class Reason {
  
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  nature_id: string;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}
 export { Reason };
