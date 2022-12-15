import Link from 'next/link';
import ItemStyles from '../styles/ItemStyles';
import Title from '../styles/Title';
import PriceTag from '../styles/PriceTag';

export default function ItemOverview({ product }) {
    const { id, pricing, name, thumbnail } = product.node
    const productPrice = pricing.priceRange.start.gross.amount

    return (
        <ItemStyles>
            <Link href={`/product/${id}`}>
                <img
                    src={thumbnail?.url}
                    alt={thumbnail?.alt && name}
                />
                <Title>
                    <Link href={`/product/${id}`}>{name}</Link>
                </Title>
                <PriceTag>£{productPrice.toFixed(2)}</PriceTag>
            </Link>
            <div className="buttonList">
                <button onClick={() => console.log(`adding ${name} to cart`)}>Add to cart</button>
            </div>
        </ItemStyles>
    );
}
