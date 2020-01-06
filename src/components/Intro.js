import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import cover from '../assets/poem_icon.jpg'
import Subscribe from './Subscribe'

class Intro extends React.Component {
  render() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: 'center',
        maxWidth: '472px',
        margin: '0 auto',
      }}>
        <img src={cover} alt="Daily Green Cover Art"/>

        <p>
          Join{' '}
          <a href="https://twitter.com/swartchris8">Christiaan Swart</a> and{' '}
          <a href="https://twitter.com/swartchris8">Shay Adetunji</a> for a biweekly showcase of Green companies that could help you.
        </p>

        <Subscribe />
      </div>
    )
  }
}

export default Intro
