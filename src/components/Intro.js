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
        <img src={cover} alt="Weekly Poem Cover Art"/>
        <h2> Weekly Poem</h2>
        <p>
          Join{' '}
          <a href="https://twitter.com/swartchris8">Christiaan Swart</a> for a weekly poem
        </p>

        <Subscribe />
      </div>
    )
  }
}

export default Intro
