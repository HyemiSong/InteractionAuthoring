import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  paper: {
    borderRadius: '0px'
  },
  media: {

    width: '100%', // This ensures the image takes up the full width of its container.
    height: 'auto', // This allows the image height to adjust based on its aspect ratio.
    paddingTop: '56.25%', // 16:9 aspect ratio
    backgroundSize: 'contain', // 이 부분은 이미지가 컨테이너에 맞게 조정되도록 합니다.
    backgroundRepeat: 'no-repeat', // 배경 이미지가 반복되지 않도록 합니다.
    backgroundPosition: 'center', // 이미지가 중앙에 위치하도록 합니다.
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    backgroundSize: 'cover', // This ensures the image covers the entire area of the container.
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: '5px',
    height: '350px',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  largeModalCard: {
    width: '70%',
    position: 'relative',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    maxHeight: '90%',
    overflowY: 'auto',
  },
  // largeMedia: {
  //   height: 0,
  //   paddingTop: '56.25%', // 16:9
  //   // 여기에 추가적인 스타일을 적용하면 됩니다.
  // },
  largeMedia: {
    paddingTop: '56.25%', // 16:9
    width: '100%', // This ensures the image takes up the full width of its container.
    height: 'auto', // This allows the image height to adjust based on its aspect ratio.
    backgroundSize: 'cover', // This ensures the image covers the entire area of the container.
  },  
  message: {
    fontSize: '14px',
    lineHeight: '2',
    fontWeight: '400',
  },
  apple: {
    marginTop: '10px',
    textAlign: 'center',
}
  // closeButton: {
  //   position: 'fixed',
  //   top: '10px',
  //   right: '10px',
  //   backgroundColor: 'black',
  //   color: 'white',
  //   padding: '10px',
  //   '&:hover': {
  //       backgroundColor: '#333',
  //   },
  //   zIndex: 1500 
  // },
});
