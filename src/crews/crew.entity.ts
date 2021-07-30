import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('crew')
export class CrewEntity {
    @PrimaryGeneratedColumn()
    id_crew:number;

    @Column({length:50})
    position:string;
    
    @Column({length:50})
    name:string;

    @Column({length:50})
    lasname:string;
    
    @Column({length:3})
    age:string;
}
