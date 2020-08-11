import React from 'react';

import './style.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return(

        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/33739228?s=460&u=0a7e01a18896312898794077ae004e07fe6e7cb0&v=4" alt="Alison Souza"/>
                        <div>
                            <strong>Alison Souza</strong>
                            <span>Javascript</span>
                        </div>
                    </header>
                    <p>Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 20,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp"/> 
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;