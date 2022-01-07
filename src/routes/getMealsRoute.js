import {getMeals} from "../db";

export const getPopulatedMealsRoute={
    method:"get",
    path:"/Meals",
    handler: async(req,res)=>{
        const Meals=await getPopulatedMeals();
        res.status(200).json(Meals);
    },
};