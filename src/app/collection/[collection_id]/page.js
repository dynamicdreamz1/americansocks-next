import React from 'react'
import Shop from "@/component/Shop";
import Shopfilter from "@/component/Shopfilter";

export default function page() {
    return (
      <main >
        <div>
          <Shopfilter />
          <Shop />
        </div>
      </main>
    );
}
