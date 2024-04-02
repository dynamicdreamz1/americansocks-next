

import styles from "../../src/app/css/page.module.css";
import Banner from "./component/Banner";
import Category from "./component/Category";
import Ctabanner from "./component/Ctabanner";
import Fullbanner from "./component/Fullbanner";
import Productslider from "./component/Productslider";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
       
        <Banner />
        <Fullbanner />
        <Category />
        <Ctabanner />
        <Productslider />
  
      </div>
    </main>
  );
}
