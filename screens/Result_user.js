const Result_user = () => {
  return(
    //mainInfo : 충전소 간략정보(충전소이름, 주소, 이용가능시간)
    <mainInfo></mainInfo>,
    //briefInfo : 충전가능 or 충전불가능만 빠르게 한눈에 알려주는 Text공간
    <briefInfo></briefInfo>,
    //chgSpace: 해당 충전소 모든 자리(번호)
    <chgSpace></chgSpace>
  )
}

const styles = StyleSheet.create({

});

export default Result_user;