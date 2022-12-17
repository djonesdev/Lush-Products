import Link from 'next/link';
import Image from 'next/image'

import productFallBackImage from '../../public/images/productFallBackImage.jpg'
import ItemStyles from '../styles/ItemStyles';
import Title from '../styles/Title';
import PriceTag from '../styles/PriceTag';
import StyledButton from '../styles/ButtonStyles';

export default function ItemOverview({ product }) {
    const { id, pricing, name, thumbnail } = product.node
    const productPrice = pricing.priceRange.start.gross.amount
    const imageThumbnail = thumbnail?.url ? thumbnail?.url : productFallBackImage

    return (
        <ItemStyles>
            <Link href={`/product/${id}`}>
                <Image
                    src={imageThumbnail}
                    alt={thumbnail?.alt || name}
                    width={500}
                    height={500}
                />
                <Title>
                    <Link tabIndex={-1} href={`/product/${id}`}>{name}</Link>
                </Title>
                <PriceTag>£{productPrice.toFixed(2)}</PriceTag>
            </Link>
            <div className="buttonList">
                <StyledButton onClick={() => console.log(`adding ${name} to cart`)}>Add to cart</StyledButton>
            </div>
        </ItemStyles>
    );
}
