import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import portafoliImage from './img/Portafoli.png';

export const AppGif = () => {

    const [category, setCategory] = useState([]);
 
// aca hago este codigo para llamar con mi propia (any) newCategory esa la llamo 
    const handleOnCategory = ( newCategory ) =>{
        if( !category.includes( newCategory ) ) {
            setCategory([ ...category, newCategory ]);
        }
            

     
        

    }
    return (
        <>
        <div className="logo">
        <img src={portafoliImage} alt="logo" />
        </div>
        
        <h1><n>Gif Expert App</n></h1>
          {/* aca me cominico con mi componente con any: name que le puse (onAddCategory) */}
          <AddCategory onAddCategory={(value ) => handleOnCategory (value)} />

        <ol>
            {/* aca lo mismo tengo que tener encuenta que aca va un any llamado (categoria) no tine nada que ver con la const */}
                {/* y mapeo la category  */}
                 {category.map(( categoria ) => (
                    <GifGrid key ={categoria} categoria={categoria} />
                ))}
            
        </ol>


        </>
        
    )

}