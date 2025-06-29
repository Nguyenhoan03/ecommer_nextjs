import Image from "next/image"
import Link from "next/link"
import Button from "../Button"
import { BaseCardItem } from "@/types/BaseCardItem"

interface CategoryProps {
    item: BaseCardItem
}

const CardTopCategory = ({ item }: CategoryProps) => {
    return (
        <div className="top-categories__card">
            <div className="top-categories__img-wrapper">
                <div className="top-categories__img-wrapper__transition">
                    <Image
                        src={item.img}
                        alt={item.name}
                        className="top-categories__img"
                        width={200}
                        height={200}
                    />
                    <Button className="top-categories__btn">
                        <Link href={item.name}>View Shop</Link>
                    </Button>
                </div>
            </div>
            <div className="top-categories__content z-3">
                <div className="top-categories__name">{item.name}</div>
                <div className="top-categories__price">{item.price}</div>
            </div>
        </div>
    )
}

export default CardTopCategory
