import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput,Button } from 'react-native'
import React, { useState } from'react'
import{ LeftArrow } from '@/components/UI/Icons'
import Typography from '@/constants/Typography'
import { colors } from 'react-native-elements'
import { Calendar, CalendarProps } from 'react-native-calendars';
import DateTimePicker, { Event, AndroidEvent } from '@react-native-community/datetimepicker';
import { useHandler } from 'react-native-reanimated'


export default function AddNewCard() {

    const [date, setDate] = useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const onDateChange = (event: Event | AndroidEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
      };
    
    const [cardNumber, setCardNumber] = useState('');

    const handleCardNumberChange = (text: string) => {
        const numericText = text.replace(/\s/g, '');

        let formattedText = '';
        for(let i = 0; i < numericText.length; i++) {
            if(i > 0 && i % 4 === 0){
                formattedText += ' ';
            }
            formattedText += numericText[i];
        }

        setCardNumber(formattedText);

    }

  return (
    <>
    <View style={styles.container}>
        <View style={styles.overThreeComp}>

        <View style={styles.twoComp}>

        <TouchableOpacity>

            <LeftArrow fillColor={'#23272f'} />

        </TouchableOpacity>

        <Text style={[Typography.heading._4, {color: '#212121'}]}>Add New Card</Text>

        </View>

            <Image source={require('../../../assets/icons/Scan.png')} />

        </View>

        <Image source={require('../../../assets/icons/Mocard.png')} style={{width: 380, height: 239}}/>

        <View style={styles.middlePart}>
            <Text style={[Typography.bold.xLarge, {color: '#212121'}]}>Card Name</Text>
            <TextInput
            placeholder='Andrew Ainsley'
            style={[Typography.bold.xLarge, {color: '#212121'}]}

            />
            <Text style={[Typography.bold.xLarge, {color: '#212121'}]}>Card Number</Text>
            <TextInput
            value={cardNumber}
            onChangeText={handleCardNumberChange}
            maxLength={19}
            placeholder='2672 4738 7837 7285'
            keyboardType='number-pad'
            style={[Typography.bold.xLarge, {color: '#212121'}]}
            
        />
            
        </View>

        <View style={styles.belowMiddle}>

        <View style={styles.twoBelowMiddle}>
        <Text style={[Typography.bold.xLarge, {color: '#212121'}]}>Expiry Date</Text>

        <View  style={{flexDirection: 'row', gap: 15}}>
        <Text style={[Typography.semiBold.medium, ]}>{date.toLocaleDateString()}</Text>
        {showDatePicker && (
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={onDateChange}
      />
    )}


<TouchableOpacity onPress={() => setShowDatePicker(true)}>
    <Image source={require('../../../assets/icons/Calendar.png')} />
</TouchableOpacity>

        </View>

        </View>

        <View style={styles.twoBelowMiddle}>
        <Text style={[Typography.bold.xLarge, {color: '#212121'}]}>CVV</Text>
            <TextInput
            placeholder='699'
            keyboardType='number-pad'
            style={[Typography.bold.xLarge, {color: '#212121'}]}
            
        />
        </View>
        
        </View>



      
    </View>

    <View style={{marginBottom: '10%', alignItems: 'center'}}>

<TouchableOpacity style={styles.Button}>
    <Text style={[Typography.bold.large, {color: '#FFFFFF'}]}>Add</Text>
</TouchableOpacity>


</View>
    </>
  )
}

const styles = StyleSheet.create({
    Button:{
        width: 380,
        height: 58,
        borderRadius: 100,
        backgroundColor: '#246BFD',
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#246BFD',
        elevation: 15,
        
    },
    twoBelowMiddle:{
        gap: 24
    },
    belowMiddle:{
        alignSelf: 'flex-start',
        gap: 120,
        flexDirection: 'row'
    },
    middlePart:{
        gap: 24,
        alignSelf:'flex-start',
    },
    overThreeComp:{
        flexDirection: 'row',
        gap: 95,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingLeft: 24,
        paddingBottom: 48,
        paddingRight: 24,
        paddingTop: 24,
        gap: 24
    },
    twoComp:{
        flexDirection: 'row',
        gap: 20,
        alignSelf:'flex-start'
    },
})