import React from 'react'
import './portfolio.css';
import DEPLOYEDPROJECT1 from '../../assets/deployedproject1.png'
import MYTHICALMUTTS from '../../assets/mythicalmutts.png'
import NOTES from '../../assets/notes.png'
import PASSWORDGEN from '../../assets/passwordgen.png'
import QUIZ from '../../assets/quiz.png'
import WEATHER from '../../assets/weather.png'
import WORKDAYSCHEDULE from '../../assets/workdayschedule.png'
import GROOVECRITIC from '../../assets/groovecritic.png'

const data = [
  {
    id: 1,
    image: MYTHICALMUTTS,
    title: 'Mythical Mutts Adoption Site',
    github: "https://github.com/Azurelo/friendly-octo-palm-tree",
    demo: "https://desolate-refuge-19752.herokuapp.com/"
  },
  {
    id: 2,
    image: DEPLOYEDPROJECT1,
    title: 'Resplendent Recipe Finder',
    github: "https://github.com/krchandler27/resplendent-recipe-finder",
    demo: "https://krchandler27.github.io/resplendent-recipe-finder/"
  },
  {
    id: 3,
    image: NOTES,
    title: 'Note Taker',
    github: "https://github.com/kthlnt/Note-Taker",
    demo: "https://dashboard.heroku.com/apps/note-taking-helper-app"
  },
  {
    id: 4,
    image: WEATHER,
    title: 'Weather App',
    github: "https://github.com/kthlnt/Weather-Dashboard",
    demo: "https://kthlnt.github.io/Weather-Dashboard/"
  },
  {
    id: 5,
    image: WORKDAYSCHEDULE,
    title: 'A Schedule For Your Day',
    github: "https://github.com/kthlnt/Work-Day-Scheduler",
    demo: "https://kthlnt.github.io/Work-Day-Scheduler/"
  },
  {
    id: 6,
    image: QUIZ,
    title: 'Timed Quiz',
    github: "https://github.com/kthlnt/Timed-Quiz",
    demo: "https://kthlnt.github.io/Timed-Quiz/"
  },
  {
    id: 7,
    image: PASSWORDGEN,
    title: 'Password Generator',
    github: "https://github.com/kthlnt/Password-Generator",
    demo: "https://kthlnt.github.io/Password-Generator/"
  },
  {
    id: 8,
    image: GROOVECRITIC,
    title: 'Groove Critic',
    github: "https://github.com/kthlnt/reactPortfolioFinal",
    demo: "https://kthlnt.github.io/reactPortfolioFinal/"
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }



      </div>
    </section>
  )
}

export default Portfolio