import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ILinkProps {
  link: string;
}

const Text: React.FC = ({ children }) => {
  return (
    <p className="text-4x1 sm:text-2xl mt-10 mb-10">
        {children}
    </p>
  );
}

const Link: React.FC<ILinkProps> = ({ children, link }) => {
  return (
    <a target="blank_" className="text-purple-600 hover:text-purple-800" href={link} >{children}</a>
  );
}

export default function Home() {
  return (
    <div>
      <h1 className="text-4x1 sm:text-6xl lg:text-7xl mt-10 mb-10 leading-none font-extrabold tracking-tight text-gray-900" >
        DoWhile, conectando comunidades para o aprendizado contínuo!
      </h1>

      <motion.img whileHover={{ scale: 1.07 }} transition={{ type: "tween" }} src="/img/selfdalive.png" width={1000} height={550} className="rounded-lg" />

      <Text>
        O DoWhile é um evento gratuito providênciado pela <Link link="https://rocketseat.com.br/">Rocketseat</Link> com o intuito de conectar as diferentes comunidades de desenvolvedores pela internet! Teve sua primeira edição em 2020, completamente online e gratuito, foram dois dias intensos com muitos conhecimentos em diversas tecnologias!
      </Text>

      <motion.img whileHover={{ scale: 1.1 }} transition={{ type: "tween" }} src="/img/imagem-live.jpeg" width={1000} height={510} className="rounded-lg" />

      <Text>
        Tivemos a participação de vários profissionais das mais diversas áreas dentro da tecnologia. Uma experiência incrível que com certeza ajudou muito todos que assistiram. Palestras incríveis e históras incríveis foram compartilhadas. Além de muita emoção com os diversos spoilers durante o evento haha!
      </Text>

      <Text>
        Um dos maiores aprendizados foi para nunca para de aprender. Não fique parado no mesmo lugar, busque sempre novos conhecimentos e busque estar sempre evoluindo na sua vida!
      </Text>

      <Text>
        Esta página é do desafio 4 do evento, feita com os conhecimentos do WorkShop do <Link link="https://www.linkedin.com/in/guilhermerodz/">Guilerme Rodz</Link>, que foi disponibilizado durante o evento com o nome de "Interfaces futurísticas com Next.js, TailwindCSS e Framer Motion", por <Link link="https://github.com/allyfx">Alícia Foureaux</Link>.
      </Text>
    </div>
  );
}
