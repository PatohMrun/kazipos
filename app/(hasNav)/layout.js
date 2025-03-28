import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HasNavLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}
