import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// decorator -> ele funciona como se fosse uma função
// ele vai enviar a classe como parâmetro
// é como se eu tivesse chamando entity(Customer);
// isso faz com que sempre que esse model seja salvo isso seja refletido dentro da database
// temos que falar o que cada coluna representa (coluna na database ou um campo do javascript)
@Entity('customers')
class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Customer;
