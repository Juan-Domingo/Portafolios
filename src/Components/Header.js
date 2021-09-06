import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">Sobre</a></li>
	         <li><a className="smoothscroll" href="#resume">Resumen</a></li>
            <li><a className="smoothscroll" href="#portfolio">Trabajos</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonios</a></li>
            <li><a className="smoothscroll" href="#contact">Contacto</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Mi nombre es Juan Domingo.</h1>
            <h3>Soy de España y soy <span>Desarrollador Web Full Stack</span>. Me siento capacitado para cubrir uno de los puestos que me ofrezcan ya que mi experiencia profesional esta centrado en lenguajes de programación convirtiéndome en desarrollador web full stack. Actualmente estoy cursando developer web full stack en el bootcamp de Henry y he estado trabajando con metodología scrum, formando equipos para la solución de los distintos problemas que se nos planteaban durante el curso dominando así los lenguajes de programación Javascript, “HTML”, css, React con Redux, Express, Postgres.

.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;