import { iFruit } from "../app"
import { FruitCard } from "./FruitCard"

interface iFruitListProps{
    fruitList: iFruit[];
}

export const FruitList = ({ fruitList }: iFruitListProps) => {
    return(
        <div className="listContainer">
            <h2>Lista de frutas</h2>
            <ul>
            {fruitList.map(fruit => (
                <FruitCard fruit={fruit} />
            ))}
            </ul>
        </div>
    )
}