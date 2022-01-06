import {getMeals} from "../db";

export const getMealsRoute={
    method:"get",
    path:"/Meals",
    handler: async(req,res)=>{
        const meals=await getMeals();
        res.status(200).json(meals);
    },
};