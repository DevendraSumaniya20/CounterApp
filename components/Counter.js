import {
  Alert,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect, useMemo, useCallback} from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Counter = () => {
  const [randomImage, setRandomImage] = useState('');

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const PressedConter = () => {
    Alert.alert('This app made by Devendra Sumaniya ');
  };

  const IncrementCounter = useCallback(() => {
    setCount(count + 1);
    setTotal(total + 1);
  });

  const DecrementCounter = useCallback(() => {
    if (count > 0) setCount(count - 1);
    setTotal(total + 1);
  });

  const Reset = () => {
    setCount(0);
    setTotal(0);
  };

  const ImageChange = () => {
    const Images = [
      {
        image: require('../images/wp11486644-minimalist-phone-art-wallpapers.png'),
      },
      {
        image: require('../images/wp11486677-minimalist-phone-art-wallpapers.jpg'),
      },
      {
        image: require('../images/wp11486743-minimalist-phone-art-wallpapers.jpg'),
      },
      {
        image: require('../images/wp11486745-minimalist-phone-art-wallpapers.jpg'),
      },
      {
        image: require('../images/wp9814035-minimalistic-2021-wallpapers.jpg'),
      },
    ];
    const randomImageIndex = Math.floor(Math.random() * Math.floor(5));
    return Images[randomImageIndex].image;
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000) i++;
    return count % 2 === 0;
  }, [count]);

  useEffect(() => {
    setRandomImage(ImageChange);
  }, [count]);

  return (
    <View style={styles.CounterContainer}>
      <ImageBackground style={styles.imageBackGround} source={randomImage}>
        <TouchableOpacity style={styles.counterTouch}>
          <Text onPress={PressedConter} style={styles.text}>
            Counter App
          </Text>
        </TouchableOpacity>
        <View style={styles.MainValueContainer}>
          <View style={styles.MainValueTxtContainer}>
            <Text style={styles.MainValue}>{count}</Text>
          </View>
          <View style={styles.MainValueTotalContainer}>
            <Text style={styles.MainValueTotal}> You click {total} times</Text>
            <Text style={styles.isEvenOrOdd}>
              count is {isEven ? 'Even ' : 'odd'}
            </Text>
          </View>
        </View>
        <View style={styles.ButtonMainContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.ButtonsEdit}
            onPress={DecrementCounter}>
            <Text style={styles.Buttonstxt}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={Reset}
            style={styles.ButtonsEdit1}>
            <Text style={styles.Buttonstxt}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.ButtonsEdit}
            onPress={IncrementCounter}>
            <Text style={styles.Buttonstxt}>+</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  CounterContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackGround: {
    width: windowWidth,
    height: windowHeight,
  },

  text: {
    color: '#FFF',
    margin: 100,
    fontSize: 30,
    fontWeight: 'bold',
  },
  MainValue: {
    fontSize: 50,
    color: '#fff',
  },
  MainValueContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Buttonstxt: {
    fontSize: 30,
    color: '#fccfcc',
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  ButtonMainContainer: {
    marginTop: 30,
    alignItems: 'center',
  },

  ButtonsEdit: {
    margin: 25,
    backgroundColor: '#0000f9',
    borderRadius: 10,
    width: 150,
    shadowColor: '#ffff',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,

    elevation: 5,
  },
  ButtonsEdit1: {
    margin: 25,
    backgroundColor: '#F44545',
    borderRadius: 10,
    width: 150,
    shadowColor: '#ffff',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,

    elevation: 5,
  },
  MainValueTotal: {
    fontSize: 20,
    color: '#FFF',
  },
  isEvenOrOdd: {
    fontSize: 20,
    color: '#FFF',
  },
  MainValueTxtContainer: {
    backgroundColor: '#ff9773',
    borderRadius: 15,
    width: 300,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ffff',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,

    elevation: 5,
  },
  MainValueTotalContainer: {
    backgroundColor: '#120066',
    borderRadius: 20,
    width: 350,
    height: 70,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ffff',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
