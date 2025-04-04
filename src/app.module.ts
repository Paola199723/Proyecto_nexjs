import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from './modules/transactions/transactions.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',  // Usuario de PostgreSQL
      password: 'Paola123',  // Contraseña de PostgreSQL
      database: 'database_venta',  // Nombre de la base de datos (se creará automáticamente si no existe)
      autoLoadEntities: true, // Carga las entidades automáticamente
      synchronize: true, // Crea las tablas automáticamente (NO usar en producción)
    }),
    TransactionsModule,
  ],
})
export class AppModule {}

