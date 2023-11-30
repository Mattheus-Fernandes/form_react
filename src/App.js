import { useState } from "react";
import "./style/App.scss"

function App() {

  const [name, setName] = useState()
  const [dateBorn, setDateBorn] = useState()
  const [age, setAge] = useState()
  const [adress, setAdress] = useState()
  const [neighborhood, setNeiborhood] = useState()
  const [city, setCity] = useState()
  const [cep, setCep] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [school, setSchool] = useState()
  const [shift, setShift] = useState()
  const [problem, setProblem] = useState()
  const [description, setDescription] = useState()
  const [typeBlood, setTypeBlood] = useState()
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [posititon, setPosition] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(name, dateBorn, age, adress, neighborhood, city, cep, phoneNumber, school, shift, problem, description, typeBlood, height, weight, posititon)
  } 

  return (
    <div className="App">
      <header>
        <h1 className="nameSoccerSchool">Escolinha de Futebol Superstars</h1>
      </header>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="title">Ficha de Inscrição</h2>
        <div>
          <label>
            <span>Nome do Aluno:</span>
            <input 
              type="text" 
              name="name" 
              placeholder="Digite o nome do aluno"  
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Data de nascimento:</span>
            <input 
              type="date" 
              name="date"
              onChange={(event) => setDateBorn(event.target.value)}
            /
            >
          </label>
        </div>
        <div>
          <label>
            <span>Idade:</span>
            <input 
              type="number" 
              name="age"
              onChange={(event) => setAge(event.target.value)}            
            />
          </label>
        </div>
        <div>
          <label>
            <span>Endereço:</span>
            <input 
              type="text" 
              name="adress" 
              placeholder="Digite o endereço" 
              onChange={(event) => setAdress(event.target.value)}
            />
          </label>      
        </div>
        <div>
          <label>
            <span>Bairro:</span>
            <input 
              type="text" 
              name="neighborhood" 
              placeholder="Digite o bairro"
              onChange={(event) => setNeiborhood(event.target.value)}
            />
          </label>         
        </div>
        <div>
          <label>
            <span>Cidade:</span>
            <input 
              type="text" 
              name="city" 
              placeholder="Informe o nome da cidade"
              onChange={(event) => setCity(event.target.value)}  
            />
          </label>
        </div>
        <div>
          <label>
            <span>CEP:</span>
            <input 
              type="text" 
              name="cep" 
              placeholder="XXXXX-XXX"
              onChange={(event) => setCep(event.target.value)}  
            />
          </label>
        </div>
        <div>
          <label>
            <span>Celular:</span>
            <input 
              type="text" 
              name="phoneNumber" 
              placeholder="(XX) XXXXX-XXXX"
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Colégio:</span>
            <input 
              type="text" 
              name="school" 
              placeholder="Digite o nome do colégio"
              onChange={(event) => setSchool(event.target.value)}  
            />
          </label>
        </div>
        <div>
          <label>
            <span>Turno:</span>
            <select name="shift" onChange={(event) => setShift(event.target.value)}>
              <option>--- Selecione o turno ---</option>
              <option value="Manhã">Manhã</option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
            </select>
          </label>
        </div>
        <div>
          <label className="inputRadio">
            <span>Atenção! Tem algum problema de saúde?</span>
            <input 
              type="radio" 
              name="problem" 
              value={"SIM"}
              onChange={(event) => setProblem(event.target.value)}/>SIM
            <input 
              type="radio" 
              name="problem" 
              value={"NÃO"}
              onChange={(event) => setProblem(event.target.value)}/>NÃO
            <span>Caso sim, favor especificar abaixo:</span>
            <textarea 
              name="description" 
              cols="30" rows="1"
              value={" "}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </label>
        </div>
        <div>
          <label>
            <span>Tipo Sanguíneo:</span>
            <input 
              type="text" 
              name="typeBlood" 
              placeholder="A, B, AB e O" 
              onChange={(event) => setTypeBlood(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Altura:</span>
            <input 
              type="text" 
              name="height" 
              placeholder="Informe a altura" 
              onChange={(event) => setHeight(event.target.value)}  
            />
          </label>
        </div>
        <div>
          <label>
            <span>Peso:</span>
            <input 
              type="text" 
              name="weight" 
              placeholder="Informe o peso KG"
              onChange={(event) => setWeight(event.target.value)}  
            />
          </label>
        </div>
        <div>
          <label>
            <span>Posição em campo:</span>
            <input 
              type="text" 
              name="posititon" 
              placeholder="ATA / MC / LT / ZG / GOL"
              onChange={(event) => setPosition(event.target.value)}  
            />
          </label>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default App;
