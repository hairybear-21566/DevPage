import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
  appBar: {
    background: 'rgba(100,100,100,1)',
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
}));