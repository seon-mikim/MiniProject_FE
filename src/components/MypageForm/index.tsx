import MyList from './MyList'
import MyInfo from './MyInfo'

function index() {
  return (
    <>
      <MyInfo />
      <MyList title={'나의 연차내역'}/>
      <MyList title={'나의 당직내역'}/>
    </>  
  )
}

export default index