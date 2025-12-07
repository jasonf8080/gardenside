import { Header, CoreValues, Showcase, Suppliers } from "../components/About"
import { Quote } from "../components/main"
        {/* 
        pt-12 md:pt-20 pb-10
        py-8 md:py-16 
        "pt-10 pb-16 md:pb-32 
        */}

const About = () => {
  return (
    <>
    <Header/>
    <Showcase/>
    <Quote quote='"Our mission is to serve pure, honest food made with locally sourced ingredients, while creating a welcoming space for the Lewisboro community to gather, connect, and feel at home.”'/>

    <CoreValues/>
    {/* <Suppliers/> */}
    </>
  )
}

export default About
