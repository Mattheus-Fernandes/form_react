import "./style/App.scss"

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="nameSoccerSchool">Escolinha de Futebol Superstars</h1>
      </header>
      <form className="form">
        <h2 className="title">Ficha de Inscrição</h2>
        <div>
          <label>
            <span>Nome do Aluno:</span>
            <input type="text" name="name" placeholder="Digite o nome do aluno"/>
          </label>
        </div>
        <div>
          <label>
            <span>Data de nascimento:</span>
            <input type="date" name="date"/>
          </label>
        </div>
        <div>
          <label>
            <span>Idade:</span>
            <input type="number" name="age"/>
          </label>
        </div>
        <div>
          <label>
            <span>Endereço:</span>
            <input type="text" name="adress" placeholder="Digite o endereço" />
          </label>      
        </div>
        <div>
          <label>
            <span>Bairro:</span>
            <input type="text" name="neighborhood" placeholder="Digite o bairro"/>
          </label>         
        </div>
        <div>
          <label>
            <span>Cidade:</span>
            <input type="text" name="city" placeholder="Informe o nome da cidade"/>
          </label>
        </div>
        <div>
          <label>
            <span>CEP:</span>
            <input type="text" name="cep" placeholder="XXXXX-XXX"/>
          </label>
        </div>
        <div>
          <label>
            <span>Celular:</span>
            <input type="text" name="phoneNumer" placeholder="(XX) XXXXX-XXXX"/>
          </label>
        </div>
        <div>
          <label>
            <span>Colégio:</span>
            <input type="text" name="school" placeholder="Digite o nome do colégio"/>
          </label>
        </div>
        <div>
          <label>
            <span>Turno:</span>
            <select name="shift">
              <option>--- Selecione o turno ---</option>
              <option value="morning">Manhã</option>
              <option value="after">Tarde</option>
              <option value="night">Noite</option>
            </select>
          </label>
        </div>
        <div>
          <label className="inputRadio">
            <span>Atenção! Tem algum problema de saúde?</span>
            <input type="radio" name="problem" value={"sim"}/>SIM
            <input type="radio" name="problem" value={"nao"}/>NÃO
            <span>Caso sim, favor especificar abaixo:</span>
            <textarea cols="30" rows="1"></textarea>
          </label>
        </div>
        <div>
          <label>
            <span>Tipo Sanguíneo:</span>
            <input type="text" name="typeBlood" placeholder="A, B, AB e O" />
          </label>
        </div>
        <div>
          <label>
            <span>Altura:</span>
            <input type="text" name="height" placeholder="Informe a altura" />
          </label>
        </div>
        <div>
          <label>
            <span>Peso:</span>
            <input type="text" name="weight" placeholder="Informe o peso KG"/>
          </label>
        </div>
        <div>
          <label>
            <span>Posição em campo:</span>
            <input type="text" name="posititon" placeholder="ATA / MC / LT / ZG / GOL"/>
          </label>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default App;
