import { useState } from 'react';
import { ActivyTable } from "../../components/ActivyTable";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { NewActivyModal } from '../../components/NewActivyModal';
import { NewCourseUnityModal } from '../../components/NewCourseUnityModal';
import { Container } from "./styles";

export function Dashboard() {

    const [isNewActivyModalOpen, setIsNewActivyModalOpen] = useState(false)
    const [isNewCourseUnityModalOpen, setIsNewCourseUnityModalOpen] = useState(false)

    function handleOpenActivyModal(){
        setIsNewActivyModalOpen(true);
    }

    function handleOpenCourseUnityModal(){
        setIsNewCourseUnityModalOpen(true);
    }

    function handleCloseActivyModal(){
        setIsNewActivyModalOpen(false);
    }

    function handleCloseCourseUnityModal(){
        setIsNewCourseUnityModalOpen(false);
    }

    return (
        <>
            <Header 
                onOpeNewActivyModal={handleOpenActivyModal}
                onOpeNewCourseUnityModal={handleOpenCourseUnityModal}
            />
            <Container>
                <Summary />
                <ActivyTable />
            </Container>
            <NewActivyModal 
                isOpen={isNewActivyModalOpen}
                onRequestClose={handleCloseActivyModal}
            />
            <NewCourseUnityModal 
                isOpen={isNewCourseUnityModalOpen}
                onRequestClose={handleCloseCourseUnityModal}
            />
        </>
    )
}