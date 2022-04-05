import React from 'react';

const Task = (props) => {

    const {text, date, id, active, important, finishDate} = props.task;
    const importantStyle= {
        color: 'red',
    }

    if(active){
    return ( 
        <div className='task'>
            <p>
                <strong style={important ? importantStyle : null}>{text}</strong> - do <span>{date} </span> 
            </p>
            <div>
                <button onClick={()=> props.done(id)}>Wykonane</button>
                <button className='delete' onClick={()=> props.delete(id)}>X</button>
                </div>
        </div>
     );
    }else{

        const finish = new Date(finishDate).toLocaleDateString()

        return(
            <div className="task">
                <p>
                <strong>{text}</strong><em> (zrobić do {date})</em> 
                <br />
                - potwierdzenie wykonania <span>{finish} </span>
            </p>
                <button className='delete' onClick={()=> props.delete(id)}>X</button>
            </div>
        );
    }
}
 
export default Task;