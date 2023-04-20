import { iFruit } from "../app"

interface iFruitCardProps{
    fruit: iFruit;
}

export const FruitCard = ({ fruit }: iFruitCardProps) => {

    return(
        <li key={fruit.id}>
            <h3>{fruit.name}</h3>
            <p>{fruit.category}</p>
            <p>{fruit.price}</p>
        </li>
    )
}