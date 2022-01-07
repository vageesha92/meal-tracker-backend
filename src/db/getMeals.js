import {db} from "./db";

export const getMeals= async()=>{
    const connection =await db.getConnection();
    const Meals= await connection.collection("Meals").find({}).toArray();
  return Meals;
}