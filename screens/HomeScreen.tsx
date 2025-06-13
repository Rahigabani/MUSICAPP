import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.profileInfo}>
          <Image source={require('../assets/images/profile.jpeg')} style={styles.avatar} />
          <View>
            <Text style={styles.username}>Rahi Gabani</Text>
            <Text style={styles.userType}>Gold Member</Text>
          </View>
        </View>
        <Icon name="notifications-outline" size={24} color="white" />
      </View>
cd
      <Text style={styles.title}>Listen To Latest Musics</Text>
      <View style={styles.searchBox}>
        <Icon name="search" size={20} color="gray" />
        <TextInput placeholder="Search Music...." placeholderTextColor="gray" style={styles.input} />
      </View>

      <Text style={styles.section}>Recently Played</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
        <View style={styles.albumItem}>
          <Image source={require('../assets/images/song1.jpeg')} style={styles.albumImage} />
          <Text style={styles.albumTitle}>Levitating</Text>
        </View>
        <View style={styles.albumItem}>
          <Image source={require('../assets/images/song2.jpeg')} style={styles.albumImage} />
          <Text style={styles.albumTitle}>Born To Shine</Text>
        </View>
        <View style={styles.albumItem}>
          <Image source={require('../assets/images/song3.jpeg')} style={styles.albumImage} />
          <Text style={styles.albumTitle}>7 Rings</Text>
        </View>
      </ScrollView>

      <Text style={styles.section}>Recommend for you</Text>
      <View style={styles.recommendItem}>
        <Image source={require('../assets/images/song4.jpeg')} style={styles.recommendImage} />
        <View>
          <Text style={styles.songTitle}>Cruel Summer</Text>
          <Text style={styles.artist}>Taylor Swift</Text>
          <Text style={styles.streams}>114k / steams</Text>
        </View>
      </View>
      <View style={styles.recommendItem}>
        <Image source={require('../assets/images/song5.jpeg')} style={styles.recommendImage} />
        <View>
          <Text style={styles.songTitle}>Kun Faya Kun</Text>
          <Text style={styles.artist}>A.R. Rahman</Text>
          <Text style={styles.streams}>60.5k / steams</Text>
        </View>
      </View>
      <View style={styles.recommendItem}>
        <Image source={require('../assets/images/song6.jpeg')} style={styles.recommendImage} />
        <View>
          <Text style={styles.songTitle}>Tum Se Hi</Text>
          <Text style={styles.artist}>Mohti Chauhan</Text>
          <Text style={styles.streams}>44.3k / steams</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0126',
    flex: 1,
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  profileInfo: {
    flexDirection: 'row',
    gap: 20
    },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:17,
  },
  userType: {
    color: 'gray',
    fontSize: 13,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#1F1B2E',
    borderRadius: 20,
    padding:4,
    textAlignVertical:'center',
    alignItems: 'center',
    marginTop: 15,
  },
  input: {
    marginLeft: 10,
    color: 'white',
    flex: 1,
  },
  section: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  albumItem: {
    marginRight: 20,
    alignItems: 'center',
  },
  albumImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  albumTitle: {
    color: 'white',
    marginTop: 5,
  },
  recommendItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    gap: 10,
  },
  recommendImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  songTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  artist: {
    color: 'gray',
    fontSize: 14,
  },
  streams: {
    color: 'gray',
    fontSize: 12,
  },
});

export default HomeScreen;
