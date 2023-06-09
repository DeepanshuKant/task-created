import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Image, StyleSheet } from 'react-native';

const avatars = [
    require('../assets/avatar.png'),
    require('../assets/avatar.png'),
    require('../assets/avatar.png'),
];

const Screen2 = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideAnimation = new Animated.Value(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (currentIndex === avatars.length - 1) {
                navigation.navigate('Screen3');
            } else {
                handleNextAvatar();
            }
        }, 20000);
        return () => clearTimeout(timeout);
    }, [currentIndex, navigation]);

    useEffect(() => {
        Animated.timing(slideAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [slideAnimation]);

    const handleNextAvatar = () => {
        if (currentIndex === avatars.length - 1) {
            navigation.navigate('Screen3');
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <View style={styles.container}  >
            <Image source={require('../assets/BG2.png')} style={styles.backgroundImage} />
            <Animated.View
                style={[styles.profileContainer, {
                    transform: [
                        {
                            translateX: slideAnimation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [300, 0],
                            }),
                        },
                    ],
                }]}
            >
                <Image source={avatars[currentIndex]} style={styles.avatar} />
                <View>
                    <Text style={styles.userName}>John Doe</Text>
                    <Text style={styles.userDetails}>React Native Developer</Text>
                </View>
            </Animated.View>
            <TouchableOpacity style={styles.arrowContainer} onPress={handleNextAvatar}>
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
        // Use image as background
        width: '100%',
        height: '100%',
        resizeMode: 'cover',

    },
    profileContainer: {
        position: 'absolute',
        top: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        gap: 15,
    },
    avatar: {
        width: 60,
        height: 60,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#F2E900',
        borderRadius: 30,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,

        color: '#F2E900',
    },
    userDetails: {
        fontSize: 16,
        color: 'white',
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

export default Screen2;
