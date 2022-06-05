import React from 'react'

const PokemonItem = ({title, url}) => {
  return (
    <div>
      <div className="card animate__flip" style={{width: '18rem'}}>
      <img src={url} alt = {title}/>
        <div className="card-body">
          <h5 class="card-title">{title}</h5>
        </div>
      </div>
    </div>
  )
}

export default PokemonItem;