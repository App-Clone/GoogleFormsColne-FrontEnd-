import AddElement from '../AddElement/AddElement';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function AddQues() {
    const [ques, setQues] = useState([]);
    const onButtonClick = () => {
        setQues([...ques, <AddElement key={ques.length}/>]);
    }
    return (
        <div>
            {ques}
            <div className='d-flex flex-row-reverse mb-3'>
            <Button onClick={onButtonClick}>Add New</Button>
            </div>
        </div>
    );
}

export default AddQues;