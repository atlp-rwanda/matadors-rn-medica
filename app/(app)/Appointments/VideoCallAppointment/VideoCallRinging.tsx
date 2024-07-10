import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
  MediaStream,
  RTCView,
  register,
} from "@videosdk.live/react-native-sdk";
import { createMeeting, token } from "@/lib/api";

register();

interface JoinScreenProps {
  getMeetingId: (id?: string) => void;
}

const JoinScreen: React.FC<JoinScreenProps> = ({ getMeetingId }) => {
  const [meetingVal, setMeetingVal] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F6F6FF",
        justifyContent: "center",
        paddingHorizontal: 6 * 10,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          getMeetingId();
        }}
        style={{ backgroundColor: "#1178F8", padding: 12, borderRadius: 6 }}
      >
        <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
          Create Meeting
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          alignSelf: "center",
          fontSize: 22,
          marginVertical: 16,
          fontStyle: "italic",
          color: "grey",
        }}
      >
        ---------- OR ----------
      </Text>
      <TextInput
        value={meetingVal}
        onChangeText={setMeetingVal}
        placeholder={"XXXX-XXXX-XXXX"}
        style={{
          padding: 12,
          borderWidth: 1,
          borderRadius: 6,
          fontStyle: "italic",
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#1178F8",
          padding: 12,
          marginTop: 14,
          borderRadius: 6,
        }}
        onPress={() => {
          getMeetingId(meetingVal);
        }}
      >
        <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
          Join Meeting
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

interface ButtonProps {
  onPress: () => void;
  buttonText: string;
  backgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, buttonText, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor,
      justifyContent: "center",
      alignItems: "center",
      padding: 12,
      borderRadius: 4,
    }}
  >
    <Text style={{ color: "white", fontSize: 12 }}>{buttonText}</Text>
  </TouchableOpacity>
);

interface ParticipantViewProps {
  participantId: string;
}

const ParticipantView: React.FC<ParticipantViewProps> = ({ participantId }) => {
  const { webcamStream, webcamOn } = useParticipant(participantId);

  return webcamOn && webcamStream ? (
    <RTCView
      streamURL={new MediaStream([webcamStream.track]).toURL()}
      objectFit={"cover"}
      style={{
        height: 300,
        marginVertical: 8,
        marginHorizontal: 8,
      }}
    />
  ) : (
    <View
      style={{
        backgroundColor: "grey",
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
        marginHorizontal: 8,
      }}
    >
      <Text style={{ fontSize: 16 }}>NO MEDIA</Text>
    </View>
  );
};

interface ParticipantListProps {
  participants: string[];
}

const ParticipantList: React.FC<ParticipantListProps> = ({ participants }) => (
  participants.length > 0 ? (
    <FlatList
      data={participants}
      renderItem={({ item }) => <ParticipantView participantId={item} />}
      keyExtractor={(item) => item}
    />
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F6F6FF",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>Press Join button to enter meeting.</Text>
    </View>
  )
);

const ControlsContainer: React.FC = () => {
  const { join, leave, toggleWebcam, toggleMic } = useMeeting({});

  return (
    <View
      style={{
        padding: 24,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Button
        onPress={() => join()}
        buttonText={"Join"}
        backgroundColor={"#1178F8"}
      />
      <Button
        onPress={() => toggleWebcam()}
        buttonText={"Toggle Webcam"}
        backgroundColor={"#1178F8"}
      />
      <Button
        onPress={() => toggleMic()}
        buttonText={"Toggle Mic"}
        backgroundColor={"#1178F8"}
      />
      <Button
        onPress={() => leave()}
        buttonText={"Leave"}
        backgroundColor={"#FF0000"}
      />
    </View>
  );
};

const MeetingView: React.FC = () => {
  const { participants, meetingId } = useMeeting({});
  const participantsArrId = Array.from(participants.keys());

  return (
    <View style={{ flex: 1 }}>
      {meetingId && (
        <Text style={{ fontSize: 18, padding: 12 }}>
          Meeting Id : {meetingId}
        </Text>
      )}
      <ParticipantList participants={participantsArrId} />
      <ControlsContainer />
    </View>
  );
};

const App: React.FC = () => {
  const [meetingId, setMeetingId] = useState<string | null>(null);

  const getMeetingId = async (id?: string) => {
    if (!token) {
      console.log("PLEASE PROVIDE TOKEN IN api.js FROM app.videosdk.live");
    }
    const newMeetingId = id == null ? await createMeeting({ token }) : id;
    setMeetingId(newMeetingId);
  };

  return meetingId ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6FF" }}>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: true,
          webcamEnabled: true,
          name: "Expo User",
        }}
        token={token}
      >
        <MeetingView />
      </MeetingProvider>
    </SafeAreaView>
  ) : (
    <JoinScreen getMeetingId={getMeetingId} />
  );
};

export default App;
