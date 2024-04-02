
import Productdeatils from "@/component/Productdeatils";
import Relatedproductslider from "@/component/Relatedproductslider";
import styles from "../../css/page.module.css";

export default function Product_deatil() {
    return  <main className={styles.main}>
    <div className={styles.container}>
      <Productdeatils />
      <Relatedproductslider />
    </div>
  </main>
  }