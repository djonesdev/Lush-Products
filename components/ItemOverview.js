import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../utils/formatMoney';
import TestImage from '../Images/intergalactic_bath_bomb_2021-thumbnail-255x255.png'
// import DeleteProduct from './DeleteProduct';
// import AddToCart from './AddToCart';

export default function ItemOverview({ product }) {
  return (
    <ItemStyles>
      <img
        src={require('../Images/intergalactic_bath_bomb_2021-thumbnail-255x255.png')}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: '/update',
            query: {
              id: product.id,
            },
          }}
        >
          Edit ✏️
        </Link>
        {/* <AddToCart id={product.id} /> */}
        {/* <DeleteProduct id={product.id}>Delete</DeleteProduct> */}
      </div>
    </ItemStyles>
  );
}
