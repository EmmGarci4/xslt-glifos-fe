import React from 'react';
import './App.css';
//material
import Button from '@material-ui/core/Button';
import { Container, Grid, TextField } from '@material-ui/core';

const CodeContainer = (props) => {
  return (
    <div className="container-xml" >
      <code>
        <TextField fullWidth className="textarea"
          label={props.placeholder} multiline rows={20} variant="outlined"
        />
      </code>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Derivador Simbólico XSLT</h1>
      </header>
      <Container>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid container direction="row">
            <Grid item xs={6}>
              <CodeContainer xmlText="Holiiiii" />
            </Grid>
            <Grid item xs={6}>
              <CodeContainer xmlText="Holiiiii" />
            </Grid>
          </Grid>
          <Button className="btn-calc" variant="contained" color="primary">Calcular</Button>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
