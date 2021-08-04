import { Container, CssBaseline } from "@material-ui/core";
import React from "react";
import Header from "./components/Header"; 
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Form from "./components/Form";

function App() {

  const theme = React.useMemo(
    () => createTheme({
      palette: {
        type: 'dark',
      },
    }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" style={{"textAlign":"center"}}>
        <Header txt="Docker Project" clase="primary" size={1} margin="20px"/>
        <Form />
      </Container>
    </ThemeProvider>
  );
}

export default App;
