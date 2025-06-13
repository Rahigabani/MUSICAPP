import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backIcon}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image source={require('../assets/images/profile.jpeg')} style={styles.profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.name}>Rahi Gabani</Text>
          <Text style={styles.email}>rahigabani@gmail.com</Text>
          <Text style={styles.role}>Gold Member</Text>
          <Text style={styles.bio}>Love Music </Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Favourite Albums */}
        <Text style={styles.sectionTitle}>Favourite Album</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          <Image source={require('../assets/images/song1.jpeg')} style={styles.albumImage} />
          <Image source={require('../assets/images/song2.jpeg')} style={styles.albumImage} />
          <Image source={require('../assets/images/song3.jpeg')} style={styles.albumImage} />
        </ScrollView>

        {/* Favourite Music */}
        <Text style={styles.sectionTitle}>Favourite Music</Text>
        <View style={styles.musicGrid}>
          <Image source={require('../assets/images/song1.jpeg')} style={styles.musicImage} />
          <Image source={require('../assets/images/song2.jpeg')} style={styles.musicImage} />
          <Image source={require('../assets/images/song4.jpeg')} style={styles.musicImage} />
          <Image source={require('../assets/images/song3.jpeg')} style={styles.musicImage} />
          <Image source={require('../assets/images/song5.jpeg')} style={styles.musicImage} />
          <Image source={require('../assets/images/song6.jpeg')} style={styles.musicImage} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b062b',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  backIcon: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  profileDetails: {
    marginLeft: 16,
    flexShrink: 1,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: '#ccc',
    fontSize: 14,
  },
  role: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 4,
  },
  bio: {
    color: '#bbb',
    fontSize: 12,
    marginTop: 4,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 10,
  },
  horizontalList: {
    flexDirection: 'row',
  },
  albumImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginRight: 10,
  },
  musicGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  musicImage: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 14,
    borderTopWidth: 0.5,
    borderTopColor: '#333',
    backgroundColor: '#0b062b',
  },
});
