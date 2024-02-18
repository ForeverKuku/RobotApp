
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import HomeImage from 'assets/home.png';
import WatchlistImage from 'assets/watchlist.png';
import PriceAlertImage from 'assets/price_alert.png'; 
import ConvertImage from 'assets/convert.png'; 
import NeoImage from 'assets/neo.jpeg';
import VechainImage from 'assets/vechain.png';
import BytecoinImage from 'assets/bytecoin.png';
import BitcoinImage from 'assets/bitcoin.png';



const CryptoWalletScreen = () => {
  return(
     <View style={{ flex: 1 }}>
   <View style={styles.topIconsContainer}>
      <TouchableOpacity>
      <View style={{
      width: 30,
      height: 30, 
      borderRadius: 15, 
      borderWidth: 2, 
      borderColor: 'white', 
      justifyContent: 'center',
      alignItems: 'center',
      overflow:'hidden',
    }}>
        <Image source={PriceAlertImage} style={styles.topIcon} />
        </View>
        
        <Text>price_alert</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{
      width: 30,
      height: 30, 
      borderRadius: 15, 
      borderWidth: 2, 
      borderColor: 'white', 
      justifyContent: 'center',
      alignItems: 'center',
      overflow:'hidden',
    }}>
        <Image source={ConvertImage} style={styles.topIcon} />
        </View>
        <Text>convert</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{
      width: 30,
      height: 30, 
      borderRadius: 15, 
      borderWidth: 2, 
      borderColor: 'white', 
      justifyContent: 'center',
      alignItems: 'center',
      overflow:'hidden',
    }}>
        <Image source={ConvertImage} style={styles.topIcon} />
        </View>
        <Text>compare</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{
      width: 30,
      height: 30, 
      borderRadius: 15, 
      borderWidth: 2, 
      borderColor: 'white', 
      justifyContent: 'center',
      alignItems: 'center',
      overflow:'hidden',
    }}>
        <Image source={WatchlistImage} style={styles.topIcon} />
        </View>
        <Text>watchlist</Text>
      </TouchableOpacity>
    </View>
    {/* </LinearGradient> */}

    {/* Content section */}
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
    <View style={{ flex: 1, marginVertical: 20 }}>
      <Text style={styles.title}>WatchList</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
           <View style={styles.card}>
  <View style={styles.cardContent}>
    <Text style={{ color: 'gray' }}>NEO</Text>
    <Text style={styles.coinText}>NEO 0.2124</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={styles.coinValue}>$32,128.80          +2.5%</Text>
    </View>
  </View>
  <Image source={NeoImage} style={{ width: 20, height: 20 }} />
</View>

  <View style={styles.card}>
    <View>
      <Text style={{color:'gray'}}>VETCOIN</Text>
      <Text style={styles.coinText}>VETCOIN 0.2124</Text>
      <Text style={styles.coinValue}>$32,128.80        +2.5% </Text>
    </View>
    <Image source={VechainImage} style={{ width: 50, height: 50 }} />
  </View>
</ScrollView>
      </View>
      <View style={{ marginVertical: 20, width: '100%' }}>
  <View style={{ marginLeft: 10 }}>
    <Text style={{ fontSize: 26, textAlign: 'left' }}>Trending</Text>
  </View>

  <View style={{ height: 20 }}>
    </View> 
 {/* Bitcoin Row */}
 <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 10 }}>
 <View style={{
      width: 30,
      height: 30, 
      borderRadius: 15, 
      borderWidth: 2, 
      borderColor: '#F7931A', 
      justifyContent: 'center',
      alignItems: 'center',
      overflow:'hidden',
    }}>
    <Image source={BitcoinImage} style={{ width: 39, height: 36, marginRight: 10, borderRadius:26 }}/>
    </View>
    <Text>Bitcoin</Text>
    <Text style={{ marginLeft: 10 }}>$32,128.80</Text>
    <Text style={{ marginLeft: 10, color: 'green' }}>+2.5%</Text>
  </View>


  {/* Spacing between Bitcoin and Bytecoin */}
  <View style={{ height: 20 }}></View>


  {/* Bytecoin Row */}
  <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
  <View style={{
      width: 30,
      height: 30, 
      borderRadius: 15, 
      borderWidth: 2, 
      borderColor: '#F04086', 
      justifyContent: 'center',
      alignItems: 'center',
      overflow:'hidden',
    }}>
    <Image source={BytecoinImage} style={{ width: 55, height: 55, marginRight: 10,  borderRadius:13 }}/>
     </View>
    <Text>Bytecoin</Text>
    <Text style={{ marginLeft: 10 }}>$15,313.81</Text>
    <Text style={{ marginLeft: 10, color: 'green' }}>+10%</Text>
  </View>
</View>
</ScrollView>

    {/* Navigation bar */}
    <View style={styles.navBar}>
      <TouchableOpacity>
        <Image source={HomeImage} style={styles.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={PriceAlertImage} style={styles.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={ConvertImage} style={styles.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={WatchlistImage} style={styles.navIcon} />
      </TouchableOpacity>
    </View>
    </View>
);
};

const styles = StyleSheet.create({
  
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
navBar: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  borderTopWidth: 1,
  borderTopColor: '#ccc',
  paddingVertical: 10,
  backgroundColor: 'white',
},
navIcon: {
  width: 24,
  height: 24,
},
topIconsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingVertical: 12,
  shadowColor:'#FFEBE4',
},
topIcon: {
  width: 24, 
  height: 24, 
  resizeMode: 'contain', 
},
title: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
},
card: {
  backgroundColor: '#ffffff',
  borderRadius: 8,
  padding: 20,
  marginRight: 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
  width: 250,
  height: 150, 
},
cardContent: {
  flex: 1,
},
coinValue: {
  marginRight: 10, 
},
coinText: {
  fontWeight: 'bold',
},
coinValue: {
  marginLeft: 10,
},
coinChange: {
  marginLeft: 10,
  color: 'green',
},
iconGradient: {
  width: 30,
  height: 30,
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
},
});

export default CryptoWalletScreen;

