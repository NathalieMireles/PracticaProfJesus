import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card } from 'react-bootstrap'
import { useState } from 'react';
import './App.css';
import { FormOne,FormTwo,FormThree,FormFour,FormFive,FormSix,FormSeven,FormEight,FormNine,FormTen } from './componentes/Forms';

function App() {

  const [data, setData] = useState({})

  const onChange = (e) => {
    e.preventDefault()
    const obj = data
    obj[e.target.name] = e.target.value
    setData(obj)
  }

  const onClick = () => {
    console.log(data)
    alert('ok')
  }

  return (
    <>
      <Container>
        <Card className='mt-3 '>
          <FormOne onChange={onChange} onClick={onClick}/>
        </Card>
        <Card className='mt-3 '>
          <FormTwo onChange={onChange} onClick={onClick}/>
        </Card>
        <Card className='mt-3 '>
          <FormThree onChange={onChange} onClick={onClick}/>
        </Card>
        <Card className='mt-3 '>
          <FormFour onChange={onChange} onClick={onClick}/>
        </Card>
        <Card className='mt-3 '>
          <FormFive onChange={onChange} onClick={onClick}/>
        </Card>
        <Card className='mt-3 '>
          <FormSix onChange={onChange} onClick={onClick}/>
        </Card>
        <Card>
          <FormSeven onChange={onChange} onClick={onClick}/>
        </Card>
        <Card className='mt-3 '>
          <FormEight onChange={onChange} onClick={onClick}/>
        </Card>
        <Card className='mt-3 '>
          <FormNine onChange={onChange} onClick={onClick}/>
        </Card> 
        <Card className='mt-3 '>
          <FormTen onChange={onChange} onClick={onClick}/>
        </Card>
      </Container>
    </>
  );
}

export default App;
