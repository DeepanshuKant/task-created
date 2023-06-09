import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('Screen2');
        }, 3000);
        return () => clearTimeout(timeout);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/BG1.png')} style={styles.backgroundImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },
});

export default Screen1;
