import React, { useState } from "react"
import PrimaryLayout from "../layout/PrimaryLayout"
import * as cls from "../css/Index.module.css"
import { Modal } from "../layout/Modal"
import { v4 as uuidv4 } from 'uuid';

import swipe from "../images/hand.gif"

// Images

import bg from "../images/main-bg.jpg"
import Solar from "../images/Solarland.webp"
import NDI from "../images/NDI.webp"
import Bohoplume from "../images/Bohoplume.webp"
import Huddlet from "../images/Huddlet.webp"
import Ovk from "../images/OVK.webp"
import DataPro from "../images/DataPro.webp"
import Guardian from "../images/Guardian.webp"
import Keepsake from "../images/Connection-Keepsake.webp"
import Jiva from "../images/Jiva.webp"
import Lavatera from "../images/Lavatera.webp"
import Asap from "../images/Asap.webp"
import Lazarus from "../images/Lazarus.webp"
import Genetic from "../images/Genetic-DNA.webp"
import Rent from "../images/Rent-2-ride.webp"







const IndexPage = (props) => {

  const assets = {
    en: {
      mainName: "Kirill Shalaev",
      mainTitle: "I create a powerful source of income for your business",
      mainSubtitle: "Websites and landing pages with a unique design",
      ainButtonText: "View works",
      allWorks: [
        {
          title: "Solarland",
          url: "https://solarland.com.ua/",
          description: "Installation of solar power plants",
          sourceUrl: Solar
        },
        {
          title: "Povaga",
          url: "https://zrobylavona.povaha.org.ua/",
          description: "Outstanding Women of Ukraine",
          sourceUrl: NDI
        },
        {
          title: "Bohoplume",
          url: "https://bohoplume.pl/",
          description: "Fashion accessories for women",
          sourceUrl: Bohoplume
        },
        {
          title: "Huddlet",
          url: "https://huddlet.com/",
          description: "Backgrounds for video",
          sourceUrl: Huddlet
        },
        {
          title: "OVK",
          url: "https://ovk-systems.com.ua/",
          description: "Engineering systems",
          sourceUrl: Ovk
        },
        {
          title: "DATA Pro",
          url: "https://dataprocorp.tech/",
          description: "IT Company",
          sourceUrl: DataPro
        },
        {
          title: "Guardian",
          url: "https://grdn.com.ua/",
          description: "Insurance company",
          sourceUrl: Guardian
        },
        {
          title: "Connection Keepsake",
          url: "https://connectionkeepsake.com/",
          description: "Unique jewelry with DNA",
          sourceUrl: Keepsake
        },
        {
          title: "Jiva",
          url: "https://jivakombucha.com.ua/",
          description: "Soft drinks",
          sourceUrl: Jiva
        },
        {
          title: "Lavatera",
          url: "https://lavatera.com.ua/",
          description: "Landscaping",
          sourceUrl: Lavatera
        },
        {
          title: "ASAP Service",
          url: "https://www.asapservice.com.ua/",
          description: "Souvenir products",
          sourceUrl: Asap
        },
        {
          title: "Lazarus DNA",
          url: "https://lazarusdna.com/",
          description: "DNA Research",
          sourceUrl: Lazarus
        },
        {
          title: "Genetic Health",
          url: "https://www.globalgenetichealth.com/",
          description: "Genetic research",
          sourceUrl: Genetic
        },
        {
          title: "Rent to Ride",
          url: "https://rent2ride.co.uk/",
          description: "Car rental",
          sourceUrl: Rent
        },
      ],
      landing: [
        { suggestion: "Landing Page" },
        { suggestion: "Original design" },
        { suggestion: "Responsive layout" },
        { suggestion: "Feedback forms" },
        { suggestion: "Connecting analytics (Google Analytics)" },
        { suggestion: "Animation of site elements" },
        { suggestion: "Callback widgets, online chat" }
      ],
      corporate: [
        { suggestion: "Multi-page site" },
        { suggestion: "Original design" },
        { suggestion: "Responsive layout" },
        { suggestion: "Feedback forms" },
        { suggestion: "Connecting analytics (Google Analytics)" },
        { suggestion: "Animation of site elements" },
        { suggestion: "Callback widgets, online chat" }
      ],
      ecommerce: [
        { suggestion: "Multi-page site" },
        { suggestion: "Original design" },
        { suggestion: "Responsive layout" },
        { suggestion: "Feedback forms" },
        { suggestion: "Connecting analytics (Google Analytics)" },
        { suggestion: "Animation of site elements" },
        { suggestion: "Callback widgets, online chat" },
        { suggestion: "Add product catalog" },
        { suggestion: "Connecting payment services" }
      ]
    },
    ru: {
      mainName: "Кирилл Шалаев",
      mainTitle: "Создаю мощный источник дохода для вашего бизнеса",
      mainSubtitle: "Сайты и лендинги с уникальным дизайном под ключ",
      ainButtonText: "Посмотеть работы",
      allWorks: [
        {
          title: "Solarland",
          url: "https://solarland.com.ua/",
          description: "Установка солнечных электростаций",
          sourceUrl: Solar
        },
        {
          title: "Повага",
          url: "https://zrobylavona.povaha.org.ua/",
          description: "Выдающиеся женщины Украины",
          sourceUrl: NDI
        },
        {
          title: "Bohoplume",
          url: "https://bohoplume.pl/",
          description: "Модные аксессуары для женщин",
          sourceUrl: Bohoplume
        },
        {
          title: "Huddlet",
          url: "https://huddlet.com/",
          description: "Бекграунды для видео",
          sourceUrl: Huddlet
        },
        {
          title: "ОВК",
          url: "https://ovk-systems.com.ua/",
          description: "Инженерные системы",
          sourceUrl: Ovk
        },
        {
          title: "DATA Pro",
          url: "https://dataprocorp.tech/",
          description: "IT Компания",
          sourceUrl: DataPro
        },
        {
          title: "Guardian",
          url: "https://grdn.com.ua/",
          description: "Страховая компания",
          sourceUrl: Guardian
        },
        {
          title: "Connection Keepsake",
          url: "https://connectionkeepsake.com/",
          description: "Уникальные украшения с ДНК",
          sourceUrl: Keepsake
        },
        {
          title: "Jiva",
          url: "https://jivakombucha.com.ua/",
          description: "Безалкогольные напитки",
          sourceUrl: Jiva
        },
        {
          title: "Lavatera",
          url: "https://lavatera.com.ua/",
          description: "Ландшафтный дизайн",
          sourceUrl: Lavatera
        },
        {
          title: "ASAP Service",
          url: "https://www.asapservice.com.ua/",
          description: "Сувенирная продукция",
          sourceUrl: Asap
        },
        {
          title: "Lazarus DNA",
          url: "https://lazarusdna.com/",
          description: "Исследования ДНК",
          sourceUrl: Lazarus
        },
        {
          title: "Genetic Health",
          url: "https://www.globalgenetichealth.com/",
          description: "Генетические исследования",
          sourceUrl: Genetic
        },
        {
          title: "Rent to Ride",
          url: "https://rent2ride.co.uk/",
          description: "Аренда автомобилей",
          sourceUrl: Rent
        },
      ],
      landing: [
        { suggestion: "Лендинг" },
        { suggestion: "Оригинальный дизайн" },
        { suggestion: "Адаптивная верстка" },
        { suggestion: "Формы обратной связи" },
        { suggestion: "Подключение аналитики ( Google Analytics)" },
        { suggestion: "Анимация элементов сайта" },
        { suggestion: "Виджеты обратного звонка, онлайн чат" }
      ],
      corporate: [
        { suggestion: "Многостраничный сайт" },
        { suggestion: "Оригинальный дизайн" },
        { suggestion: "Адаптивная верстка" },
        { suggestion: "Формы обратной связи" },
        { suggestion: "Подключение аналитики ( Google Analytics)" },
        { suggestion: "Анимация элементов сайта" },
        { suggestion: "Виджеты обратного звонка, онлайн чат" }
      ],
      ecommerce: [
        { suggestion: "Многостраничный сайт" },
        { suggestion: "Оригинальный дизайн" },
        { suggestion: "Адаптивная верстка" },
        { suggestion: "Формы обратной связи" },
        { suggestion: "Подключение аналитики ( Google Analytics)" },
        { suggestion: "Анимация элементов сайта" },
        { suggestion: "Виджеты обратного звонка, онлайн чат" },
        { suggestion: "Добавление каталога товаров" },
        { suggestion: "Подключение сервисов оплаты" }
      ]
    }
  }



  console.log(props);
  const [show, setState] = useState(false)

  let showModal = () => {
    setState(true)
  }
  let hideModal = () => {
    setState(false)
  }





  let data;
  props.pageContext.language === "en_US" ? data = assets.en : data = assets.ru

  console.log(data);

  let works = data.allWorks.map((work) => {
    return (<div key={uuidv4()} className={cls.worksItem}>
      <a target="_blank" rel="noreferrer" href={work.url}>
        <img src={work.sourceUrl} alt={work.title} />
      </a>
      <a target="_blank" rel="noreferrer" href={work.url} className={cls.worksName}>{work.title}</a>
      <span className={cls.worksDescription}>{work.description}</span>
    </div>)
  })



  let suggest = (list) => {
    return list.map((item) => {
      return (<li key={uuidv4()}>
        {item.suggestion}
      </li>)
    })
  }


  // let menu = props.pageContext.language === "ru_RU" ? props.data.allWpMenu.nodes[1] : props.data.allWpMenu.nodes[0]

  const bgFunction = (url) => {
    let mainBackground = {
      backgroundImage: `url(${url})`
    }
    return mainBackground
  }



  return (<PrimaryLayout>

    <main className={`container ${cls.main}`} style={bgFunction(bg)}>


      <div className={cls.maintextwrapper}>
        <div className={cls.mainsubtitle}>
          {data.mainName}
        </div>
        <div className={cls.maintitle}>
          {data.mainTitle}
        </div>
        <div className={cls.mainsuggestion}>
          {data.mainSubtitle}
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
      <div className={cls.swipeIcon}>
        <img src={swipe} />
      </div>
      <div className={cls.workswrapper}>
        {works}
      </div>
    </section>
    <section id="prices" className={`container ${cls.prices}`}>
      <div className={`${cls.sectiontitle} ${cls.pricetitle}`}>
        {props.pageContext.language === "en_US" ? "Price" : "Стоимость разработки"}
      </div>
      <div className={cls.priceswrap}>
        <div className={cls.priceItem}>
          <ul>
            {suggest(data.landing)}
          </ul>
          <div className={cls.priceBtnwrapper}>
            <span className={cls.price}>
              {props.pageContext.language === "en_US" ? "" : "от 300 $"}
            </span>
            <button className={`${cls.button} ${cls.buttonPrice}`}>
              {props.pageContext.language === "en_US" ? "Order a website" : "Заказать сайт"}
            </button>
          </div>
        </div>

        <div className={cls.priceItem}>
          <ul>
            {suggest(data.corporate)}
          </ul>
          <div className={cls.priceBtnwrapper}>
            <span className={cls.price}>
              {props.pageContext.language === "en_US" ? "" : "от 750 $"}
            </span>
            <button className={`${cls.button} ${cls.buttonPrice}`}>
              {props.pageContext.language === "en_US" ? "Order a website" : "Заказать сайт"}
            </button>
          </div>
        </div>

        <div className={cls.priceItem}>
          <ul>
            {suggest(data.ecommerce)}
          </ul>
          <div className={cls.priceBtnwrapper}>
            <span className={cls.price}>
              {props.pageContext.language === "en_US" ? "" : "от 1200 $"}
            </span>
            <button className={`${cls.button} ${cls.buttonPrice}`} onClick={showModal}>
              {props.pageContext.language === "en_US" ? "Order a website" : "Заказать сайт"}
            </button>
          </div>
        </div>
      </div>
    </section>
    <Modal handleClose={hideModal} show={show} />
  </PrimaryLayout>
  )
}

export default IndexPage


