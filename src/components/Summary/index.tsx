import { useEffect, useState } from 'react';
import {Container} from './styles';
import {GoFile, GoNote, GoGraph} from 'react-icons/go';
import api from '../../services/api';

interface Activy {
    id: string;
    name: string;
    grade: number;
    activy_date: Date;
}

interface CourseUnity {
    id: string;
    name: string;
    description: string;
}

export function Summary(){

    const [activies, setActivies] = useState<Activy[]>([])
    const [courseUnities, setCourseUnities] = useState<CourseUnity[]>([])

    useEffect(() => {

        api.get('/activy').then(response => setActivies(response.data))
    },[])
    
    useEffect(() => {

        api.get('/courseunity').then(response => setCourseUnities(response.data))
    },[])

    return (
        <Container>
            <div>
                <header>
                    <p>Unidades Curriculares</p>
                    <GoFile size={40} />
                </header>
                <strong>
                    {courseUnities.length}
                </strong>
            </div>
            <div>
                <header>
                    <p>Atividades</p>
                    <GoNote size={45} />
                </header>
                <strong>
                    {activies.length}
                </strong>
            </div>
            <div className = 'highlight-background'>
                <header>
                    <p>Média Geral</p>
                    <GoGraph size={40} />
                </header>
                <strong>
                    {Number(activies.reduce((average, activies) => {
                        return average + Number(activies.grade)
                    },0)/activies.length).toFixed(2)}
                </strong>
            </div>
        </Container>
    )
}