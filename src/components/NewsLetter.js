const NewsLetter = () =>{
  return(
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__title">
          <strong>//</strong>
          <h3>receba novidades da nossa área de produtos digitais.</h3>
        </div>
        <form className="newsletter__form">
          <input 
            type="text"
            placeholder="Digite seu e-mail"
          ></input>
          <button
          >cadastrar</button>
        </form>
      </div>
    </section>
  )
}
export default NewsLetter;