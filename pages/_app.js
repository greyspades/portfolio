import '../styles/globals.css'
import '../templates/reflux/assets/css/flex-slider.css'
import '../templates/reflux/assets/css/fontawesome.css'
import '../templates/reflux/assets/css/lightbox.css'
//import '../templates/reflux/assets/css/owl.css'
import '../templates/reflux/assets/css/templatemo-style.css'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-tabs/style/react-tabs.css';
import { createTheme, ThemeProvider } from "@mui/material/styles"; // requires a loader
import 'rc-footer/assets/index.css';
//import MyContext from '../context/mycontext'
//import { createContext,useState} from 'react'

//const MyContext=createContext()

function MyApp({ Component, pageProps }) {
  //const [open,setOpen]=useState(false)

  const theme = createTheme({
    palette: {
       primary: {
          main: "#c62368" // This is an orange looking color
                 },
       secondary: {
          main: "#ffffff"
                  }
             },
          
  
  });

  return(
    <div >

      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
     
    </div>
  )
}

export default MyApp
