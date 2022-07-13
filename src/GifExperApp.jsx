import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {

  const [categories, setCategories] = useState(['Johan']);


  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;


    // categories.push(newCategory);
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GitExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}

      />

      <ol>
        {
          categories.map(category => 
            (
              <GifGrid key={category} category={category}/>
            )
          )
        }
        <li></li>
      </ol>

      {/*Gif item*/}
    </>

  )
}
