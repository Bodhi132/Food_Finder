import React from 'react'
export default function RecipeTile(props) {
  let {recipe}=props
  function get_url_extension( url ) 
  {
    return url.split(/[#?]/)[0].split('.').pop().trim();
  }
  if(get_url_extension(recipe.image)!=null)
  {
  return (
    <div className='my-3'>
      <div className="card" >
     <img src={recipe.image} className="card-img-top" alt=''/>
  <div className="card-body">
    <h5 className="card-title">{recipe.label}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>
    </div>
  )
}
else
{
  return (
    <div className='my-3'>
      <div className="card" >
     <img src="https://www.edamam.com/web-img/e2e/e2e627d8324edacda019ce9d20e339db.jpg" className="card-img-top" alt=''/>
  <div className="card-body">
    <h5 classNameName="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>
    </div>
  )
}
}
