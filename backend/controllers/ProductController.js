
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const getProduct = async(req,res)=>{
    try {
        const response = await prisma.product.findMany();
        // console.log(response);
        res.status(200).json(response); 
        
    } catch (error) {
        // res.send(error);
        // console.log(error);
        res.status(500).json({msg: error.message});
    }
}


export const getProductById = async(req,res)=>{
    try {
        const response = await prisma.product.findUnique({
            where: {
                id : Number (req.params.id)
            }
        });
        res.status(200).json(response); 
        
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}


export const createProduct = async(req,res)=>{

    //desctruction body.    
    const {name,price} = req.body;

    try {

        const product = await prisma.product.create({
            data:{
                name: name,
                price: price
            }
        });
        res.status(201).json(product);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
}

export const updateProduct = async(req,res)=>{

    //desctruction body.    
    const {name,price} = req.body;

    try {

        const product = await prisma.product.update({
            where:{
                id: Number (req.params.id)
            },
            data:{
                name: name,
                price: price
            }
        });
        res.status(201).json(product);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
}
export const deleteProduct = async(req,res)=>{

    try {

        const product = await prisma.product.delete({
            where:{
                id: Number (req.params.id)
            },
        });
        res.status(201).json(product);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
}