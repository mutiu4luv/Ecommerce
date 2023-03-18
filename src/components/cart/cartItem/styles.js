import { makeStyles } from "@material-ui/core";

export default makeStyles (() => ({
   // root:{
   //    display:"flex",
   //    flexWrap:"wrap",
   // },

   media:{
      // height:260,
    height:180,
    width:180
   },
   cardContent:{
    display:"flex",
    justifyContent:"space-between"
   },
   cardActions:{
      
    justifyContent:"space-between",

   },
   buttons:{
    display:"flex",
    alignItems:"center"
   }


}))