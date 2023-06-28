import React, { useState,useEffect } from 'react'

export const Loader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        setTimeout(() => setLoading(false),3000)
    },[])

  return (
    <div>
        <h2 style={loading ? {display:'flex', position:'absolute'} : {display:'none'}}>
            {loading ? 'cargando' : 'termino'}
        </h2>
    </div>
  )
}

export default Loader