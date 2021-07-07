import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { UIActions } from '../../store/ui';
import { useSelector } from 'react-redux';
const CartButton = (props) => {

  const dispatch=useDispatch()
 const  handleToggle =()=>{
  dispatch(UIActions.toggle());
 }
 const quantity=useSelector(state=>state.cart.totalQuantity)
  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
