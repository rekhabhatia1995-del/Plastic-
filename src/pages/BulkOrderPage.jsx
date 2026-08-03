import React from 'react'
import BulkBanner from '../components/bulkorderpage/BulkBanner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhyChooseBulk from '../components/bulkorderpage/WhyChooseBulk'
import BulkProducts from '../components/bulkorderpage/BulkProducts'
import IndustriesWeServe from '../components/bulkorderpage/IndustriesWeServe'
import BulkOrderProcess from '../components/bulkorderpage/BulkOrderProcess'
import BulkInformation from '../components/bulkorderpage/BulkInformation'
import CustomSolutions from '../components/bulkorderpage/CustomSolutions'
import ReadyToPlaceOrder from '../components/bulkorderpage/ReadyToPlaceOrder'

const BulkOrderPage = () => {
  return (
    <div>
      <Header />
   <BulkBanner />
   <WhyChooseBulk />
   <BulkProducts />
   <IndustriesWeServe />
   <BulkOrderProcess />
   <BulkInformation />
   <CustomSolutions />
   <ReadyToPlaceOrder />
   <Footer />
    </div>
  )
}

export default BulkOrderPage
