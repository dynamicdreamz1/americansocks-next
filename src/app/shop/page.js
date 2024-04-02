import React from 'react'
import Shopfilter from '../component/Shopfilter';
import Shop from '../component/Shop';


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
