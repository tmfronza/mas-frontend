import { FiLogOut } from 'react-icons/fi';
import {Container, Content} from './styles';
import { useAuth } from '../../hooks/Auth';

interface HeaderProps {
    onOpeNewActivyModal: () => void;
    onOpeNewCourseUnityModal: () => void;
}

export function Header({onOpeNewActivyModal, onOpeNewCourseUnityModal}: HeaderProps) {

    const {signOut} = useAuth();

    function handleSignOut(){
        signOut();
    }

    return (
        <Container>
            <Content>
                <h1>My Activies Space</h1>
                <div>
                    <button 
                        type='button'
                        onClick={onOpeNewCourseUnityModal}
                    >
                        Nova Unidade Curricular
                    </button>
                    <button 
                        type='button'
                        onClick={onOpeNewActivyModal}
                    >
                        Nova Atividade
                    </button>
                    <button
                        type='button'
                        onClick={handleSignOut}
                    >
                        <FiLogOut size={20} />
                    </button>
                </div>
            </Content>
        </Container>
    )
}