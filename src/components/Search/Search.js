import { Component } from "react";
import searchIcon from '../../icons/search.svg'
class Search extends Component {


  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchValue: '',
      list: [],
      show: false,
    };
  }

  async fetchApi() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
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

  handleChange = (e) => {

    if(e.target.value !== " " && e.target.value.length > 1) {
      this.setState({searchValue: e.target.value})
      this.setState({show:true});
    }else {
      this.setState({show:false});
    }
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {

    const {searchValue, list } = this.state;
    let search = []

    if(searchValue != '' && searchValue.length > 1) {
      search = list.filter(res =>(
        res.name.includes(searchValue)
      ));
    }

    return(
      <form  className="header__search">
        <input
          type="search"
          className="header__search--input"
          placeholder="buscar"
          onChange={this.handleChange}
          
        />
        <img src={searchIcon} className="header__search--icon"></img>
          {search && (
          <div className={this.state.show ? "header__search--list active" : "header__search--list" }>
            {search.map(item => {
              return (
                <div className="header__search--item">
                  <img src={item.sprites.front_default}></img>
                  <p>{item.name}</p>
                </div>
              )
            })}
        </div>
        )}
      </form>
    )
  }
}
export default Search;