import { useParams } from "react-router";
import ListPost from "../Components/ListaPost";

function SubCategoria() {
    const { subcategoria } = useParams();

    return(
        <ListPost url={`/posts?subcategoria=${subcategoria}`} />
    )
}
export default SubCategoria;