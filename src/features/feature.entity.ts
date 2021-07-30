import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('features')
export class FeatureEntity {
    @PrimaryGeneratedColumn()
    id_feature:number;
   
    @Column({length:50})
    name:string;
   
    @Column({length:5})
    number:string;

    @Column({length:50})
    type:string;
   
    @Column({length:500})
    description:string;
}
