import{CategoryModel} from "./category.entity";

export interface ProductModel{
    id:number;
    title:string;
    price:number;
    description:string;
    images:string[];
    category:CategoryModel;
}