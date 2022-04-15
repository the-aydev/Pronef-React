import { Download, Features, SectionWrapper } from './components';
import { homeHero, homeCards, feature, mockup } from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling and Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 2+ million people using ProNef Marketplace."
        showBtn
        mockupImg={homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace."
        mockupImg={homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is build Expo which runs natively on all users devices. You can easily get your app into peoples hands"
        mockupImg={feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second screen shows the details of each specific."
        mockupImg={mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
          <span className='bold'>the-Aydev</span></p>
      </div>
    </>
  );
};

export default App;
