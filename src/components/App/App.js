import React from 'react';
import './App.css';
import axios from 'axios';

//material
import Button from '@material-ui/core/Button';
import { Container, Grid, TextField } from '@material-ui/core';

export class App extends React.Component {

  constructor() {
    super();
    //state
    this.state = { input: '', output: '' }
    //funciones
    this.onCalc = this.onCalc.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  /**
   * Se ejecuta al dar click al boton
   */
  async onCalc() {
    //consulta a API
    var derivate = await axios.post('http://localhost:8080/derivate', {xmlText:this.state.input})
    .then(response=>response.data.derivate)
    .catch(function (error) {
      console.log(error);
      return '';
    });
    //cambio de ouput en state
    this.setState({output:derivate})
  }


  /**
   * Actualiza el valor de input en el state
   * @param {*} e evento de onChange
   */
  handleChangeInput(e){
    this.setState({ input: e.target.value });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Derivador Simbólico XSLT</h1>
        </header>
        <Container>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid container direction="row">
              <Grid item xs={6}>
                <div className="container-xml" >
                  <TextField fullWidth className="textarea"
                    label="Función..." multiline rows={20} variant="outlined"
                    onChange={this.handleChangeInput}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="container-xml" >
                  <TextField fullWidth className="textarea"
                    label="Derivada..." multiline rows={20} variant="outlined"
                    value={this.state.output}
                  />
                </div>
              </Grid>
            </Grid>
            <Button onClick={this.onCalc} className="btn-calc" variant="contained" color="primary">Calcular</Button>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
