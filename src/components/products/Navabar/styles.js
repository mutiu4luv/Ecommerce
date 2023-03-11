import { Fade } from "@mui/material";
// import { makeStyles, ThemeProvider } from "@mui/styles";
import { makeStyles, } from "@material-ui/core";

const drawerWidth = 0

export default makeStyles  ((theme) =>({
appBar: {
    boxShadow:"none",
    borderBottom:"1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up('sm')] : {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
},
 title: {
    flexGrow:"1",
    alignItems:"1",
    display:"flex",
    textDecoration:"none",

 },
 image:{
    marginRight:"10px"
 },
 menuButton:{
    marginRight:theme.spacing(2),
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
 },
 grow:{
    flexGrow:"1"
 },
 search:{
    position:"relative",
    borderRadius:"theme.shape.borderRadius",
    backgroundColor:Fade(theme.palette.common.white, 0.15,),
    "&:hover" : {
        backgroundColor:Fade(theme.palette.common.white, 0.25,)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width:"100%",
    [theme.breakpoints.up("sm")] : {
        width:"auto"
    },
 },
 
}))





// import { createTheme, ThemeProvider } from '@material-ui/core/styles';

// const theme = createTheme({
//   // define your theme properties here
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       {/* your components go here */}
//     </ThemeProvider>
//   );
// }
