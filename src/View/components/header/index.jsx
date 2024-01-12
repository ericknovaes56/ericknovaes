import React, { useState, useEffect } from 'react';
import getInfosErick from '../../../Utils/getInfosErick';
import { FaHandPeace, FaBook } from 'react-icons/fa6';
import "../../../assets/css/home.css"
import wave from "./../../../assets/img/wave.svg"

export default function Header() {

  const [bio, setBio] = useState('');
  const [nome, setNome] = useState("")

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        
        const data = await getInfosErick();
        var bio = data.bio

        if (bio) {
          const bword = ['erick,','erick', 'full', 'stack', 'axspear...'];
          const arrayBio = bio.split(' ');

          arrayBio.forEach((element) => {
            if (bword.includes(element.toLowerCase())) {
        
                bio = bio.replace(element, '<strong>' + element + '</strong>')
              
            }
          });

          setBio(bio)
        } else {
          setBio('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ipsam ex praes.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    

  }, []);

  const trocar = (nome) =>{
    localStorage.setItem('nome', nome)
    localStorage.removeItem('repo')
    localStorage.removeItem('data')
    window.location.href=""
  }

  const handleKeyDown = (event) => {

    if (event.key === 'Enter') {
        const value = event.target.value
        trocar(value)

    }
  };

  const handleinput = (event) => {

        const value = event.target.value
        setNome(value)

  };

  const click = () =>{
    trocar(nome)
  }


  return (
    <header className="header">
      <div className="content-max">
        <div className="left">
          <div className="input">
            <input
              type="text"
              className="input"
              placeholder="Github Name"
              onChange={handleinput}
              onKeyDown={handleKeyDown}
            />
            <button onClick={click}>IR</button>
          </div>
          <div className="text">
            <h1 className='reveal' dangerouslySetInnerHTML={{ __html: bio }} />
          </div>
          <div className="actions">
            <a href="#">
              <FaHandPeace /> Conhecer mais !
            </a>
            <a className="dif" href="/contact">
              <FaBook fill="black" /> Contato
            </a>
          </div>
        </div>
      </div>
      <img src={wave} className="wave" alt="erro" />
    </header>
  );
}
