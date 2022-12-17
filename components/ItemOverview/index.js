import Link from "next/link";
import { useEffect } from "react";

import productFallBackImage from "public/images/productFallBackImage.jpg";
import Image from "../Image";
import ItemStyles from "../styles/ItemStyles";
import Title from "../styles/Title";
import PriceTag from "../styles/PriceTag";
import StyledButton from "../styles/ButtonStyles";
import useCart from 'utils/useCart'

export default function ItemOverview({ product }) {
  const { addToCart } = useCart();
  const { id, pricing, name, thumbnail } = product.node;
  const productPrice = pricing.priceRange.start.gross.amount;
  const imageThumbnail = thumbnail?.url ? thumbnail?.url : productFallBackImage;

  return (
    <ItemStyles>
      <Link href={`/product/${id}`}>
        <Image src={imageThumbnail} alt={thumbnail?.alt} productName={name} />
        <Title>
          <Link tabIndex={-1} href={`/product/${id}`}>
            {name}
          </Link>
        </Title>
        <PriceTag>£{productPrice.toFixed(2)}</PriceTag>
      </Link>
      <div className="buttonList">
        <StyledButton onClick={() => addToCart(product)}>
          Add to cart
        </StyledButton>
      </div>
    </ItemStyles>
  );
}
