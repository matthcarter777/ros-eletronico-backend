import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("observer")
class Observer {
  
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  company_id: string;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}
 export { Observer };
