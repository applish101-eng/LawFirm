import SEO from "../components/SEO";
import Hero from "./Hompage/Hero";
import Services from "./Hompage/Services";
import Faq from "./Hompage/Faq";
const Home = () => {
  return (
    <>
      <SEO
        title="Liberty Legal Service & Research Center | Law Firm in Kathmandu, Nepal"
        description="Trusted legal services in Nepal led by Advocate Meera Maharjan. Expert legal consultation in Kathmandu for individuals, businesses, and foreign investors."
        canonical="https://libertylegal.vercel.app/"
      />
      <Hero />
      <Services />
      <Faq />
    </>
  );
};

export default Home;
