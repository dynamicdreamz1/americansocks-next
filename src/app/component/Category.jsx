import React from 'react'
import styles from "../css/category.module.css";

export default function Category() {
  return (
    <section className={styles.categories}>
        <div className="container">
            <div className={styles.categories_wrap}>
                {/* box 1 */}
                <div className={styles.categories_box}>
                    <a href="/collection/ss24">
                        <div className={styles.categories_box_image}>
                            <img src="../../images/category-1.png"/>  
                        </div>
                        <h3>SS24</h3>
                    </a>
                </div>
                 
                {/* box 2 */}
                <div className={styles.categories_box}>
                    <a href="/collection/ankle-high">
                        <div className={styles.categories_box_image}>
                            <img src="../../images/category-2.png"/>  
                        </div>
                        <h3>ANKLE HIGH</h3>
                    </a>
                </div>
    
                {/* box 3 */}
                <div className={styles.categories_box}>
                    <a href="/collection/mid-high">
                        <div className={styles.categories_box_image}>
                            <img src="../../images/category-3.png"/>  
                        </div>
                        <h3>MID HIGH</h3>
                    </a>
                </div>
               
                {/* box 4 */}             
                <div className={styles.categories_box}>
                    <a href="/collection/signature">
                        <div className={styles.categories_box_image}>
                            <img src="../../images/category-4.png"/>  
                        </div>
                        <h3>SIGNATURE</h3>
                    </a>
                </div>
              
          
                {/* box 5 */}
                <div className={styles.categories_box}>
                    <a href="/collection/knee-high">
                        <div className={styles.categories_box_image}>
                            <img src="../../images/category-5.png"/>  
                        </div>
                        <h3>KNEE HIGH</h3>
                    </a>
                </div>
       
                {/* box 6 */}
                <div className={styles.categories_box}>
                    <a href="/collection/ultra-high">
                        <div className={styles.categories_box_image}>
                            <img src="../../images/category-6.png"/>  
                        </div>
                        <h3>ULTRA HIGH</h3>
                    </a>
                </div>

                {/* box 7 */}
                <div className={styles.categories_box}>
                    <a href="/collection/underware">
                        <div className={styles.categories_box_image}>
                            <img src="../../images/category-7.png"/>  
                        </div>
                        <h3>UNDERWEAR</h3>
                    </a>
                </div>

                {/* box 8 */}
                <div className={styles.categories_box}>
                    <a href="/collection/clothing">
                        <div className={styles.categories_box_image}>
                            <img src="../../images/category-8.png"/>  
                        </div>
                        <h3>CLOTHING</h3>
                    </a>
                </div>
              
                {/* box 9 */}
                <div className={styles.categories_box}>
                    <a href="/collection/accessories">
                        <div className={styles.categories_box_image}>
                            <img src="../../images/category-9.png"/>  
                        </div>
                        <h3>ACCESSORIES</h3>
                    </a>
                </div>
            
                {/* box 10 */}
                <div className={styles.categories_box}>
                    <a href="/collection/gift-box">
                        <div className={styles.categories_box_image}>
                            <img src="../../images/category-10.png"/>  
                        </div>
                        <h3>GIFT BOXES</h3>
                    </a>
                </div>

                {/* box 11 */}
                <div className={styles.categories_box}>
                    <a href="/collection/neon-signs">
                        <div className={styles.categories_box_image}>
                            <img src="../../images/category-11.png"/>  
                        </div>
                        <h3>NEON SIGNS</h3>
                    </a>
                </div>
               

                {/* box 12 */}
                <div className={styles.categories_box}>
                    <a href="/collection/displays">
                        <div className={styles.categories_box_image}>
                            <img src="../../images/category-12.png"/>  
                        </div>
                        <h3>DISPLAYS</h3>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
