import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const generadorDominio = () => {
    const pronouns = ['the', 'our'];
    const adjectives = ['great', 'big'];
    const nouns = ['jogger', 'racoon'];
    for (let pronoun of pronouns)
  
        pronouns.forEach(pronoun =>
            adjectives.forEach(adjective =>
                nouns.forEach(noun => console.log(`${pronoun}${adjective}${noun}.com`))
            )
        );
  };
};

generadorDominio();