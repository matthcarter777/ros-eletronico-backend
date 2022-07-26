import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

enum Status  {
  'Resolvido', 
  'Não resolvido'
}

enum Negotiations  {
  'Tratado', 
  'Não Tratado'
}

enum CompanyArea  {
  'Itafos', 
  'Contratada'
}

@Entity("ROS")
class Ros {
  
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  date: Date;

  @Column()
  observer_id: string;

  @Column()
  company_id: string;
  
  @Column()
  manager_id: string;

  @Column()
  shift_id: string;

  @Column()
  zone_id: string;
  
  @Column()
  local_id: string;
  
  @Column()
  nature_id: string;
  
  @Column()
  reason_id: string;
  
  @Column()
  description: string;
  
  @Column()
  suggestion: string;
  
  @Column()
  responsible_response: string;
  
  @Column()
  isAvail_responsible: boolean;
  
  @Column()
  responsible_id: string;
  
  @Column()
  status: Status;
  
  @Column()
  negotiations: Negotiations;
  
  @Column()
  estimated_date_finish: Date;
  
  @Column()
  company_area: CompanyArea;
  
  @Column()
  responsible_area_id: string;
  
  @CreateDateColumn()
  created_at: Date;
  
  @CreateDateColumn()
  finish_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}
 export { Ros };
