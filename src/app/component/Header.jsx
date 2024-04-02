import React from 'react'
import styles from "../css/header.module.css";

export default function Header() {
  return (
    <header>
        <div className={styles.header_main_wrap}>
            <div className="container">
                <div className={styles.header_wrapper}>
                    <div className={styles.header_right}>
                        <ul className={styles.menu_wrap}>
                            <li>
                                <a href="/catalouge">Catalouge</a>
                                {/* Dropdown Start */}
                                <div className={styles.dropdown_menu}>
                                    <div className={styles.dropdown_wrap}>
                                        <div className={styles.category_link}>
                                            <div className={styles.category_header}>
                                                <a href="/catalouge"><h3>CATALOGUE</h3></a>
                                                <a href="/shop" className={styles.btn}>shop all</a>
                                            </div>

                                            <div className={styles.category_menu_wrap}>
                                                <div className={styles.category_menu}>
                                                    <h4><a href="/catalouge">socks</a></h4>
                                                    <ul>
                                                        <li><a href="/shop">Signature</a></li>
                                                        <li><a href="/shop">Mid High</a></li>
                                                        <li><a href="/shop">Classics</a></li>
                                                        <li><a href="/shop">Ankle High</a></li>
                                                        <li><a href="/shop">Knee High</a></li>
                                                        <li><a href="/shop">Ultra High</a></li>
                                                        <li><a href="/shop">Snow</a></li>
                                                        <li><a href="/shop">Giftboxes</a></li>
                                                    </ul>

                                                    <h4><a href="/catalouge">UNDERWEAR</a></h4>
                                                </div>

                                                <div className={styles.category_menu}>
                                                    <h4><a href="/catalouge">CLOTHING</a></h4>
                                                    <ul>
                                                        <li><a href="/shop">T-shirts</a></li>
                                                        <li><a href="/shop">Sweatshirts</a></li>
                                                        <li><a href="/shop">Jackets & Coats</a></li>
                                                        <li><a href="/shop">Accesories</a></li>
                                                    </ul>

                                                    <h4><a href="/catalouge">headwear</a></h4>
                                                    <h4><a href="/catalouge/neo-signs">neon signs</a></h4>
                                                    <h4><a href="/catalouge/displays">displays</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.product_image_wrap}>
                                            <div className={styles.product_image_box}>
                                                <div className={styles.imagebox}>
                                                    <img src="../../images/product-header-1.png"/>  
                                                </div>
                                                <h3>back in stock</h3>
                                            </div>

                                            <div className={styles.product_image_box}>
                                                <div className={styles.imagebox}>
                                                    <img src="../../images/product-header-2.png"/>  
                                                </div>
                                                <h3>new arrivals</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Dropdown End */}
                            </li>
                            <li><a href="#">order form</a></li>
                        </ul>
                    </div>
                    {/* Header Logo */}
                    <div className={styles.header_logo}>
                        <a href="/">
                            <img src="../../images/logo.png"/>   
                        </a>
                    </div>
                    {/* Social Share */}
                    <div className={styles.header_left}>
                        <div className={styles.social_media_logo}>
                            <a href="">
                                <img src="../../images/facebook.png"/>
                            </a>
                            <a href="">
                                <img src="../../images/twitter.png"/>
                            </a>
                            <a href="">
                                <img src="../../images/instagram.png"/>
                            </a>
                            <a href="">
                                <img src="../../images/youtube.png"/>
                            </a>
                            <a href="">
                                <img src="../../images/email.png"/>
                            </a>
                            <a href="">
                                <img src="../../images/search.png"/>
                            </a>
                            <a href="/cart">
                                <img src="../../images/cart-bag.png"/>
                            </a>
                            <a href="/myaccount">
                                <img src="../../images/user-account.png"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
