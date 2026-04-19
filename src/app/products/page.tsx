"use client";

import {Card, CardHeader } from "@heroui/react";
import Image from "next/image";
import {useState, useEffect} from "react";

type Products = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function Page() {
  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  console.log(products);
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10 ">
    {products.map((product: Products) => {
        console.log(products)
        return (
            <Card key={product.id} className="col-span-1  bg-gray-200 rounded-lg shadow-md">
                
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="h-20 w-20 rounded-lg object-cover"
                    />
                    <Card.Header>
                        <Card.Title>{product.title}</Card.Title>
                        </Card.Header> 
                        <Card.Description> {product.description}</Card.Description> 
                        <Card.Footer>{product.price}$</Card.Footer>
            </Card>
        )
    })}
    </div>
    </>
      
  );
}
