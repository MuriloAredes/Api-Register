import { singleton } from 'tsyringe';
import {DataSource } from 'typeorm';
import Category from '../entities/Category';
import { Product } from './../entities/Product';



export  const AppDataSource = new DataSource({
    type: "postgres" ,
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "secretpassword",
    database: "postgres",
    entities: [Category,Product],
    migrations: ["src/database/migrations/*.ts"],
    

})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })