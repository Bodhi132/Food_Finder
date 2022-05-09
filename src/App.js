import './App.css';
import axios from 'axios'
import RecipeTiles from './components/RecipeTiles';
import { useState } from 'react';
function App() {
  const[query,setQuery]=useState("")
  const[recipes,setrecipes]=useState([])
  const YOUR_APP_ID = "5aa9916d";
  const YOUR_APP_KEY = "30dd2d5e167764e9a954bc2eb4ee9db3"
  var url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID }&app_key=${YOUR_APP_KEY}&pageSize=5`

  const getRecipes = async()=>
  {
    let result=await axios.get(url)
    setrecipes(result.data.hits)
    console.log(result.data.hits)
  }
  const onSubmit = (e)=>
  {
    e.preventDefault()
    getRecipes()
  }
  const onClick = (e)=>
  {
    e.preventDefault()
    getRecipes()
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Food Finder</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <form className="d-flex" onSubmit={onSubmit}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
        value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
        <button className="btn btn-outline-success" type="submit" onClick={onClick}>Search</button>
      </form>
    </div>
  </nav>
  <div className="container">
  <div className="row">
      { recipes.map((recipe) => {
        console.log(recipe)
          return <div className="col-md-4" key={recipe.recipe.url}>
               <RecipeTiles recipe={recipe.recipe}  />
          </div>
      })}
  </div>
  </div>
    </>
  );
}

export default App;
