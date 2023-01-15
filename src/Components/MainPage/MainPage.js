import React from 'react'
import useForm from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const {form,onChange,clear} = useForm({
    nome:'',
    modulos:'',
    tecnologias:'',
    responsavel:''
  })
  console.log(form.nome , form.modulos , form.tecnologias,form.responsavel);
  const EnviarDados = ()=>{
    // e.preventDefault()
    clear()
    alert('DADOS ENVIADOS')
  }
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={()=>EnviarDados()}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name='nome'
          onChange={onChange}
          pattern='[a-zA-Z]{5}'
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name='modulos'
          onChange={onChange}
          pattern='[2-9]'
          required
          
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name='tecnologias' 
          onChange={onChange}
          required

        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name='responsavel'
          onChange={onChange}
          required

        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage