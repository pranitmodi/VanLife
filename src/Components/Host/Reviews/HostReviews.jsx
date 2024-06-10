import './HostR.css'
import { useEffect, useState } from 'react'
import data from './dataR.js'

const HostReviews = () => {

  const [rating, setrating] = useState([1,2,3,4,5,4,3,2,1,1,4,4,4,4,4,2,2,2,2,1,1,5,5,5,5,5,5,2,3,4,5,5,5,5,5,5,5,5,3,3,3,3,4])
  const [avgR, setavgR] = useState("0.0")
  const [review, setreview] = useState(data)

  const rat = (a,b,c) => {
    return(
      <div key={a} className="rat_main">
        <p>{a} {a>1 ? "stars" : "star"}</p>
        <div className="color">
          <div style={{width: `${b}%`}} className="cover">
            .
          </div>
        </div>
        <p>{c}%</p>
      </div>
    )
  }

  const calAvg = () => {
      let sum = 0
      let cout = 0

      rating.map(ele => {
        sum = sum + ele
        cout = cout + 1
      })

      let avg = sum/cout
      setavgR(`${avg.toFixed(2)}`)
  }

  useEffect(() => {
    calAvg()
  },[])

  const calc = () => {
      const all = [0,0,0,0,0]

      const allR = []

      let cout = 0

      rating.map(ele => {
        all[ele-1]++
        cout = cout + 1
      })

      for(let i=5; i>=1; i--)
        {
          let w = Math.trunc((all[i-1]/cout)*100)
          allR.push(rat(i,w,w))
        }
      
      return allR
  }

  const allRev = () => {
      const allR = []

      const stars = (a) => {
        let str = ""
        for(let i=1; i<=a; i++)
          {
            str = "⭐" + str
          }
        return str
      }

      review.map(ele => {
        allR.push(
          <div className="rev_main">
            <div className="stars">{stars(ele.stars)}</div>
            <div className="rev_text">
              <h4>{ele.name}</h4>
              <h4 className='date'>{ele.date}</h4>
            </div>
            <h5>{ele.desc}</h5>
          </div>
        )
      })

      return allR
  }

  return (
    <div className="reviews_main">
      <div className="top">
        <h1>Your Reviews</h1>
        <p>last <span>30 days</span></p>
      </div>
      <div className="second">
        <h1>{avgR}</h1>
        <p>⭐ overall rating</p>
      </div>
      <div className="sliders">
        {calc()}
      </div>
      <h3>Reviews {`(${rating.length})`}</h3>
      <div className="all_revs">
        {allRev()}
      </div>
    </div>
  )
}

export default HostReviews