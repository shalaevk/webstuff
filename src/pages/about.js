import * as React from "react"
import PrimaryLayout from "../layout/PrimaryLayout"




// markup
const NotFoundPage = (props) => {
  console.log("Ab", props)
  const lang = "ru_RU";
  // let menu = lang === "ru_RU" ? props.data.allWpMenu.nodes[1] : props.data.allWpMenu.nodes[0]

  return (<PrimaryLayout >
    <main>
      About
    </main>
  </PrimaryLayout>
  )
}

export default NotFoundPage


