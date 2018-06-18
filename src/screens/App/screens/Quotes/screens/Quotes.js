import React from 'react'
import { SideMenuBar } from 'screens/App/components/SideMenuBar'
import './Quotes.css'

const Quotes = () => (
  <div className="quotesPageContent">
    <SideMenuBar />
    <div className="message">
      <h1>Melika</h1>
      <p>Welcome to Melika. Just a quote page demo. Good bye!</p>
    </div>
  </div>
)

export default Quotes
