import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            titleCharLimit: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const maxLimit = this.state.titleCharLimit;
        const inputValue = event.target.value;
        if (inputValue.length <= maxLimit) {
        this.setState(() => {
            return {
                title: inputValue,
            };
        });
    }
}

    onBodyChangeEventHandler(event){
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                <p className="note-input__title__char-limit">Sisa karakter: {this.state.titleCharLimit - this.state.title.length }</p>
                    <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." required="" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." required="" value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;