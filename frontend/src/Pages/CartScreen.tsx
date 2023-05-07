import { FC, useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import EmptyCard from '../components/EmptyCard';
import { texte } from '../data';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import { AppDispatch } from '../redux/store';

const CartScreen: FC<any> = (): JSX.Element => {
  const cart = useSelector((state: any) => state.cart);
  const { cartItems } = cart;
  const letsGoTo = useNavigate();
  const [params] = useSearchParams();
  const isMobile = useSelector((state: any) => state.isMobile.isMobile);
  const dispatch: AppDispatch = useDispatch();
  const removeFromCardHandler = (productId: string) => {
    dispatch(removeFromCart(productId));
  };
  const checkoutHandler = () => {
    letsGoTo('/signin?redirect=shipping');
  };

  useEffect(() => {
    const ProductId = params.get('ProductId');
    const quantity = params.get('quantity');
    if (ProductId) {
      dispatch(addToCart(ProductId, quantity));
    }
  }, [dispatch, params]);

  return (
    <>
      {cartItems.length === 0 ? (
        <>
          <EmptyCard />
        </>
      ) : (
        <div
          className='table-users'
          style={{
            width: isMobile ? '90%' : '80%',
            marginTop: isMobile ? '20px' : '',
          }}
        >
          <div className='header '>{texte.Cart.cart.en}</div>
          <table className='table'>
            <tbody style={{ display: 'flex', flexDirection: 'column' }}>
              {!isMobile && (
                <tr
                  className='table-tr '
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  {texte.Cart.tab.en.map((td: string) => (
                    <td
                      key={td}
                      className='table-td font-secondary xlarge xbold'
                    >
                      {td}
                    </td>
                  ))}
                </tr>
              )}

              {cartItems.map((item: any, index: number) => (
                <tr
                  className='table-tr'
                  key={index}
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <td className='table-td'>
                    <img src={item.image} alt={item.name} className='small' />
                  </td>
                  <td className='table-td'>
                    <Link
                      to={'/product/' + item.product}
                      className='link font-secondary large xbold'
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className='table-td'>
                    <select
                      value={item.quantity}
                      className={`font-secondary large xbold ${
                        index % 2 === 0 ? 'lightbg' : 'primary'
                      }`}
                      onChange={(e) =>
                        dispatch({
                          type: addToCart(item.product, e.target.value),
                        })
                      }
                    >
                      {[...(Array(item.countInStock).keys() as any)].map(
                        (x) => (
                          <option key={x} value={x + 1}>
                            {x + 1}
                          </option>
                        )
                      )}
                    </select>
                  </td>
                  <td className='table-td'>
                    <Button
                      onClick={() => removeFromCardHandler(item.product)}
                      className='secondary'
                    >
                      <BsTrash size={25} color='#ffffff' />
                    </Button>
                  </td>
                  <td className='table-td font-secondary large xbold'>
                    {item.price}
                    {texte.Terms.devise.en}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='header'>{texte.Terms.total}</div>
          <table className='table'>
            <tbody>
              <tr className='table-tr'>
                <td className='table-td font-secondary large xbold'>
                  {cartItems.reduce(
                    (a: any, c: any) => a + parseInt(c.quantity),
                    0
                  )}{' '}
                  Items
                </td>
                <td className='table-td font-secondary large xbold'>
                  {cartItems.reduce(
                    (a: any, c: any) => a + c.price * c.quantity,
                    0
                  )}
                  {texte.Terms.devise.en}
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type='button'
            onClick={checkoutHandler}
            className='primary block'
            disabled={cartItems.length === 0}
          >
            <AiOutlineShoppingCart size={20} />
            {texte.Panier.checkout.en}
          </button>
        </div>
      )}
    </>
  );
};
export default CartScreen;
