import React, {Component} from 'react';

import {JournalEntry} from "./journal_entry";

const journalRawData = [
    {title: 'Title One', content: 'Some Content', status: 'Borrador'},
    {title: 'Title Two', content: 'Some Content', status: 'Publicado'},
    {title: 'Title Three', content: 'Some Content', status: 'Publicado'},
    {title: 'Title Four', content: 'Some Content', status: 'Publicado'},
    {title: 'Title Five', content: 'Some Content', status: 'Publicado'}
];



//Esto es un componente de clase
export default class JournalList extends Component {
    constructor(props) {
        super();
        
        this.state = {
            journalData: journalRawData,
            isOpen: true
        };
        
        this.clearEntries = this.clearEntries.bind(this);
        this.showAllEntries = this.showAllEntries.bind(this);
        this.toggleEntries = this.toggleEntries.bind(this);

    }

    //Creamos nuestra función  para eliminar las entradas al clickar el botón
    clearEntries(){
        this.setState({ journalData: [], isOpen : false });
    };

    //Creamos nuestra función para que nos vuelva a mostrar las entradas
    showAllEntries(){
        this.setState({ journalData: journalRawData, isOpen : true });
    };

    //Creamos nuestra función para que alterne el estado
    toggleEntries () {
        if(this.state.isOpen){
            this.setState({journalData: [], isOpen : false })
        } else {
            this.setState({ journalData: journalRawData, isOpen : true })
        }
    }

    render () {
        const journalEntries = this.state.journalData.map (journalEntry => {
            return (
                <div key = {journalEntry.title}>
                    <JournalEntry
                        title = {journalEntry.title}
                        content = {journalEntry.content} />
                </div>
            )
        })

        return (
            <div>
                <h2> {this.props.heading}</h2>
                {journalEntries}

                <button onClick = {this.clearEntries}> Clear Journal Entries </button>
                <button onClick = {this.showAllEntries}> Show all Journal Entries </button>
                <button onClick = {this.toggleEntries}> Toggle Entries </button>

            </div>
        );
    };
}