import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('services')
export class ServiceEntity {
    @PrimaryGeneratedColumn()
    id_service:number;
    
    @Column({length:50})
    service_name:string;

    @Column()
    number:number;
    
    @Column({length:20})
    type:string;
    
    @Column({length:200})
    description:string;
}
