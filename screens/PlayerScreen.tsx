import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PlayerScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.headerText}>Ophelia by Steven</Text>
        <Ionicons name="heart-outline" size={24} color="white" />
      </View>

      {/* Album Art */}
      <Image source={require('../assets/images/song1.jpeg')} style={styles.albumArt} />

      {/* Song Info */}
      <Text style={styles.title}>Levitating</Text>
      <Text style={styles.artist}>Dua Lipa</Text>

      {/* Static Progress Bar */}
      <View style={styles.sliderContainer}>
        <View style={styles.staticProgressBar}>
          <View style={styles.staticProgressFill} />
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>1:25</Text>
          <Text style={styles.timeText}>3:15</Text>
        </View>
      </View>

      {/* Music Controls */}
      <View style={styles.controls}>
        <Ionicons name="resize" size={30} color="white" />
        <Ionicons name="play-skip-back" size={30} color="white" />
        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="pause" size={36} color="white" />
        </TouchableOpacity>
        <Ionicons name="play-skip-forward" size={30} color="white" />
        <Ionicons name="repeat" size={30} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0126',
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  albumArt: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  artist: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  sliderContainer: {
    marginVertical: 10,
  },
  staticProgressBar: {
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 2,
    width: '100%',
    overflow: 'hidden',
  },
  staticProgressFill: {
    height: 4,
    width: '40%',
    backgroundColor: '#A259FF',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  timeText: {
    color: 'white',
    fontSize: 12,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  playButton: {
    width: 70,
    height: 70,
    backgroundColor: '#A259FF',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#A259FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default PlayerScreen;
