import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import QuizContainer from '../src/components/QuizContainer' 
import QuizBackground from '../src/components/QuizBackground' 
import QuizLogo from '../src/components/QuizLogo' 
import Widget from '../src/components/Widget' 
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import GitHubCorner from '../src/components/GitHubCorner' 
import Footer from '../src/components/Footer' 


// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
  const router = useRouter();
  let [name, setName] = React.useState('');

  
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit = { function (e) {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Fazendo uma submissão por meio do react');
              }}
            >
              <Input 
                placeholder = "Seu nome"
                onChange = {(event) => { setName(event.target.value) }}
                name = "nomeUsuario"
                value = {name}  />
              <Button type="submit" disabled={name.length === 0}>
                Jogar 
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/thauany-alves" />
    </QuizBackground>
    
  );
  
}
