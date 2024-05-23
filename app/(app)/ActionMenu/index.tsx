import React from 'react'
import { View } from 'react-native'

const index = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require("../../../assets/images/Ellipse.png")}></Image>
          <View style={styles.heading}>
            <Text style={styles.greetings}> Good Morning👋</Text>
            <Text style={styles.userName}>Andrew Ainsley</Text>
          </View>
          <View style={styles.Icons}>
            <TouchableOpacity
              onPress={() => router.push("/ActionMenu/NotificationScreen")}
            >
              <Image
                source={require("../../../assets/images/Notification.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/ActionMenu/FavoriteDoctorScreen")}>
              <Image
                style={styles.heart}
                source={require("../../../assets/images/Heart.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.search}>
          <Image source={require("../../../assets/images/search.png")} />
          <TextInput
            placeholder="Search"
            onChangeText={(newText) => setText(newText)}
            style={styles.searchinput}
            placeholderTextColor="rgba(45,45,45,0.4)"
          />
          <TouchableOpacity>
            <Image
              style={styles.filter}
              source={require("../../../assets/images/filter.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.frame}>
          <ImageBackground
            style={styles.FrameImage}
            source={require("../../../assets/images/Frame.png")}
          >
            <View style={styles.FrameText}>
              <Text style={styles.h1}>Medical Checks!</Text>
              <Text style={styles.body}>
                Check your health condition regularly to minimize the incidence
                of disease in the future.{" "}
              </Text>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => navigation.navigate("" as never)}
              >
                <Text style={styles.buttontext2}> Check Now </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.TxtContainer}>
          <Text style={styles.specialityTxt}>Doctor Speciality</Text>
          <TouchableOpacity>
            <Text style={styles.seeTxt}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.specialityContainer1}>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/GeneralDoctor.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/Dentist.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/Optician.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/Nutritionist.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.NameTxt}>
          <Text style={styles.DocSpeciality}>General..</Text>
          <Text style={styles.DocSpeciality}>Dentist</Text>
          <Text style={styles.DocSpeciality}>Ophthal..</Text>
          <Text style={styles.DocSpeciality}>Nutrition..</Text>
        </View>
        <View style={styles.specialityContainer1}>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/Neurologist.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/Pediatric.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/Radiologist.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../../../assets/images/More.png")}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.NameTxt}>
          <Text style={styles.DocSpeciality}>Neurolo..</Text>
          <Text style={styles.DocSpeciality}>Pediatric</Text>
          <Text style={styles.DocSpeciality}>Radiolo..</Text>
          <Text style={styles.DocSpeciality}>More</Text>
        </View>
        <View style={styles.TopDocs}>
          <Text style={styles.specialityTxt}>Top Doctors</Text>
          <TouchableOpacity>
            <Text style={styles.seeTxt}>See All</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 20,
            marginTop: 5,
            padding: 5,
            marginLeft: 10,
            marginBottom: 20,
            backgroundColor: "#ffffff",
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                backgroundColor: "#246BFD",
                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 20,
                justifyContent: "center",
                width: 65,
                height: 34,
                alignItems: "center"
              }}
            >
              <Text style={{ fontFamily: "Urbanist-regular", color: "white" }}>
                All
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#ffffff",
                marginLeft: 10,
                padding: 5,
                paddingHorizontal: 10,
                borderColor: "#246BFD",
                borderWidth: 2,
                borderRadius: 20,
                height: 34,
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontFamily: "Urbanist-regular", color: "#246BFD" }}
              >
                General
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#ffffff",
                marginLeft: 10,
                padding: 5,
                paddingHorizontal: 10,
                borderColor: "#246BFD",
                borderWidth: 2,
                borderRadius: 20,
                height: 34,
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontFamily: "Urbanist-regular", color: "#246BFD" }}
              >
                Dentist
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#ffffff",
                marginLeft: 10,
                padding: 5,
                paddingHorizontal: 10,
                borderColor: "#246BFD",
                borderWidth: 2,
                borderRadius: 20,
                height: 34,
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontFamily: "Urbanist-regular", color: "#246BFD" }}
              >
                Nutritionist
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#ffffff",
                marginLeft: 10,
                padding: 5,
                paddingHorizontal: 10,
                borderColor: "#246BFD",
                borderWidth: 2,
                borderRadius: 20,
                height: 34,
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontFamily: "Urbanist-regular", color: "#246BFD" }}
              >
                Neurologist
              </Text>
            </View>
          </ScrollView>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/ActionMenu/Booking/Doctor_details")}
          style={styles.cardContainer}
        >
          <ImageBackground style={styles.card}>
            <Image
              style={styles.cardImage}
              source={require("../../../assets/images/Randy.png")}
            ></Image>
            <ImageBackground style={styles.DocDescription}>
              <View style={styles.CardHeader}>
                <Text style={styles.DocName}> Dr. Randy Wigham</Text>
                <Image
                  style={styles.DocHeart}
                  source={require("../../../assets/images/BlueHeart.png")}
                ></Image>
              </View>
              <Line
                color="#EEEEEE"
                thickness={2}
                style={{ marginLeft: 10, marginTop: 20, width: "90%" }}
              />

              <Text style={styles.DocProfession}>
                Cardiologist | The Valley Hospital
              </Text>
              <View style={styles.DocRating}>
                <Image
                  source={require("../../../assets/images/HalfStar.png")}
                ></Image>
                <Text style={styles.Ratings}>4.8 (3,379 reviews)</Text>
              </View>
            </ImageBackground>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default index
