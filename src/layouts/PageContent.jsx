import Footer from "./Footer";
import Header from "./Header";

export default function PageContent({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
