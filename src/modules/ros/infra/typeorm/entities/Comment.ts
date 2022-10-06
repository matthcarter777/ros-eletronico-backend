import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("comments", {
  orderBy: { 
    created_at: 'DESC'
   }
})
class Comment {
  
  @PrimaryColumn()
  id: string;
    
  @Column()
  description: string;
  
  @Column()
  ros_id: string;
  
  @Column()
  author: string;
  
  @Column()
  user_id: string;
  
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}
 export { Comment };
