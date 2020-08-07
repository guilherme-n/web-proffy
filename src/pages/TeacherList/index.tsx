import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Teacher from '../../model/Teacher';

import './styles.css';
import api from '../../services/api';

export default function TeacherList() {
	const [subject, setSubject] = useState('');
	const [weekDay, setWeekDay] = useState('');
	const [time, setTime] = useState('');
	const [teachers, setTeachers] = useState([]);

	function searchTeachers(e: FormEvent) {
		e.preventDefault();

		api
			.get('classes', {
				params: {
					subject,
					week_day: weekDay,
					time,
				},
			})
			.then((response) => {
				setTeachers(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div id='page-teacher-list' className='container'>
			<PageHeader title='Estes são os proffys disponíveis.'>
				<form id='search-teachers' onSubmit={searchTeachers}>
					<Select
						name='subject'
						label='Matéria'
						value={subject}
						onChange={(e) => {
							setSubject(e.target.value);
						}}
						options={[
							{ value: 'Artes', label: 'Artes' },
							{ value: 'Biologia', label: 'Biologia' },
							{ value: 'Ciências', label: 'Ciências' },
							{ value: 'Educação física', label: 'Educação física' },
							{ value: 'Física', label: 'Física' },
							{ value: 'Geografia', label: 'Geografia' },
							{ value: 'História', label: 'História' },
							{ value: 'Matemática', label: 'Matemática' },
							{ value: 'Português', label: 'Português' },
							{ value: 'Química', label: 'Química' },
						]}
					></Select>
					<Select
						name='subject'
						label='Dia da semana'
						value={weekDay}
						onChange={(e) => {
							setWeekDay(e.target.value);
						}}
						options={[
							{ value: '0', label: 'Domingo' },
							{ value: '1', label: 'Segunda-feira' },
							{ value: '2', label: 'Terça-feira' },
							{ value: '3', label: 'Quarta-feira' },
							{ value: '4', label: 'Quinta-feira' },
							{ value: '5', label: 'Sexta-feira' },
							{ value: '6', label: 'Sábado' },
						]}
					></Select>
					<Input
						type='time'
						name='time'
						label='Hora'
						value={time}
						onChange={(e) => {
							setTime(e.target.value);
						}}
					></Input>
					<button type='submit'>Buscar</button>
				</form>
			</PageHeader>
			<main>
				{teachers.map((teacher: Teacher) => {
					return <TeacherItem key={teacher.id} teacher={teacher} />;
				})}
			</main>
		</div>
	);
}
