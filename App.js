/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {Button, Text, View, Image, StyleSheet} from 'react-native';

import imageFile from './imageFile';

import Video from 'react-native-video';

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
});

const App = () => {
  const [showMP4, setShowMP4] = useState(false);
  const [showGif, setShowGif] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 50,
        alignItems: 'center',
      }}>
      <Button
        title="Load MP4"
        onPress={() => {
          setShowMP4(true);
          setShowGif(false);
        }}
      />
      <Button
        title="Load GIF"
        onPress={() => {
          setShowGif(true);
          setShowMP4(false);
        }}
      />
      {/* {showMP4 && (
        <View>
          <Text style={styles.title}> Mp4 </Text>
          <Video
            source={require('./sample.mp4')}
            style={{width: 300, height: 200}}
          />
        </View>
      )}
      {showGif && (
        <View>
          <Text style={styles.title}> Gif </Text>
          <Image source={require('./sample.gif')} />
        </View>
      )} */}

      <Image source={imageFile} />
    </View>
  );
};

export default App;
