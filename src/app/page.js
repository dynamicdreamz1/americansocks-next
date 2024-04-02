

import Banner from "@/component/Banner";
import Fullbanner from "@/component/Fullbanner";
import Category from "@/component/Category";
import Ctabanner from "@/component/Ctabanner";
import Productslider from "@/component/Productslider";
import styles from "../../src/app/css/page.module.css";


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
