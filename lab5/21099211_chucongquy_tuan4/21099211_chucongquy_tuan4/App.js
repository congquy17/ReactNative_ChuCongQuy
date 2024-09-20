import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
// You can import supported modules from npm

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{ height: 250, width: 250, justifyContent: 'center' }}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73vDfNnuj1CmjAq9XMTWFGQdsZKR2uw-wkg&s',
            }}
          />
        </View>
        <Text style={styles.h2}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome
              style={{ marginLeft: 2 }}
              name="star"
              size={24}
              color="#E0E41A"
            />
            <FontAwesome
              style={{ marginLeft: 2 }}
              name="star"
              size={24}
              color="#E0E41A"
            />
            <FontAwesome
              style={{ marginLeft: 2 }}
              name="star"
              size={24}
              color="#E0E41A"
            />
            <FontAwesome
              style={{ marginLeft: 2 }}
              name="star"
              size={24}
              color="#E0E41A"
            />
            <FontAwesome
              style={{ marginLeft: 2 }}
              name="star"
              size={24}
              color="#E0E41A"
            />
          </View>
          <Text style={{ marginLeft: 25 }}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text>1.790.000 đ</Text>
          </View>
          <Text
            style={{
              marginLeft: 45,
              textDecorationLine: 'line-through',
              fontWeight: 'bold',
            }}>
            1.790.000 đ
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text
            style={{
              fontWeight: '700',
              color: '#FA0000',
            }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <AntDesign
            style={{ marginLeft: 5 }}
            name="questioncircleo"
            size={18}
            color="black"
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              borderWidth: 1,
              flex: 1,
              padding: 10,
            }}>
            <Text
              style={{
                fontWeight: '700',
              }}>
              4 MÀU-CHỌN MÀU
            </Text>
            <AntDesign
              style={{ marginLeft: 5 }}
              name="questioncircleo"
              size={18}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={{ position:'absolute',bottom:5 ,width:'90%'}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            
              flex:1,
              padding: 10,
              backgroundColor:'red'
            }}>
            <Text
              style={{
                fontWeight: '700',
                color:'white'
              }}>
              4 MÀU-CHỌN MÀU
            </Text>
            <AntDesign
              style={{ marginLeft: 5 }}
              name="questioncircleo"
              size={18}
              color='white'
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  h2: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
  },
});
