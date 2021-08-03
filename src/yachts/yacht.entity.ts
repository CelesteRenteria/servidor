import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('yachts')
export class YachtEntity {
 @PrimaryGeneratedColumn()
 id_yacht:number;

 @Column({length:50})
 name:string;

 @Column({length:5})
 ft:string;

 @Column({length:200})
 image:string;
}


