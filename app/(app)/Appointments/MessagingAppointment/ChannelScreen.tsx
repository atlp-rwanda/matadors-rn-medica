import { View, Text, Image } from 'react-native'
import React from 'react'
import {
    Channel,
    MessageList,
    MessageInput,
    useMessageContext,
  } from 'stream-chat-expo'
import { useAppContext, } from '@/ctx/ChatContext';
import {Colors} from '@/constants/Colors';

const MessageStyle = () => {
  const { message, isMyMessage } = useMessageContext();

  return (
    <View style={{
      alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
      borderRadius: 10,
      maxWidth: '100%',
      maxHeight: 200,

    }}>
      <Text  style={{
      alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
      backgroundColor: isMyMessage ? Colors.main.primary._500 : '#ededed',
      color:isMyMessage ? Colors.others.white : 'black',
      padding: 10,
      marginVertical : 10,
      marginHorizontal: 0,
      borderRadius: 10,
      width: '100%',
    }}>{message.text}</Text>
 </View>
  )
}


const ChannelScreen = () => {

  const { channel } = useAppContext();
  return (
    <Channel channel={channel}
    // MessageText={MessageStyle}
    audioRecordingEnabled={true}
    enforceUniqueReaction={true}
    giphyEnabled={true}
    >
           <MessageList />
           <MessageInput />
    </Channel>
  
  );
};

export default ChannelScreen