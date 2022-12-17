import { useState } from 'react'
import styled from 'styled-components';
import Head from 'next/head';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    grid-auto-flow: initial;
  }
  
  img {
    object-fit: contain;
  }
  .main-image {
    display: block;
    width: 100%;
    max-height: 300px;
  }
  .sub-images-container {
    display: flex;

    img {
      width: 45%;
      border-radius: 50%;
    }
  }

  .item-price {
    display: flex;
    justify-content: center;
  }
`;

export default function SingleProduct(product) {
  const { name, pricing, description, media } = product.product
  const productPrice = pricing.priceRange.start.gross.amount
  const descriptionObject = JSON.parse(description);
  const [activeImage, setActiveImage] = useState(media[0])

  return (
    <ProductStyles>
        <Head>
            <title>{name}</title>
        </Head>
        <div>
          <img
            className="main-image"
            data-testid="main-product-image"
            src={activeImage.url}
            alt={activeImage.alt && name}
          />
          <div className='sub-images-container'>
            {media.map((media, index) => (
              <img
                data-testid={`sub-image-${index}`}
                src={media?.url}
                alt={media?.alt && name}
                onClick={() => setActiveImage(media)}
              />
            ))}
          </div>
          <div>
            <p className='item-price'>£{productPrice.toFixed(2)}</p>
          </div>
        </div>
        <div className="details">
            <h2>{name}</h2>
            {descriptionObject?.blocks?.map(description => (
              <p dangerouslySetInnerHTML={{ __html: description.data.text }} />
            ))}
        </div>
    </ProductStyles>
  );
}