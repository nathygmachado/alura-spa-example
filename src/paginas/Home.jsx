import React from 'react'
import ListaCategorias from '../Components/ListaCategorias'
import ListPost from '../Components/ListaPost'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategorias />
      <ListPost url={"/posts"} />


    </main>
  )
}

export default Home
