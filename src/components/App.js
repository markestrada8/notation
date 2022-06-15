import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea';
// import notes from '../notes'

export default function App() {
    const [notes, setNotes] = useState([])
    const [note, setNote] = useState({ title: "", content: "" })



    function handleChange(event) {
        const { name, value } = event.target
        setNote(prevState => {
            if (name === "title") {
                return {
                    title: value,
                    content: prevState.content
                }
            } else if (name === "content") {
                return {
                    title: prevState.title,
                    content: value
                }
            }
        })
    }

    function addNote(event) {

        setNotes(prevState => {
            return [...prevState, note]
        })
        setNote({ title: "", content: "" })
        event.preventDefault()

    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id
                    ? note
                    : null
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea
                clickFunction={addNote}
                changeFunction={handleChange}
                title={note.title}
                content={note.content}
            />
            {notes.map((note, index) =>
                <Note
                    id={index}
                    key={index}
                    title={note.title}
                    content={note.content}
                    clickFunction={deleteNote}

                />
            )}
            <Footer />
        </div>
    )
}
