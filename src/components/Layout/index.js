import { Menu } from '../Menu';

export function Layout({ children }) {
  return (
    <>
      <Menu />
      { children }
    </>
  );
}
