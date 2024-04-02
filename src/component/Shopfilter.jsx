import React from 'react'
import styles from "../app/css/shopfilter.module.css";

export default function Shopfilter() {
  return (
    <section className={styles.shop_filter}>
        <div className="container">
            <div className={styles.shop_wrap}>
                <div className={styles.shop_filter_left}>
                    {/* Search button */}
                    <a href="javascript:void(0)" className={styles.search_btn}>
                        Search By
                    </a>
                    {/* Filter box */}
                    <div className={styles.filter_box}>
                        <div className={styles.filter_box_wrap}>
                            <h3 class={styles.filter_title}>FILTROS</h3>
                            <div class={styles.accordion_item}>
                                <div className={styles.accrodion_title}>
                                    <h4>PRECIOS</h4>
                                </div>
                                <div className={styles.accrodion_content}>
                                    <div className={styles.filter_price}>
                                        <input type="range" id="vol" name="vol" min="0" max="100" />
                                    </div>
                                </div>
                            </div>

                            <div class={styles.accordion_item}>
                                <div className={styles.accrodion_title}>
                                    <h4>TALLA</h4>
                                </div>
                                <div className={styles.accrodion_content}>
                                    <ul className={styles.filter_size}>
                                        <li>
                                            <label>
                                                <input type="checkbox" class={styles.filter_checkbox}  />
                                                    <span>XS</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" class={styles.filter_checkbox}  />
                                                    <span>S</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" class={styles.filter_checkbox}  />
                                                    <span>M</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" class={styles.filter_checkbox}  />
                                                    <span>L</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" class={styles.filter_checkbox}  />
                                                    <span>XL</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class={styles.accordion_item}>
                                <div className={styles.accrodion_title}>
                                    <h4>color</h4>
                                </div>
                                <div className={styles.accrodion_content}>
                                    <div className={styles.filter_color}>
                                        <span className={`${styles.color} ${styles.black}`}></span>
                                        <span className={`${styles.color} ${styles.yellow}`}></span>
                                        <span className={`${styles.color} ${styles.red}`}></span>
                                        <span className={`${styles.color} ${styles.purple}`}></span>
                                        <span className={`${styles.color} ${styles.darkgreen}`}></span>
                                        <span className={`${styles.color} ${styles.blue}`}></span>
                                        <span className={`${styles.color} ${styles.green}`}></span>
                                    </div>
                                </div>
                            </div>

                            <div class={styles.accordion_item}>
                                <div className={styles.accrodion_title}>
                                    <h4>COLECCIÓN</h4>
                                </div>
                                <div className={styles.accrodion_content}>
                                    <div className={styles.filter_collection}>
                                        <p>SS24</p>
                                        <p>FW23</p>
                                        <p>SS23</p>
                                        <p>FW22</p>
                                        <p>SS22</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Shop Sorting */}
                <div className={styles.sorting}>
                    <select >
                        <option >Default sorting</option>
                        <option >Date</option>
                        <option >A to Z</option>
                    </select>
                </div>
            </div>
        </div>
    </section>
  )
}
