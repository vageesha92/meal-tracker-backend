import{getPopulatedIngredients, deleteIngredient} from "../db";

export const deleteIngredientRoute={
    method:"delete",
    path:"/ingredients/:name",
    handler: async(req,res)=>{
         const {name}=req.params;
         await deleteIngredient(name);
         const updatedIngredients=await getPopulatedIngredients();
         res.status(200).json(updatedIngredients);
    },
};