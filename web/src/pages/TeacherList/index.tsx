import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import './style.css';


function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria"/>
                    <Input name="week-day" label="Dia da semana"/>
                    <Input type="time" name="time" label="hora"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );

}

export default TeacherList;