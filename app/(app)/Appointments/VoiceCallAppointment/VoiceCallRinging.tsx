import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { MeetingProvider, useMeeting } from "@videosdk.live/react-native-sdk";
import { createMeeting, token } from "@/api";
import Typography from "@/constants/Typography";
import { SvgXml } from "react-native-svg";
import {hungup, Record,MicOff, BackArrow, blackArrow } from "@/components/Icons/Icons";
import { router } from "expo-router";
import { supabase } from "@/lib/supabase";
import { AuthContext } from "@/ctx/AuthContext";
import { fetchPatientData, getUserImageUrl } from "@/utils/LoggedInUser";
import { ThemeContext } from "@/ctx/ThemeContext";

interface JoinScreenProps {
  getMeetingId: (id?: string) => void;
}

const JoinScreen: React.FC<JoinScreenProps> = ({ getMeetingId }) => {
  const [meetingVal, setMeetingVal] = useState("");
  const [meetingFocused, setMeetingFocused] = useState(false);
  const [patientData, setPatientData] = useState(null);
  const [imageUrl, setImageUrl] = useState([]);
  const { userId } = useContext(AuthContext);
  const {theme, changeTheme} = useContext(ThemeContext);

  const handleEmailFocus = () => {
    setMeetingFocused(true);
  };

  const handleEmailBlur = () => {
    setMeetingFocused(false);
  };

  useEffect(() => {
    if (userId ) {
      fetchPatientData(userId , setPatientData);
      getUserImageUrl("patients", userId , setImageUrl);
    }
  }, [userId]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 24,
        paddingTop: 50,
        gap: 100,
        backgroundColor: theme === "dark" ? "#181A20" : "white" 

      }}
    >
      <View style={styles.backArrow}>
        <TouchableOpacity onPress={() => router.back()}>
          <SvgXml xml={theme === 'dark' ? BackArrow : blackArrow} />
        </TouchableOpacity>
      </View>

      <View style={{justifyContent:'center',alignItems:'center', gap: 30}}>
        <Image source={require("@/assets/icons/HeartPlus.png")} />
      

      <TouchableOpacity
        onPress={() => {
          getMeetingId();
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 380,
          height: 58,
          backgroundColor: "#246BFD",
          borderRadius: 100,
        }}
      >
        <Text style={[Typography.bold.large, { color: "#ffffff" }]}>
          Create Meeting
        </Text>
      </TouchableOpacity>

      <Text style={[Typography.bold.large, { color: "#757575" }]}>OR</Text>

      <View style={[meetingFocused && styles.inputOneFocused,{ backgroundColor:
                theme === "dark" ? "#181A20" : '#FAFAFA',width: 380,borderRadius: 100}]}>
        <TextInput
          value={meetingVal}
          onChangeText={setMeetingVal}
          placeholder={"XXXX-XXXX-XXXX"}
          style={[styles.input, meetingFocused && styles.meetingFocused]}
          placeholderTextColor="#9E9E9E"
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
        />
      </View>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 380,
          height: 58,
          backgroundColor: "#246BFD",
          borderRadius: 100,
        }}
        onPress={() => {
          getMeetingId(meetingVal);
        }}
      >
        <Text style={[Typography.bold.large, { color: "#ffffff" }]}>
          Join Meeting
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputOneFocused: {
    borderColor: "#246BFD",
    borderWidth: 2,
    borderRadius: 100,
    width: 380,
  },
  meetingFocused: {
    color: "#868a94",
    fontSize: 16,
  },
  input: {
    padding: 12,
    borderWidth: 0,
    borderRadius: 6,
    alignSelf: "center",
    fontFamily: "italic",
  },
  Background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 48,
    paddingLeft: 24,
    paddingRight: 24,
  },
  backArrow: {
    alignSelf: "flex-start",
  },
});

interface ButtonProps {
  onPress: () => void;
  buttonText: string;
  backgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  buttonText,
  backgroundColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        borderRadius: 4,
      }}
    >
      <Text style={{ color: "white", fontSize: 12 }}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

interface ControlsContainerProps {
  join: () => void;
  leave: () => void;
  toggleMic: () => void;
}

const ControlsContainer: React.FC<ControlsContainerProps> = ({
  join,
  leave,
  toggleMic,
}) => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isMicOn, setIsMicOn] = useState(true);

  const handleMicPress = () => {
    setIsMicOn((prevState) => !prevState);
  }

  const handleButtonDisable = () => {
    setButtonDisabled(true);
  };
  return (
    <View
      style={{
        padding: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#F0F0F0",
          borderRadius: 100,
          padding: 23,
          opacity: 0.6,
        }}
        onPress={() => {
          join();
          handleButtonDisable();
        }}
        disabled={isButtonDisabled}
      >
        <Text style={[Typography.bold.large, { color: "#000000" }]}>Join</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#F0F0F0",
          borderRadius: 100,
          padding: 23,
          opacity: 0.6,
        }}
        onPress={() => {
          toggleMic();
          handleMicPress();
        }}
      >
        <SvgXml xml={isMicOn ? Record : MicOff} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "#F75555", borderRadius: 100, padding: 20 }}
        onPress={() => {
          leave();
          router.push("(app)/Appointments/VoiceCallAppointment/SessionEnded");
        }}
      >
        <SvgXml xml={hungup} />
      </TouchableOpacity>
    </View>
  );
};

interface ParticipantViewProps {
  participantId: string;
}

interface Doctors {
  first_name: string;
  last_name: string;
  created_at: string;
  image: string;
  id: string;
}

type FetchDoctor = Doctors | null;
type FetchError = string | null;

const tableName = "doctors";

const ParticipantView: React.FC<ParticipantViewProps> = () => {
  const [FetchDoctor, setFetchDoctor] = useState<FetchDoctor>(null);
  const [FetchError, setFetchError] = useState<FetchError>(null);

  useEffect(() => {
    const FetchDoctors = async () => {
      try {
        const { data, error } = await supabase
          .from(tableName)
          .select("*")
          .eq("id", "379acd49-39d2-4e12-9b62-2a6884d1ff08")
          .single();

        if (data) {
          setFetchDoctor(data);
          setFetchError(null);
        }

        if (error) {
          setFetchDoctor(null);
          setFetchError("could not fetch description articles in database");
          return null;
        }
      } catch (error) {
        console.error(error);
        setFetchError("An unexpected error occurred");
        return null;
      }
    };
    FetchDoctors();
  }, []);
  return (
    <View
      style={{
        paddingTop: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {FetchError && <Text>{FetchError}</Text>}

      {FetchDoctor && (
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 24 }}
        >
          <Image
            source={{ uri: FetchDoctor.image }}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />

          <View
            style={{ justifyContent: "center", alignItems: "center", gap: 24 }}
          >
            <Text style={[Typography.heading._3, { color: "#FFFFFF" }]}>
              {FetchDoctor.first_name} {FetchDoctor.last_name}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

interface ParticipantListProps {
  participants: string[];
}

interface Doctors {
  first_name: string;
  last_name: string;
  created_at: string;
  image: string;
  id: string;
}

const ParticipantList: React.FC<ParticipantListProps> = ({ participants }) => {
  const [FetchDoctor, setFetchDoctor] = useState<FetchDoctor>(null);
  const [FetchError, setFetchError] = useState<FetchError>(null);

  useEffect(() => {
    const FetchDoctors = async () => {
      try {
        const { data, error } = await supabase
          .from(tableName)
          .select("*")
          .eq("id", "379acd49-39d2-4e12-9b62-2a6884d1ff08")
          .single();

        if (data) {
          setFetchDoctor(data);
          setFetchError(null);
        }

        if (error) {
          setFetchDoctor(null);
          setFetchError("could not fetch description articles in database");
          console.error("Error fetching item:", error);
          return null;
        }
      } catch (error) {
        console.error(error);
        setFetchError("An unexpected error occurred");
        return null;
      }
    };
    FetchDoctors();
  }, []);

  return participants.length > 0 ? (
    <FlatList
      data={participants}
      renderItem={({ item }) => {
        return <ParticipantView participantId={item} />;
      }}
    />
  ) : (
    <View
      style={{
        paddingTop: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {FetchError && <Text>{FetchError}</Text>}

      {FetchDoctor && (
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 24 }}
        >
          <Image
            source={{ uri: FetchDoctor.image }}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />

          <View
            style={{ justifyContent: "center", alignItems: "center", gap: 24 }}
          >
            <Text style={[Typography.heading._3, { color: "#FFFFFF" }]}>
              {FetchDoctor.first_name} {FetchDoctor.last_name}
            </Text>
          </View>
          <Text style={[Typography.medium.xLarge, { color: "#FFFFFF" }]}>
            Ringing...
          </Text>
        </View>
      )}
    </View>
  );
};

const MeetingView: React.FC = () => {
  const { join, leave, toggleMic, participants } = useMeeting({});
  const participantsArrId = [...participants.keys()];

  return (
    <ImageBackground
      style={styles.Background}
      resizeMode="cover"
      source={require("@/assets/images/Background.png")}
    >
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <ParticipantList participants={participantsArrId} />
        <ControlsContainer join={join} leave={leave} toggleMic={toggleMic} />
      </View>
    </ImageBackground>
  );
};

const VoiceCallRinging: React.FC = () => {
  const [meetingId, setMeetingId] = useState<string | null>(null);

  const getMeetingId = async (id?: string) => {
    const newMeetingId = id == null ? await createMeeting({ token }) : id;
    setMeetingId(newMeetingId);
  };

  return meetingId ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6FF" }}>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: true,
          webcamEnabled: false,
          name: "Test User",
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

export default VoiceCallRinging;
