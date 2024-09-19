// import React from 'react'
// import classes from './header.module.css';
// import { Link } from 'react-router-dom';
// import { useCart } from '../../hooks/useCart';
// import { useAuth } from '../../hooks/useAuth';

// export default function Header() {
//     const {user, logout} = useAuth();
//     const {cart} = useCart();


//     return <header className={classes.header}>
//         <div className={classes.container} >
//             <Link to="/" className={classes.logo}>
//                 Cong Huan!!!!
//             </Link>
//             <nav>
//                 <ul>
//                     {user ? (
//                         <li className={classes.menu_container}>
//                             {/* <Link to="/profile">{user.name}</Link> */}
//                             <Link to="/dashboard">{user.name}</Link>
//                             <div className={classes.menu}>
//                                 <Link to="/profile">Profile</Link>
//                                 <Link to="/orders">Order</Link>
//                                 <a onClick={logout}>Logout</a>
//                             </div>
//                         </li>
//                     ) : (
//                         <Link to="/Login">Login</Link>
//                     )}

//                     <li>
//                         <Link to="/cart">
//                             Cart
//                             {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     </header>
// }
import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useClear } from '../../hooks/useClear';
import { useAuth } from '../../hooks/useAuth';
export default function Header() {
  const { user } = useAuth();
  const { cart } = useCart();
  const { logout } = useClear(); // Sử dụng useEnhancedAuth thay vì useAuth

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          Cong Huan!!!!
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/dashboard">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Order</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to="/Login">Login</Link>
            )}

            <li>
              <Link to="/cart">
                Cart
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
