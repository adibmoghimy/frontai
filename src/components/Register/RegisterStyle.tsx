const styles: any = {
    container: {
      width: '100%',
      height: '100%',
      flexDirection: 'column'
    },
    card: {
        margin: 'auto',
        display: ['block','!important'],
        alignItem: 'center',
        textAlign:'center',
        width:'100%',
        padding:'15%'
    },
    textFiled: {
      marginTop: 10,
      flip: false,
      '& input': {
        paddingLeft: 8,
        textAlign: 'left',
        direction: 'ltr'
      }
    },
    button: {
      width: '100%',
      padding: [[10, 8]],
      margin: 'auto',
      color: '#fff'
    },
    gButton:{
      width: '100%',
      padding: [[10, 8]],
      margin: 'auto',
      color: 'blue'
    },
    paragheraph:{
      margin:0,
      marginLeft:'50%'
    },
    divider: {
      margin: 15
    },
    bgImage:{
        backgroundImage:"url(main-dashboard-background.png)",
        padding:18,
        alignItems: 'center',
        backgroundColor: '#F5F4F2'
      },
      
      imageWraper:{
        display:['block', '!important'],
        textAlign: ' center'
      },
      
      img:{
        maxWidth: "80%",
      }
  
  };

  export default styles;