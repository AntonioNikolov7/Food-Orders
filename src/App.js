import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CartProvider from "./store/CartProvider";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CartProvider>
          <Header />
          <MealsSummary />
        </CartProvider>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
