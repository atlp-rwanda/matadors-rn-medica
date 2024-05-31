import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Pressable, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from "@/ctx/ThemeContext";

const SelectPackage = () => {
    const [time, setTime] = useState('');
    const [selected, setSelected] = useState<boolean>(false);
    const [selected1, setSelected1] = useState<boolean>(false);
    const [selected2, setSelected2] = useState<boolean>(false);
    const { theme, changeTheme } = useContext(ThemeContext);

    const handleTimeChange = (text: string) => {
        setTime(text);
    };
    const toggleSelection = () => {
        setSelected(!selected);
        setSelected1(false);
        setSelected2(false);
    };
    const toggleSelection1 = () => {
        setSelected1(!selected1);
        setSelected(false);
        setSelected2(false);
    };
    const toggleSelection2 = () => {
        setSelected2(!selected2);
        setSelected1(false);
        setSelected(false);
    };


    return (
        <>
            <ScrollView style={{
      backgroundColor: theme === "light" ? "#FFFFFF" : "#181A20",
                width: "100%",
                height: 900,
                padding: 20
            }}>

                <Pressable
                    onPress={() => router.back()}
                    style={{
                        marginTop: 40,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: '60%',
                        height: 50
                    }}>
                    <MaterialIcons name="arrow-back" size={23} style={{color:  theme === 'light' ? '#212121' : '#FFFFFF',}}/>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: "600",
                        color:  theme === 'light' ? '#212121' : '#FFFFFF',
                    }}>Select Package</Text>
                </Pressable>
                <View style={{
                    marginTop: 10
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "500",
                        color:  theme === 'light' ? '#212121' : '#FFFFFF',
                    }}>Select Duration</Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        backgroundColor:  theme === 'light' ? '#FAFAFA' : '#1F222A',
                        margin: 10,
                        marginTop: 30,
                        marginBottom: 0,
                        padding: 8,
                        borderRadius: 10,
                        paddingHorizontal: 10,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            gap: 10,
                            width: "85%",
                        }}>
                        
      <MaterialIcons name="access-time" size={25} style={{
                            alignSelf: 'center',
                            color :theme === 'light' ? '#212121' : '#FFFFFF'
                        }} />
                            <TextInput
                                style={{
                                    height: 50,
                                    fontSize: 16,
                                    fontWeight: '500',
                                    color: theme === "light" ? '#212121' : '#FAFAFA',
                                }}
                                placeholder="30 Minutes"
                                keyboardType="email-address"
                                placeholderTextColor= {theme === 'light' ? '#212121' : '#FFFFFF'}
                                value={time}
                                onChangeText={handleTimeChange}
                            />
                        </View>
                        <Icon name="caret-down" size={25} style={{
                            width: 20,
                            alignSelf: 'center',
                            color :theme === 'light' ? '#212121' : '#FFFFFF'
                        }} />
                    </View>
                </View>
                <View style={{
                    marginTop: 20
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "500",
                        color:  theme === 'light' ? '#212121' : '#FFFFFF',
                    }}>Select Package</Text>
                    <View style={{
                backgroundColor:  theme === 'light' ? '#FAFAFA' : '#1F222A',
                        flexDirection: 'row',
                        height: 100,
                        borderRadius: 24,
                        marginBottom: 10,
                        marginTop: 20,
                        padding: 10,
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image
                                source={require('@/assets/images/AutoLayout.png')}
                                style={{
                                    marginRight: 15,
                                }}
                            />
                            <View>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '600',
                                    color: theme === 'light' ? '#212121' : '#FFFFFF'
                                }}>Messaging</Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: theme === 'light' ? '#616161' : '#E0E0E0'
                                }}>Chats messages with doctor</Text>
                            </View>
                        </View>
                        <View style={{
                            left: 10,
                        }}>
                            <Text style={{
                                alignSelf: "center",
                                color: Colors.main.primary._500
                            }}>$20</Text>
                            <Text style={{
                                fontSize: 14,
                                color: theme === 'light' ? '#616161' : '#E0E0E0'
                            }}>/30mins</Text>
                        </View>
                        <TouchableOpacity onPress={toggleSelection}>
                            <MaterialIcons
                                name={selected ? 'radio-button-checked' : 'radio-button-unchecked'}
                                size={20}
                                color={selected ? Colors.main.primary._500 : Colors.main.primary._500}
                                style={{
                                    alignSelf: 'flex-end',
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                backgroundColor:  theme === 'light' ? '#FAFAFA' : '#1F222A',
                        flexDirection: 'row',
                        height: 100,
                        borderRadius: 24,
                        marginBottom: 10,
                        marginTop: 20,
                        padding: 10,
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image
                                source={require('@/assets/images/VoiceCall.png')}
                                style={{
                                    marginRight: 15,
                                }}
                            />
                            <View>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '600',
                                    color: theme === 'light' ? '#212121' : '#FFFFFF'
                                }}>Voice Call</Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: theme === 'light' ? '#616161' : '#E0E0E0'
                                }}>Voice Call with doctor</Text>
                            </View>
                        </View>
                        <View style={{
                            left: 30,
                        }}>
                            <Text style={{
                                alignSelf: "center",
                                color: Colors.main.primary._500
                            }}>$40</Text>
                            <Text style={{
                                fontSize: 14,
                                color: theme === 'light' ? '#616161' : '#E0E0E0'
                            }}>/30mins</Text>
                        </View>
                        <TouchableOpacity onPress={toggleSelection1}>
                            <MaterialIcons
                                name={selected1 ? 'radio-button-checked' : 'radio-button-unchecked'}
                                size={20}
                                color={selected1 ? Colors.main.primary._500 : Colors.main.primary._500}
                                style={{
                                    alignSelf: 'flex-end',
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                backgroundColor:  theme === 'light' ? '#FAFAFA' : '#1F222A',
                        flexDirection: 'row',
                        height: 100,
                        borderRadius: 24,
                        marginBottom: 10,
                        marginTop: 20,
                        padding: 10,
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image
                                source={require('@/assets/images/VideoCall.png')}
                                style={{
                                    marginRight: 15,
                                }}
                            />
                            <View>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '600',
                                    color: theme === 'light' ? '#212121' : '#FFFFFF'
                                }}>Video Call</Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: theme === 'light' ? '#616161' : '#E0E0E0'
                                }}>Video call with doctor</Text>
                            </View>
                        </View>
                        <View style={{
                            left: 30,
                        }}>
                            <Text style={{
                                alignSelf: "center",
                                color: Colors.main.primary._500
                            }}>$60</Text>
                            <Text style={{
                                fontSize: 14,
                                color: theme === 'light' ? '#616161' : '#E0E0E0'
                            }}>/30mins</Text>
                        </View>
                        <TouchableOpacity onPress={toggleSelection2}>
                            <MaterialIcons
                                name={selected2 ? 'radio-button-checked' : 'radio-button-unchecked'}
                                size={20}
                                color={selected2 ? Colors.main.primary._500 : Colors.main.primary._500}
                                style={{
                                    alignSelf: 'flex-end',
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    height: 170,
                    justifyContent: 'flex-end'
                }}>
                    <TouchableOpacity
                        style={{
                            width: 350,
                            alignSelf: "center",
                            backgroundColor: Colors.main.primary._500,
                            paddingTop: 25,
                            paddingBottom: 18,
                            paddingLeft: 16,
                            paddingRight: 16,
                            borderRadius: 100
                        }}
                        onPress={() => router.push("ActionMenu/Booking/Patient-details")}
                    >
                        <Text style={{
                            alignSelf: "center",
                            color: Colors.others.white,
                            fontWeight: "bold"
                        }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default SelectPackage;