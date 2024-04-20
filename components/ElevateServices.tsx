import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
// import { Text, View } from '@/components/Themed';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  // Using FontAwesome icons
import Colors from '@/constants/Colors';
import { useState } from 'react';
import { Link, router } from 'expo-router';

type ButtonProps = {
  label: string;
  iconName: string;
  link: string;
};

const ElevateServicesScreen: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const buttons: ButtonProps[] = [
    { label: 'Renta Un Carro', iconName: 'car', link: '/services/carsScreen' },
    { label: 'Aparta Tu Taxi', iconName: 'taxi', link: '/services/driver' },
    { label: 'Notificaciones', iconName: 'bell', link: '/' },
    { label: 'Tag', iconName: 'tag', link: '/' },
    // Add more buttons as needed
  ];

  const handlePress = (link: string) => {
    //@ts-ignore
    router.push(link);
  };

  return (
    <View style={styles.container}>

      <View style={styles.sub_container}>
        <Image
          source={require('../assets/images/LOGO.png')}
          style={styles.img_logo}
        />
        <View style={styles.container_subTitle}>
          <Text style={styles.subTitle}>
            Nuestras mejores opciones para ti
          </Text>
        </View>

        <View style={styles.bottonLayout}>
          {buttons.map((button, index) => {
            const isActive = button.label === activeButton;

            return (
              <>
              { /* @ts-ignore */}
              <TouchableOpacity
                key={index}
                style={[styles.btnStyle, isActive ? styles.activeButton : null]}
                onPress={() => handlePress(button.link)}
              >
                <Icon name={button.iconName} size={35} style={styles.iconStyle} color={isActive ? '#fff' : '#f98a52'}/>
                <Text 
                  style={[styles.buttonText, isActive ? styles.activeText : null]}
                  >{button.label}</Text>
              </TouchableOpacity>
              </>
            )
          }

          )}
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5a00',
  },
  sub_container: {
    margin: 25,
    paddingVertical: 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10
  },
  img_logo: {
    width: "60%",  // Set the width and height as needed
    height: "30%",
    bottom: 65,
  },
  container_subTitle: {
    bottom: 90,
  },
  subTitle: {
    color: '#566573',
  },
  bottonLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',  // Adjust the width as needed
    height: '40%',
    margin: 5,
    padding: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 2,  // Shadow for Android
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  activeButton: {
    backgroundColor: '#ff5a00', // Active background color
  },
  activeText: {
    color: '#fff', // Active text color
  },
  iconStyle: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  buttonText: {
    color: 'black',
    paddingHorizontal: 5
  }
});


export default ElevateServicesScreen;
