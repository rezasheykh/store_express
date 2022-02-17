  
import { Column,Entity,PrimaryGeneratedColumn,ManyToOne, BaseEntity, JoinColumn } from "typeorm";
// import { TribeEntity } from "./tribe_entity";
@Entity('Hero')
export class HeroEntity extends BaseEntity{
   @PrimaryGeneratedColumn()
       id:number; 
   @Column()
   name:string;

//    @ManyToOne(()=>TribeEntity,(tribe)=>tribe.heroes,{
//        onDelete:'SET NULL'
//    })
//    @JoinColumn({
//        nasme:'tribeId',
//    })
//    relatedTribe:TribeEntity;
}
