import * as React from "react"
import PrimaryLayout from "../layout/PrimaryLayout"
import { graphql } from "gatsby"



// markup
const NotFoundPage = (props) => {
  console.log("Ab", props)
  const lang = "ru_RU";
  let menu = lang === "ru_RU" ? props.data.allWpMenu.nodes[1] : props.data.allWpMenu.nodes[0]

  return (<PrimaryLayout menu={menu}>
    <main>
      About
    </main>
  </PrimaryLayout>
  )
}

export default NotFoundPage



export const query = graphql`
  query About {
     allWpMenu{
    nodes {
      locations
      slug
    }
 	 },
  }`