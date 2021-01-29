import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { useRouter } from 'next/router';
import db from '../db.json';
import Link from '../src/components/Link';
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
        <Widget
           as={motion.section}
           transition={{ delay: 0, duration: 0.5 }}
           variants={{
             show: { opacity: 1, y: '0' },
             hidden: { opacity: 0, y: '100%' },
           }}
           initial="hidden"
           animate="show"
        >
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

        <Widget
           as={motion.section}
           transition={{ delay: 0.5, duration: 0.5 }}
           variants={{
             show: { opacity: 1 },
             hidden: { opacity: 0 },
           }}
           initial="hidden"
           animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
            
          </Widget.Content>
        </Widget>
        <Footer
           as={motion.footer}
           transition={{ delay: 0.5, duration: 0.5 }}
           variants={{
             show: { opacity: 1 },
             hidden: { opacity: 0 },
           }}
           initial="hidden"
           animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/thauany-alves" />
    </QuizBackground>
    
  );
  
}
