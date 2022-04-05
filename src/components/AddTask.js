import React, {Component} from 'react';
import './AddTask.css'


class AddTask extends Component {
    minDate=new Date().toISOString().slice(0,10)

    state = { 
        text:'',
        important:false,
        date: this.minDate,
    } 

    handleInputChange=(e)=>{
        if(e.target.type === 'checkbox'){
            this.setState({
                important: e.target.checked,
            })
        }
        else if(e.target.type === 'text'){
            this.setState({
                text: e.target.value,
            })
        }
        else if(e.target.type==='date'){
            this.setState({
                date: e.target.value,
            })
        }
    }
    

    handleClick= (e)=>{
        e.preventDefault();
        const {text, date, important} = this.state;
        if(text.length>2){
            const add= this.props.add(text,date,important);
            if(add){
                this.setState({
                    text: '',
                    important: false,
                    date: this.minDate,
                })
            }
        }
        else{
            alert("Za krótka nazwa!");
        }
        
    }


    render() { 

        let maxDate= this.minDate.slice(0,4)*1+1;
        maxDate= maxDate+"-12-31";
        return (
            <form>
                <input type="text" placeholder='Dodaj zadanie' value={this.state.text} onChange={this.handleInputChange}/>
                <label htmlFor="important">
                    <input type="checkbox" checked={this.state.important} name="important" id="important" onChange={this.handleInputChange}/>
                    Priorytet
                </label><br />
                <label htmlFor="date">
                    Deadline:
                    <input 
                        onChange={this.handleInputChange}
                        type="date" 
                        name="date" 
                        id="date" 
                        value={this.state.date}
                        min={this.minDate}
                        max={maxDate}
                    />
                </label>
                <br /><button onClick={this.handleClick}>Dodaj zadanie</button>
            </form>
        );
    }
}
 
export default AddTask;