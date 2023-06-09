import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Screen3 = ({ navigation }) => {
    const [count, setCount] = useState(15000);

    // When page loads, value of count starts from 15000 and goes to 40000 and when it reaches to 40000 it stops increasing and navigates to Screen1
    useEffect(() => {
        const interval = setInterval(() => {
            if (count < 40000) {
                setCount((prevCount) => prevCount + 1000);
            } else {
                clearInterval(interval);
            }
        }, 88.88888);
        return () => clearInterval(interval);
    }, [count, navigation]);



    return (
        <View style={styles.container}>
            <Image source={require('../assets/BG3.png')} style={styles.backgroundImage} />
            <Text style={styles.countText}>{count}</Text>
            <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.navigate('Screen1')}>
                <Image source={require('../assets/arrow.png')} style={styles.arrowImage} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    countText: {
        fontSize: 24,
        position: 'absolute',
        color: "#F2E900",
        top: "35%",
        fontSize: 20,
        fontWeight: 'bold',
    },
    arrowContainer: {
        position: 'absolute',
        bottom: 200,
        right: 20,
    },
    arrowImage: {
        width: 30,
        height: 30,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
});

export default Screen3;
