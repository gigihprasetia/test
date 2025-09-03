import Bookings from "@/components/features/Bookings";
import Content from "@/components/features/Content";
import Footer from "@/components/features/Footer";
import Jumbotron from "@/components/features/Jumbotron";
import Navbar from "@/components/features/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Bookings />
      <Content />
      <Footer />
    </>
  );
}
