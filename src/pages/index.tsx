import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import { useEffect, useState } from "react";

export default function Index() {
  const phrases = ['cosas', 'revistas', 'servidores'];
  const [phrase, setPhrase] = useState('cosas');
  let counter = 0;

  useEffect(() => {
    const t = setInterval(() => {
      const next = ++counter%phrases.length;
      console.log('next', next);
      setPhrase(phrases[next]);
    }, 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Desarrollaban <span className="fancy">{phrase}</span>
          </h1>
          <h2>Bastión virtual para el no-futuro.</h2>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
          animation-name: taadaa 1s infinite;
          animation-direction: alternate;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @keyframes taadaa { 
          0% {
            opacity: 0;
          }
        
          80% {
            opacity: 1;
          }

          100% {
            opacity: 1;
          }
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
