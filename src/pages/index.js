import React, { useState } from "react"
import PrimaryLayout from "../layout/PrimaryLayout"
import * as cls from "../css/Index.module.css"
import { graphql } from "gatsby"
import { Modal } from "../layout/Modal"
import { v4 as uuidv4 } from 'uuid';



const IndexPage = (props) => {
  console.log(props);
  const [show, setState] = useState(false)

  let showModal = () => {
    setState(true)
  }
  let hideModal = () => {
    setState(false)
  }

  console.log(props);
  const data = props.data.wpPage.ACF;


  let works = [];
  if (data.allWorks !== null) {
    works = data.allWorks.map((work) => {
      return (<div key={uuidv4()} className={cls.worksItem}>
        <img src={work.image.sourceUrl} alt={work.name.title} />
        <a target="_blank" rel="noreferrer" href={work.name.url} className={cls.worksName}>{work.name.title}</a>
        <span className={cls.worksDescription}>{work.descriptionSlide}</span>
      </div>)
    })
  }


  let suggest = (list) => {
    return list.map((item) => {
      return (<li key={uuidv4()}>
        {item.suggestion}
      </li>)
    })
  }


  let menu = props.pageContext.language === "ru_RU" ? props.data.allWpMenu.nodes[1] : props.data.allWpMenu.nodes[0]

  const bgFunction = (url) => {
    let mainBackground = {
      backgroundImage: `url(${url})`
    }
    return mainBackground
  }



  return (<PrimaryLayout menu={menu}>

    <main className={`container ${cls.main}`} style={bgFunction(data.mainBg.sourceUrl)}>


      <div className={cls.maintextwrapper}>
        <div className={cls.mainsubtitle}>
          {data.mainName}
        </div>
        <div className={cls.maintitle}>
          {data.mainTitle}
        </div>
        <div className={cls.mainsuggestion}>
          {data.mainSubitle}
        </div>

        <a className={cls.button} href="#works">
          {data.ainButtonText}
        </a>

      </div>

    </main>
    <section id="works" className={`container ${cls.works}`}>
      <div className={cls.sectiontitle}>
        {props.pageContext.language === "en_US" ? "My works" : "Мои работы"}
      </div>
      <div className={cls.workswrapper}>
        {data.allWorks ? works : ""}
      </div>
    </section>
    <section id="prices" className={`container ${cls.prices}`}>
      <div className={`${cls.sectiontitle} ${cls.pricetitle}`}>
        Стоимость разработки
      </div>
      <div className={cls.priceswrap}>
        <div className={cls.priceItem}>
          <ul>
            {suggest(data.landing)}
          </ul>
          <div className={cls.priceBtnwrapper}>
            <span className={cls.price}>
              от 300 $
            </span>
            <button className={`${cls.button} ${cls.buttonPrice}`}>
              Заказать сайт
            </button>
          </div>
        </div>

        <div className={cls.priceItem}>
          <ul>
            {suggest(data.corporate)}
          </ul>
          <div className={cls.priceBtnwrapper}>
            <span className={cls.price}>
              от 300 $
            </span>
            <button className={`${cls.button} ${cls.buttonPrice}`}>
              Заказать сайт
            </button>
          </div>
        </div>

        <div className={cls.priceItem}>
          <ul>
            {suggest(data.ecommerce)}
          </ul>
          <div className={cls.priceBtnwrapper}>
            <span className={cls.price}>
              от 300 $
            </span>
            <button className={`${cls.button} ${cls.buttonPrice}`} onClick={showModal}>
              Заказать сайт
            </button>
          </div>
        </div>
      </div>
    </section>
    <Modal lang={props.pageContext.language} handleClose={hideModal} show={show} />
  </PrimaryLayout>
  )
}

export default IndexPage


export const query = graphql`
  query MyQueryEn($language: String) {
     allWpMenu{
    nodes {
      locations
      slug
    }
 	 },
  wpPage(language: {locale: {eq: $language}}) {
    ACF {
      ainButtonText
      mainName
      mainSubtitle
      mainTitle
      mainBg {
        sourceUrl
      }
      allWorks {
        descriptionSlide
        image {
          sourceUrl
        }
        name {
          url
          title
          target
        }
      }
      corporate {
        suggestion
      }
      landing {
        suggestion
      }
      ecommerce {
        suggestion
      }
    }
  }
}
`