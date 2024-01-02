// 
// Tanggung jawab: Fungsi utama react untuk membuat komponen react
import React, { useEffect } from 'react';

//  
// Tanggung jawab: Komponen yang mengelola navigasi atau sebagai wadah seluruh navigasi
import { NavigationContainer } from '@react-navigation/native';

// 
// Tanggung jawab: membuat navigator Stack yang mengatur navigasi antar layar atau menentukan perpindahan antar layar 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 
// Tanggung jawab: membuat navigator Tab yang mengatur tab navigation pada layar utama
// Navigator Tab digunakan untuk membuat tata letak dengan tab yang memungkinkan pengguna untuk beralih antara layar yang berbeda dengan cepat.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 
// Komponen ini digunakan untuk membangun tampilan dan interaksi. 
// View: digunakan untuk mengatur tata letak 
// Image: digunakan untuk menampilkan gambar
// Text: digunakan untuk menampilkan teks
// StatusBar: digunakan untuk mengontrol status bar perangkat
// TouchableOpacity: digunakan untuk menampilkan sesuatu dengan keinginan bisa disentuh sehingga bisa merespons interaksi yang ada di dalamnya oleh pengguna
// ScrollView: digunakan untuk melakukan scroll atau gulir dalam suatu tata letak/view
// Alert: digunakan untuk menampilkan pesan pop-up kepada pengguna.
import { View, Image, StatusBar, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

// mengimpor gambar dari internal atau file lokal
import icon from './assets/icons/ic_logo2.png';
import iconSaldo from './assets/icons/iconIsiSaldo.png';
import iconWoman from './assets/icons/womanProfile.png';
import iconMan from './assets/icons/manProfile.png';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false,}}/>
                <Stack.Screen name="Masuk" component={Masuk} options={{ headerShown: false,}}/>
                <Stack.Screen name="Daftar" component={Daftar} options={{ headerShown: false,}}/>
                <Stack.Screen name="HalamanUtama" component={HalamanUtama} options={{ headerShown: false,}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const HalamanUtama = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {backgroundColor: '#555555'},
            tabBarActiveTintColor: '#FFF5E1',
            tabBarInactiveTintColor: '#FFFFFF'

            }}>
            <Tab.Screen name="Beranda" component={Beranda} options={{headerShown: false, }}/>
            <Tab.Screen name="Pesanan" component={Pesanan} options={{headerShown: false, }}/>
            <Tab.Screen name="Obrolan" component={Obrolan} options={{headerShown: false, }}/>
            <Tab.Screen name="Profil" component={Profil} options={{headerShown: false, }}/>
        </Tab.Navigator>
    );
};

const Splash = ({navigation}) => {
    useEffect (() => {
        setTimeout(() => {
            navigation.replace('Masuk');
        }, 3000);
    });
    return (
        <View style={{
                flex: 1,
                backgroundColor: '#555555',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <StatusBar backgroundColor={'#555555'}/>
                <Image 
                source={icon}
                style={{
                    width: 125, 
                    height: 125,
                    }}/>
        </View>
    );
};

const Header = (props) => {
    return (
        <View style={{
          backgroundColor: '#555555', 
          paddingVertical: 5, 
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center', 
          elevation: 20,}}>
            <StatusBar backgroundColor={"#555555"}/>
            <View style={{
                flex: 1, 
                flexDirection: 'row',}}>
              <Image 
                source={icon} 
                style={{
                    width: 70, 
                    height: 70}}/>
            </View>
            <View style={{alignContent: 'center'}}>
              <Text style={{
                    fontSize: 20, 
                    fontWeight: 'bold',
                    fontFamily: 'open-sans',
                    color: '#FFF5E1',}}>
                  {props.subJudul}
              </Text>
            </View>
            <View style={{flex: 1}}></View>
        </View>
    );
};

const Masuk = ({ onPress, navigation }) => {

    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    };

    return(
        <View style={{
            flex:1,
            backgroundColor: '#E6E6FA'}}>
            <Header />
            <View style={{
                backgroundColor: '#E6E6FA',
                marginTop: 33,
                marginHorizontal: 46,
                flexDirection: 'row',
                alignItems:'center',
                justifyContent:'space-around'}}>
                <TouchableOpacity style={{
                    flex:1,
                    width: 132,
                    height: 33,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopLeftRadius: 10,
                    backgroundColor: '#555555',
                    borderBottomWidth: 3,
                    borderBottomColor: '#555555',
                    elevation: 10,}} >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#FFF5E1'}}>Masuk 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        flex:1,
                        width: 132,
                        height: 33,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopRightRadius: 10,
                        backgroundColor: '#E6E6FA',
                        borderBottomWidth: 3,
                        borderBottomColor: '#555555',
                        elevation: 10,}} 
                    onPress={() => handleGoTo('Daftar')}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#555555'}}>Daftar
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor: '#555555',
                marginTop: 34,
                marginHorizontal: 46,
                height: 352,
                borderRadius: 10,
                alignItems: 'center'}}>
                <Text style={{
                    fontSize: 25,
                    textAlign: 'center',
                    marginTop: 15,
                    marginBottom: 30,
                    marginHorizontal: 10,
                    fontWeight: 'bold',
                    color: '#FFF5E1', }}>Selamat Datang di JahitKu!
                </Text>
                <TextInput 
                    placeholder='Masukkan email' 
                    style={{
                        backgroundColor: '#FFF5E1',
                        borderRadius: 2,
                        elevation: 25,
                        width: 250,
                        height: 40,
                        marginBottom: 20,
                        padding: 10,
                        color: '#555555'}}/>
                <TextInput 
                    placeholder='Masukkan password' 
                    style={{
                        backgroundColor: '#FFF5E1',
                        borderRadius: 2,
                        elevation: 25,
                        width: 250,
                        height: 40,
                        marginBottom: 20,
                        padding: 10,
                        color: '#555555'}} 
                    secureTextEntry={true}/>
                <TouchableOpacity  
                    style={{
                        backgroundColor: '#FFF5E1',
                        width: 110,
                        height: 35,
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        elevation: 25,}} 
                    onPress={() => handleGoTo('HalamanUtama')}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#555555'}}> Masuk
                    </Text>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 14,
                    textAlign: 'center',
                    marginTop: 20,
                    marginBottom: 30,
                    marginHorizontal: 10,
                    color: '#FFF5E1'}}>Jika belum memiliki akun, silahkan daftar telebih dahulu.
                </Text>
            </View>
        </View>
    );
};

const Daftar = ({navigation, onPress}) => {

     const handleGoTo = (screen) => {
        navigation.navigate(screen);
    };

    return(
        <View style={{
            flex:1,
            backgroundColor: '#E6E6FA'}}>
            <Header />
            <ScrollView>
                <View style={{
                    backgroundColor: '#E6E6FA',
                    marginTop: 33,
                    marginHorizontal: 46,
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent:'space-around'}}>
                    <TouchableOpacity 
                        style={{
                            flex:1,
                            width: 132,
                            height: 33,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderTopLeftRadius: 10,
                            backgroundColor: '#E6E6FA',
                            borderBottomWidth: 3,
                            borderBottomColor: '#555555',
                            elevation: 10,}} 
                        onPress={() => handleGoTo('Masuk')}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#555555'}}>Masuk
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flex:1,
                        width: 132,
                        height: 33,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopRightRadius: 10,
                        backgroundColor: '#555555',
                        borderBottomWidth: 3,
                        borderBottomColor: '#555555',
                        elevation: 10,}}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#FFF5E1'}}>Daftar
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: '#555555',
                    marginTop: 34,
                    marginHorizontal: 46,
                    height: 600,
                    borderRadius: 10,}}>
                    <Text style={{
                        fontSize: 25,
                        textAlign: 'center',
                        marginTop: 15,
                        marginBottom: 20,
                        marginHorizontal: 10,
                        fontWeight: 'bold',
                        color: '#FFF5E1',}}>Silahkan daftar dengan mengisi yang ada di bawah ini!
                    </Text>
                    <Text style={{
                        marginLeft: 25,
                        color: '#FFF5E1',}}>Nama Lengkap: 
                    </Text>
                    <TextInput 
                        placeholder='Masukkan nama' 
                        style={{
                            backgroundColor: '#FFF5E1',
                            borderRadius: 2,
                            elevation: 25,
                            width: 250,
                            height: 40,
                            marginBottom: 5,
                            marginLeft: 25,
                            padding: 10,
                            color: '#555555'}}                       
                    />
                    <Text style={{
                        marginLeft: 25,
                        color: '#FFF5E1',}}>Email: 
                    </Text>
                    <TextInput 
                        placeholder='Masukkan email' 
                        style={{
                            backgroundColor: '#FFF5E1',
                            borderRadius: 2,
                            elevation: 25,
                            width: 250,
                            height: 40,
                            marginBottom: 5,
                            marginLeft: 25,
                            padding: 10,
                            color: '#555555'}}
                    />
                    <Text style={{
                        marginLeft: 25,
                        color: '#FFF5E1'}}>No. HP: 
                    </Text>
                    <TextInput 
                        placeholder='Masukkan No. HP' 
                        style={{
                            backgroundColor: '#FFF5E1',
                            borderRadius: 2,
                            elevation: 25,
                            width: 250,
                            height: 40,
                            marginBottom: 5,
                            marginLeft: 25,
                            padding: 10,
                            color: '#555555'}} 
                    />
                    <Text style={{
                        marginLeft: 25,
                        color: '#FFF5E1'}}>Alamat: 
                    </Text>
                    <TextInput 
                        placeholder='Masukkan alamat' 
                        style={{
                            backgroundColor: '#FFF5E1',
                            borderRadius: 2,
                            elevation: 25,
                            width: 250,
                            height: 40,
                            marginBottom: 5,
                            marginLeft: 25,
                            padding: 10,
                            color: '#555555'}} 
                    />
                    <Text style={{
                        marginLeft: 25,
                        color: '#FFF5E1'}}>Masukkan Password: 
                    </Text>
                    <TextInput 
                        placeholder='Masukkan password' 
                        style={{
                            backgroundColor: '#FFF5E1',
                            borderRadius: 2,
                            elevation: 25,
                            width: 250,
                            height: 40,
                            marginBottom: 5,
                            marginLeft: 25,
                            padding: 10,
                            color: '#555555'}} 
                        secureTextEntry={true}
                    />
                    <Text style={{
                        marginLeft: 25,
                        color: '#FFF5E1',}}>Konfirmasi Password: 
                    </Text>
                    <TextInput 
                        placeholder='Masukkan password' 
                        style={{
                            backgroundColor: '#FFF5E1',
                            borderRadius: 2,
                            elevation: 25,
                            width: 250,
                            height: 40,
                            marginBottom: 5,
                            marginLeft: 25,
                            padding: 10,
                            color: '#555555'}} 
                        secureTextEntry={true}
                    />
                    <View style={{
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        marginTop: 15}}>
                            <TouchableOpacity 
                                style={{
                                    backgroundColor: '#FFF5E1',
                                    width: 110,
                                    height: 35,
                                    marginTop: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 5,
                                    elevation: 25,}} 
                                onPress={() => Alert.alert(
                                'SELAMAT ANDA BERHASIL MENDAFTAR!', 
                                'Silahkan Masuk Menggunakan Akun Anda'
                                )}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: '#555555'}}>Daftar
                                </Text>
                            </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 50}}></View>
            </ScrollView>
        </View>
    );
};

const Beranda = () => {
    return (
        <View style={{flex: 1}}>
            <Header  subJudul={"BERANDA"}/>
            <TextInput 
                placeholder='Cari Penjahit Terdekat' 
                style={{
                    borderWidth: 1, 
                    marginHorizontal: 26, 
                    marginVertical: 13, 
                    borderRadius: 25, 
                    paddingHorizontal: 25}}/>
            <View style={{alignItems: 'center'}}>
                <View style={{
                    backgroundColor: '#555555', 
                    width: 343, 
                    height: 108, 
                    flexDirection: 'row', 
                    alignItems:'center', 
                    paddingLeft: 26, 
                    borderRadius: 15}}>
                    <View style={{
                        backgroundColor: '#E6E6FA', 
                        width: 134, 
                        height: 74, 
                        borderRadius: 10}}>
                        <View style={{
                            paddingLeft: 11, 
                            paddingTop: 10}}>
                            <Text style={{
                                fontSize: 14, 
                                fontWeight: 'bold'}}>Saldo Anda
                            </Text>
                            <Text style={{
                                fontSize: 14, 
                                fontWeight: 'bold', 
                                marginTop: 2}}>0 
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        marginLeft: 19, 
                        alignItems: 'center'}}>
                        <Image 
                            source={iconSaldo} 
                            style={{
                                width: 35, 
                                height: 35, 
                                tintColor: '#E6E6FA'}}    
                        />
                        <Text style={{
                            color: '#E6E6FA', 
                            fontSize: 12, 
                            fontWeight: 'bold'}}>Isi Saldo 
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{
                borderBottomColor: '#555555',
                borderBottomWidth: 1, 
                width: 239, 
                height: 21, 
                marginTop: 18, 
                marginLeft: 12}}>
                <Text>Rekomendasi Penjahit Daerah Anda</Text>
            </View>
            <View style={{
                width: 335, 
                height: 62, 
                borderWidth: 1, 
                marginTop: 15, 
                marginLeft: 12, 
                borderRadius: 3, 
                alignItems: 'center', 
                paddingLeft: 5, 
                flexDirection: 'row'}}>
                <Image 
                    source={iconWoman} 
                    style={{
                        width: 45, 
                        height: 45}}
                />
                <View style={{width: 200}}>
                    <Text style={{
                        fontSize: 15, 
                        fontWeight: 'bold'}}>Ani Rosyanti
                    </Text>
                    <Text style={{fontSize: 12}}>Sumedang, Tanjungsari, Perum Griya Taman Lestari, Blok C4, No. 16 </Text>
                </View>
            </View>
            <View style={{
                width: 335, 
                height: 62, 
                borderWidth: 1, 
                marginTop: 15, 
                marginLeft: 12, 
                borderRadius: 3, 
                alignItems: 'center', 
                paddingLeft: 5, 
                flexDirection: 'row'}}>
                <Image 
                    source={iconMan} 
                    style={{
                        width: 45, 
                        height: 45}}/>
                <View style={{width: 200}}>
                    <Text style={{
                        fontSize: 15, 
                        fontWeight: 'bold'}}>XXXXXXXX 
                    </Text>
                    <Text style={{fontSize: 12}}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Text>
                </View>
            </View>
            <View style={{
                width: 335, 
                height: 62, 
                borderWidth: 1, 
                marginTop: 15, 
                marginLeft: 12, 
                borderRadius: 3, 
                alignItems: 'center', 
                paddingLeft: 5, 
                flexDirection: 'row'}}>
                <Image 
                    source={iconMan} 
                    style={{
                        width: 45, 
                        height: 45}}/>
                <View style={{width: 200}}>
                    <Text style={{
                        fontSize: 15, 
                        fontWeight: 'bold'}}>XXXXXXXX
                    </Text>
                    <Text style={{fontSize: 12}}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Text>
                </View>
            </View>
        </View>
    );
};

const Pesanan = () => {
    return(
        <View>
            <PesananRiwayat />
            {/* <PesananProses />
            <PesananKeranjang /> */}
        </View>
    );
};

const PesananRiwayat = ({ navigation }) => {

    {/* const handleGoTo = (screen) => {
        navigation.navigate(screen);
    }; */}

    return (
        <View style={{backgroundColor: '#E6E6FA'}}>
            <Header subJudul={'PESANAN'}/>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', height:50, }}>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E6FA', height: 46, weight: 120, flex: 1, borderBottomWidth: 2, borderColor: '#555555'}}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#555555', }}>Riwayat</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E6FA', height: 46, weight: 120, flex: 1,}}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15, color: '#555555', }}>Proses</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E6FA', height: 46, weight: 120, flex: 1,}}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15, color: '#555555', }}>Keranjang</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{height: 600, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Tidak ada riwayat pesanan.</Text>
            </View>
        </View>
    );
};

const PesananProses = ({ navigation }) => {

    {/* const handleGoTo = (screen) => {
        navigation.navigate(screen);
    }; */}

    return (
        <View style={{flex: 1, backgroundColor: '#E6E6FA'}}>
            <Header subJudul={'PESANAN'}/>
            <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', height:50, }}>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E6FA', height: 46, weight: 120, flex: 1,}}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15, color: '#555555', }}>Riwayat</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E6FA', height: 46, weight: 120, flex: 1, borderBottomWidth: 2, borderColor: '#555555'}}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#555555', }}>Proses</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E6FA', height: 46, weight: 120, flex: 1,}}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15, color: '#555555', }}>Keranjang</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Tidak ada pesanan yang sedang diproses.</Text>
            </View>
        </View>
    );
};

const PesananKeranjang = ({ navigation }) => {

    {/* const handleGoTo = (screen) => {
        navigation.navigate(screen);
    }; */}

    return (
        <View style={{flex: 1, backgroundColor: '#E6E6FA'}}>
            <Header subJudul={'PESANAN'}/>
            <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', height:50, }}>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E6FA', height: 46, weight: 120, flex: 1,}}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15, color: '#555555', }}>Riwayat</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E6FA', height: 46, weight: 120, flex: 1,}}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15, color: '#555555', }}>Proses</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E6FA', height: 46, weight: 120, flex: 1, borderBottomWidth: 2, borderColor: '#555555'}}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#555555', }}>Keranjang</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Anda belum memasukkan apapun ke dalam keranjang.</Text>
            </View>
        </View>
    );
};

const Obrolan = () => {
    return(
        <View style={{flex: 1, backgroundColor: '#E6E6FA'}}>
            <Header subJudul={'OBROLAN'}/>
        </View>
    );
};

const Profil = () => {
    return(
        <View style={{flex: 1, backgroundColor: '#E6E6FA'}}>
            <Header subJudul={'PROFIL'}/>
        </View>
    );
};

export default App;