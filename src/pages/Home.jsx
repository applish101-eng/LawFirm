import SEO from "../components/SEO";
import Hero from "./Hompage/Hero";
import Services from "./Hompage/Services";
import Faq from "./Hompage/Faq";
const Home = () => {
  return (
    <>
      <SEO
        title="Kathmandu Lawyer | Liberty Legal Service Nepal | Advocate Meera Maharjan"
        description="Trusted legal services in Nepal led by Advocate Meera Maharjan. Expert legal consultation in Kathmandu for individuals, businesses, and foreign investors."
        canonical="https://libertylegal.com.np/"
      />
      <Hero />
      <Services />
      <Faq />
    </>
  );
};

export default Home;
