/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {Button, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Overlay} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  const [selectValue, setSelectValue] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <View>
      <Text>select: {selectValue}</Text>
      <Text>input: {inputValue}</Text>
      <Text>rating: {ratingValue}</Text>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <AntDesign name="star" size={ratingValue >= 1 ? 20 : 0} />
        <AntDesign name="star" size={ratingValue >= 2 ? 20 : 0} />
        <AntDesign name="star" size={ratingValue >= 3 ? 20 : 0} />
        <AntDesign name="star" size={ratingValue >= 4 ? 20 : 0} />
        <AntDesign name="star" size={ratingValue >= 5 ? 20 : 0} />
      </View>

      <SelectModal action={setSelectValue} selectValue={selectValue} />
      <InputModal action={setInputValue} inputValue={inputValue} />
      <RatingModal action={setRatingValue} inputValue={ratingValue} />
    </View>
  );
};

const SelectModal = props => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  let valueInit = props.selectValue;
  return (
    <View>
      <Button
        title="Open Overlay with Button"
        onPress={toggleOverlay}
        color="#333"
      />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
        <Button
          onPress={() => props.action(valueInit++)}
          title="Aumentar valor"
          color="#841584"
        />
      </Overlay>
    </View>
  );
};

const InputModal = props => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const inputHandler = e => {
    props.action(e.nativeEvent.text);
  };

  return (
    <View>
      <Button
        title="Open Overlay  with Input"
        onPress={toggleOverlay}
        color="#666"
      />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
        <TextInput onChange={e => inputHandler(e)} style={{borderWidth: 1}} />
      </Overlay>
    </View>
  );
};

const RatingModal = props => {
  const [visible, setVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    console.log(rating);
    props.action(rating);
  }, [rating]);

  return (
    <View>
      <Button
        title="Open Overlay Rating"
        onPress={toggleOverlay}
        color="#c9c9c9"
      />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => setRating(1)}>
            <AntDesign name="star" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(2)}>
            <AntDesign name="star" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(3)}>
            <AntDesign name="star" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(4)}>
            <AntDesign name="star" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(5)}>
            <AntDesign name="star" size={20} />
          </TouchableOpacity>
        </View>
      </Overlay>
    </View>
  );
};
export default App;
