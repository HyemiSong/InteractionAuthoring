import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%', // 전체 너비로 설정
    padding: theme.spacing(2), // 패딩 추가
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  font: {
    fontWeight: 100
  },
  unified: {
    fontSize: 25,
    color: 'grey',
    paddingBottom: '5px',
    paddingTop: '10px',
    marginBottom: 30,
    textAlign: 'center',
    // fontFamily: "'Arial', 'Helvetica', sans-serif",  // 수정된 부분
  },
  intent: {
    fontSize: 15,
    marginTop: 5,
  },
  authintent: {
    fontSize: 18,
    lineHeight: 1.2
    // textDecoration: 'underline',
  },
  userintent: {
    fontSize: 18,
    marginBottom: 13
    // textDecoration: 'underline',
  },
  margin: {
    marginBottom: 40
  }
}));
