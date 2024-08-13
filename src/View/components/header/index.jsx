import React, { useState, useEffect } from 'react';
import getInfosErick from '../../../Utils/getInfosErick';
import { FaHandPeace } from 'react-icons/fa6';
import "../../../assets/css/home.css";
import wave from "./../../../assets/img/wave.svg";
import CountPessoas from '../countPessoas';

export default function Header() {
  const [bio, setBio] = useState('');
  const [nome, setNome] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInfosErick();
        let bio = data.bio;

        if (bio) {
          const bword = ['erick,', 'erick', 'full', 'stack', 'axspear...'];
          const arrayBio = bio.split(' ');

          arrayBio.forEach((element) => {
            if (bword.includes(element.toLowerCase())) {
              bio = bio.replace(element, '<strong>' + element + '</strong>');
            }
          });

          setBio(bio);
        } else {
          setBio('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ipsam ex praes.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Fetch the initial count of clicks when the component mounts
    const fetchClickCount = async () => {
      try {
        const response = await fetch('https://erickapi.onrender.com/clicks');
        const data = await response.json();
        setCount(data.clicks);
      } catch (error) {
        console.error('Error fetching click count:', error);
      }
    };

    fetchClickCount();
  }, []);

  const trocar = (nome) => {
    localStorage.setItem('nome', nome);
    localStorage.removeItem('repo');
    localStorage.removeItem('data');
    window.location.href = "";
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const value = event.target.value;
      trocar(value);
    }
  };

  const handleinput = (event) => {
    const value = event.target.value;
    setNome(value);
  };

  const click = () => {
    trocar(nome);
  };

  const handleCount = async () => {
    try {
      const response = await fetch('https://erickapi.onrender.com/clicks', {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setCount(data.clicks);
      } else {
        console.error('Error incrementing click count');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
          <CountPessoas countParams={count} />
          <div className="text">
            <h1 className='reveal' dangerouslySetInnerHTML={{ __html: bio }} />
          </div>
          <div className="actions">
            <a href="#" className="headerbtn">
              <FaHandPeace /> Conhecer mais !
            </a>
            <span className='headerbtn' onClick={handleCount}>
              Deixe seu click!
            </span>
          </div>
        </div>
      </div>
      <img src={wave} className="wave" alt="erro" />
    </header>
  );
}
