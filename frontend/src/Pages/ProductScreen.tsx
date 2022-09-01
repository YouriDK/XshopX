import React, { useEffect, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { detailsProduct } from '../redux/actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MesssageBox';
import Rating from '../components/Rating';
import '../css/productPage.css';
import { secondColor, texte } from '../data';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
const ProductScreen: FC<any> = (props: any): JSX.Element => {
  const [quantity, setquantity] = useState(1);

  const productDetails = useSelector((state: any) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  const handleAddtoCart = () => {
    props.history.push(
      '/cart?id=' + props.match.params.id + '&quantity=' + quantity
    );
  };
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant='danger' error={error} />
  ) : (
    <div className='card' style={{ marginTop: '50px' }}>
      <Link to='/' className='link'>
        <div className='card__title icon'>
          <BsFillArrowLeftCircleFill size={20} className='primary' />
          <h3 className='font-button'>{texte.Terms.back.en}</h3>
        </div>
      </Link>
      <div className='card__body'>
        <div className='half'>
          <div className='image'>
            <img className='large img' src={product.image} alt={product.name} />
          </div>
        </div>
        <div className='half flex columns around'>
          <div className='featured_text'>
            <h1 className='font-secondary '>{product.brand}</h1>
            <p className='sub font-primary'>{product.name}</p>
            <p className='price font-secondary bold'>${product.price}</p>
          </div>
          <div className='description font-secondary'>
            <p>{product.description}</p>
          </div>
          {product.countInStock > 0 ? (
            <div className='row'>
              <span className='stock large'>
                {' '}
                {texte.Stock.in_stock.en}{' '}
                <AiOutlineCheck size={25} color={secondColor} />
              </span>
              <div>
                <select
                  value={quantity}
                  onChange={(e) => {
                    setquantity(e.target.value as any);
                  }}
                >
                  {[...(Array(product.countInStock).keys() as any)].map((x) => (
                    <option key={x} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <span className='no_stock'>{texte.Stock.no_stock.en}</span>
          )}
        </div>
      </div>
      <div className='card__footer'>
        <div className='recommend'>
          <div className='reviews '>
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
            <span className='font-secondary xlarge bold'>
              {product.numReviews} {texte.Terms.reviews.en}{' '}
            </span>
          </div>
        </div>
        <div className='action'>
          <Button
            type='button'
            className='primary'
            onClick={handleAddtoCart}
            disabled={product.countInStock === 0}
          >
            {texte.Panier.add.en}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProductScreen;
