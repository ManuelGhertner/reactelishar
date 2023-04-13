import React from "react";
import { Link } from "react-router-dom";
const DashboardCategories = () =>{
const categories = [
    {id:1 ,name: "Clientes", route:"categories/clientes"},
    {id:2 ,name: "Presupuestador", route:"categories/presupuestador"},
];
return(
    <nav>
        {categories.map((category)=>{
            return (
                <Link key={category.id} to={category.route}>
                    {category.name}
                </Link>
            );
        })}
    </nav>
)
}

export default DashboardCategories;