import {getMeals} from "../db";

export const getMealsRoute={
    method:"get",
    path:"/Meals",
    handler: async(req,res)=>{
        const Meals=await getMeals();
        res.status(200).json(Meals);
    },
};