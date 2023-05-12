/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import BackImages from '../components/BackImages'
import Header from '../components/Header'
import ExchangeRate from '../components/ExchangeRate'
import SendMoney from '../components/SendMoney'
import Footer from '../components/Footer'
function Index() {
    return (
        <main className='min-h-screen h-screen w-full '>
          <section className='w-full relative min-h-[75%] flex flex-col items-center py-5 overflow-y-hidden overflow-x-hidden bg-lipanaBlue'>
           <BackImages/>
           <Header/>
           <ExchangeRate/>
           <SendMoney/>
          </section>
          <section className='w-full min-h-[25%] bg-lipanaDarkBlue '>
            <Footer/>
          </section>
        </main>
    )
}

export default Index
