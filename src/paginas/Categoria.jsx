import React, { useEffect, useState } from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/blog.css'
import ListaCategorias from '../Components/ListaCategorias'
import ListPost from '../Components/ListaPost'
import SubCategoria from './SubCategoria'

function Categoria() {
    const { id } = useParams();
    const { url, path } = useRouteMatch()
    const [subCategorias, setSubCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {setSubCategorias(categoria.subcategorias)})
    }, [id]);
    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>
        <ListaCategorias />
        <ul className="lista-categorias container flex">
            {subCategorias.map((subcategoria) => {
            return(
                
                <li 
                    className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  
                    key={subcategoria}>
                        
                    <Link to={`${url}/${subcategoria}`}>
                        {subcategoria}
                    </Link>
                </li>
            )})
        }
        </ul>
        <Switch>
            <Route exact path={`${path}/`}>
                <ListPost url={`/posts?categoria=${id}`} />
            </Route>
            <Route exact path={`${path}/:subcategoria`}>
                <SubCategoria />
            </Route>
        </Switch>
        </>
    )
}

export default Categoria