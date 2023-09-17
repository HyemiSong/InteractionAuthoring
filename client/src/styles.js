import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 0,
    margin: '0px 0px 0px 0px',
    padding: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'black'
  },
  heading: {
    color: 'White',
    fontWeight: '100',
    textAlign: 'left',
    fontSize: 35,
  },
  intro: {
    color: 'White',
    fontWeight: '100',
    textAlign: 'left',
    fontSize: 15,
    lineHeight: 1.6,
    width: '80%',
  },
  image: {
    marginLeft: '15px',
  },
  // margin: {
  //   marginBottom: '15px'
  // }
}));
