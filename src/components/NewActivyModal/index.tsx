import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import { Container, Error } from './styles';
import api from '../../services/api';

interface NewActivyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewActivyModalData {
    courseUnitId: string;
    name: string;
    grade: number;
    activy_date: Date
}

interface CourseUnity {
    id: string;
    name: string;
    description: string;
}

export function NewActivyModal({isOpen, onRequestClose}:NewActivyModalProps){

    const [courseUnities, setCourseUnities] = useState<CourseUnity[]>([]);

    useEffect(() => {
        api.get('/courseunity').then(response => setCourseUnities(response.data))
    },[])

    const {register, handleSubmit, formState: {errors}} = useForm<NewActivyModalData>();

    const onSubmit = handleSubmit(data => api.post('/activy', data).then(onRequestClose));

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <Container>
                <h2>Cadastrar a Atividade</h2>
                <button
                    type='button'
                    onClick={onRequestClose}
                    className='react-modal-close'
                >
                    <FiX size={20}/>
                </button>
                <form onSubmit={onSubmit}>
                    <select {...register('courseUnitId')}>
                        <option selected value=''>Selecione a Unidade Curricular</option>
                        {courseUnities.map(courseUnit => {
                            return (
                                <option value={courseUnit.id}>{courseUnit.name}</option>
                            )
                        })}
                    </select>
                    {errors.courseUnitId && <Error>O preenchimento do campo é obrigatório.</Error>}
                    <input 
                        type='text' 
                        placeholder='Atividade'
                        {...register('name')}
                    />
                    {errors.name && <Error>O preenchimento do campo é obrigatório.</Error>}
                    <input 
                        type='number'
                        step='.01' 
                        placeholder='Nota da Avaliação'
                        {...register('grade')}
                    />
                    {errors.grade && <Error>O preenchimento do campo é obrigatório.</Error>}
                    <input 
                        type='date' 
                        placeholder='Data da Atividade'
                        {...register('activy_date')}                   
                    />
                    {errors.activy_date && <Error>O preenchimento do campo é obrigatório.</Error>}
                    <button type='submit'>
                        Cadastrar
                    </button>
                </form>
            </Container>
        </Modal>
    )
}