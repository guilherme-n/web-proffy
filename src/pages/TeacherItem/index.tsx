import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
	return (
		<article className='teacher-item'>
			<header>
				<img
					src='https://avatars1.githubusercontent.com/u/4152946?s=460&u=fcd84ee5f1bc5e98e79c7c2870faf76bb2fdeccf&v=4'
					alt='guilherme'
				/>
				<div>
					<strong>Guilherme Nascimento</strong>
					<span>Quimica</span>
				</div>
			</header>
			<p>
				Entusiasta das melhores tecnologias de quimica avançada
				<br /> <br />
				Apaixonado por explodir coisas em laboratório e por mudar a vida das
				pessoas através de experiências.
			</p>
			<footer>
				<p>
					Preço/hora
					<strong>R$ 80,00</strong>
				</p>
				<button type='button'>
					<img src={whatsappIcon} alt='whatsapp' />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}
