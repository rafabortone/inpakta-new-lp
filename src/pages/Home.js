import { Component } from 'react';
import NewsLetter from '../components/NewsLetter'
import BannerPrincipal from '../images/tela-banner.png'
import Vitrine from '../subtemplates/Vitrine'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from "framer-motion"
class Home extends Component {

  state = {
    list: []
  }

  async fetchApi() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();  
    data.results.map(async item => {
      this.getPokemon(item.url);
    })
  }

  async getPokemon(url) {
    const response = await fetch(url);
    const data = await response.json();
    if(!data) return null
    this.setState({list: this.state.list.concat(data)});
  }

  componentDidMount() {
    this.fetchApi();
  }

  render () {
    const fadeLeft = {
      hidde: {opacity: 0, x:-100},
      visible: {opacity:1, x:0}
    }
    return(
      <div className="home">
        <section className="home__banner">
          <div className="container">
            <div className="home__banner--wrapper">
              <motion.div class="home__banner--image"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
              >
                <img src={BannerPrincipal}/>
              </motion.div>
              <div class="home__banner--text">
                <motion.h1
                  initial={{opacity:0, x: -100}}
                  animate={{opacity:1, x: 0}}
                  transition={{ duration: 1 }}
                >Facilitamos sua adequação com a LGPD</motion.h1>
                <motion.h5
                  initial={{opacity:0, y: -100}}
                  animate={{opacity:1, y: 0}}
                  transition={{ duration: 2 }}
                >Configure e atenda as exigências da LGPD em minutos. E o melhor, inicie gratuitamente!</motion.h5>
              </div>
            </div>
            <div className="home__banner--content">
              <AnchorLink href='#solucoes'>Comece agora gratuitamente!</AnchorLink>
            </div>
          </div>
        </section>
        <Vitrine
          list = {this.state.list}
        ></Vitrine>
        <section className="home__about" id="about">
          <div className="container">  
            
          </div>
        </section>
        <section className="home__contato">
          <div className="container">
            <h2>Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.</h2>
            <span>entre em contato</span>
            <p>comercial@inpakta.com.br</p>
          </div>
        </section>
        <NewsLetter/>
      </div>
    )
  }
}

export default Home;