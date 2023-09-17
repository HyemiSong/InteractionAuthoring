
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 40
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  paper: {
    width: '500px',  // 이 부분을 추가하세요
    // 기타 스타일
  },
  customButton: {
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
      backgroundColor: 'yellow'
    },
    margin: 40,
    paddingTop: '20px',
    paddingRight: '40px',
    paddingBottom: '20px',
    paddingLeft: '40px',
    float: 'right',
    borderRadius: '100px'
  },
  marginTop: {
    marginTop:'10px',
  },
  message: {
    '&.MuiFormControl-fullWidth': {
      margin: 0,
      marginTop:'10px',
    },
  }
}));
