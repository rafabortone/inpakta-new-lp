import { Component } from 'react';
import NewsLetter from '../components/NewsLetter'
import BannerPrincipal from '../images/montagem-telas.png'
import Vitrine from '../subtemplates/Vitrine'
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
    return(
      <div className="home">
        <section className="home__banner">
          <div className="container">
            <div className="home__banner--wrapper">
              <div class="home__banner--image">
                <img src={BannerPrincipal}/>
              </div>
              <div class="home__banner--text">
                <h1>Facilitamos sua adequação com a LGPD ;) opaaa</h1>
                <h5>Configure e atenda as exigências da LGPD em minutos. E o melhor, inicie gratuitamente!</h5>
              </div>
            </div>
            <div className="home__banner--content">
              
              <AnchorLink href='#solucoes'>Começe agora gratuitamente!</AnchorLink>
          
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