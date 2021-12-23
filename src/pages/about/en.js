import * as React from "react"
import PrimaryLayout from "../../layout/PrimaryLayout"
import { graphql } from "gatsby"


// markup
const NotFoundPage = (props) => {

  const lang = "en_US";
  // let menu = lang === "ru_RU" ? props.data.allWpMenu.nodes[1] : props.data.allWpMenu.nodes[0]

  return (<PrimaryLayout>
    <main>
      About
    </main>
  </PrimaryLayout>
  )
}

export default NotFoundPage



