import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import Teacher from '../../model/Teacher';
import api from '../../services/api';

interface InputProps {
	teacher: Teacher;
}

const TeacherItem: React.FC<InputProps> = ({ teacher }) => {
	function createConnection() {
		console.log(teacher.id);
		api.post('connections', {
			user_id: teacher.id,
		});
	}
	return (
		<article className='teacher-item'>
			<header>
				<img src={teacher.avatar} alt={teacher.name} />
				<div>
					<strong>{teacher.name}</strong>
					<span>{teacher.subject}</span>
				</div>
			</header>
			<p>{teacher.bio}</p>
			<footer>
				<p>
					Preço/hora
					<strong>R$ {teacher.cost},00</strong>
				</p>
				<a
					target='_blank'
					onClick={createConnection}
					type='button'
					href={`https://wa.me/${teacher.whatsapp}`}
				>
					<img src={whatsappIcon} alt='whatsapp' />
					Entrar em contato
				</a>
			</footer>
		</article>
	);
};

export default TeacherItem;
