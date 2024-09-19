import { useAuth } from './useAuth';
import { useCart } from './useCart';

export const useClear = () => {
  const { logout: authLogout } = useAuth();
  const { clearCart } = useCart();

  const logout = () => {
    authLogout(); // Đăng xuất khỏi tài khoản
    clearCart(); // Xóa giỏ hàng
  };

  return { logout };
};
