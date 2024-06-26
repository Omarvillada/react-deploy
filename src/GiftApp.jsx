import { useState } from "react"
import { AddCategory, GifGrid } from "./components";




export const GiftApp = () => {

    const [categories, setCategories] = useState(['Friederich Nietzsche']); 

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        setCategories([...categories, newCategory ])
    }

  return (
    <>    
            <h1>GifApp</h1>
            <AddCategory 
            onNewCategory={ onAddCategory }/>
            
                {
                    categories.map( category => (
                      <GifGrid key={category} category={category} />
                    ))
                }

    </>

  )
}
