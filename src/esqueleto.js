import React from 'react'
import App from './App';
import './style.css'

function Esqueleto(){
const reset =()=>{
	window.location.reload();
}

	return(
<>
Ola mundo
<div className='jogo'>
<App/>
<button className='btn btn-success' onClick={reset}>Reset</button>
</div>
</>
		)
}
export default Esqueleto;