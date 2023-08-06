import {StyleSheet,} from 'react-native'

const SeeMore = () => {
  return(
    //emoji : 충전가능 or 충전 불가능 한눈에 확인
    <emoji></emoji>,

    //mainInfo : 충전소 간략정보(충전소이름, 주소, 이용가능시간)
    <mainInfo></mainInfo>,

    //detailInfo : 자세한 정보(차량 있음, 전기차or 가솔린차, 차지타입,,,)
    <detailInfo></detailInfo>
)
}

const styles = StyleSheet.create({
  
});

export default SeeMore;