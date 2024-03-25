import React from 'react'

import Card from 'react-bootstrap/Card';

function HomePage() {
  return (
    

<Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Abs Workout</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Build your Abs greater</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Card.Link href="#"><svg width="73" height="57" viewBox="0 0 73 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1172_3663)">
<mask id="path-1-inside-1_1172_3663" fill="white">
<path d="M4 24C4 10.7452 14.7452 0 28 0H45C58.2548 0 69 10.7452 69 24C69 37.2548 58.2548 48 45 48H28C14.7452 48 4 37.2548 4 24Z"/>
</mask>
<path d="M4 24C4 10.7452 14.7452 0 28 0H45C58.2548 0 69 10.7452 69 24C69 37.2548 58.2548 48 45 48H28C14.7452 48 4 37.2548 4 24Z" fill="white"/>
<path d="M59.7071 24.7071C60.0976 24.3166 60.0976 23.6834 59.7071 23.2929L53.3431 16.9289C52.9526 16.5384 52.3195 16.5384 51.9289 16.9289C51.5384 17.3195 51.5384 17.9526 51.9289 18.3431L57.5858 24L51.9289 29.6569C51.5384 30.0474 51.5384 30.6805 51.9289 31.0711C52.3195 31.4616 52.9526 31.4616 53.3431 31.0711L59.7071 24.7071ZM15 25H59V23H15V25ZM28 2H45V-2H28V2ZM45 46H28V50H45V46ZM28 46C15.8497 46 6 36.1503 6 24H2C2 38.3594 13.6406 50 28 50V46ZM67 24C67 36.1503 57.1503 46 45 46V50C59.3594 50 71 38.3594 71 24H67ZM45 2C57.1503 2 67 11.8497 67 24H71C71 9.6406 59.3594 -2 45 -2V2ZM28 -2C13.6406 -2 2 9.6406 2 24H6C6 11.8497 15.8497 2 28 2V-2Z" fill="black" mask="url(#path-1-inside-1_1172_3663)"/>
</g>
<defs>
<filter id="filter0_d_1172_3663" x="0" y="0" width="73" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1172_3663"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1172_3663" result="shape"/>
</filter>
</defs>
</svg></Card.Link>
      {/* <Card.Link href="#"></Card.Link> */}
    </Card.Body>
  </Card>

  )
}

export default HomePage