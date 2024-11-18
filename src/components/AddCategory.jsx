import { useState } from "react";



export const AddCategory = ( { onAddCategory } ) => {
  const [inputCategory, setInputCategory] = useState('');

 const handleInputCategory = (e) => {
    setInputCategory(e.target.value);
 }



   const onSubmit = (event) => {
    event.preventDefault();
    if(inputCategory.trim().length <= 1) return;

        onAddCategory(inputCategory);
        setInputCategory('');

   }

    
    return(
          
        <form onSubmit={onSubmit}>
        <div className="container">
          <h4>Busqueda De Gif: </h4>
          <input value={inputCategory} 
          placeholder="Buscar Gif" 
          type="text"
          onChange={handleInputCategory}
          
          />
            <button><i class="bi bi-search"></i></button>
         </div>
         
        </form>
    )

}