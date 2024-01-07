import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, mode, cart }) {
  return (
    <main>
      <Header mode={mode} cart={cart} />
      {children}
      <Footer />
    </main>
  );
}
