import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, FlatList } from 'react-native';

const SelectInput = ({ options }) => {
  const [value, setValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (item) => {
    setValue(item);
    setModalVisible(false);
  };

  const filteredOptions = options.filter((item) => item.toLowerCase().includes(value.toLowerCase()));

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>{value ? value : 'Select an option...'}</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
      >
        <View>
          <TextInput
            placeholder="Search options..."
            value={value}
            onChangeText={setValue}
          />
          <FlatList
            data={filteredOptions}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

export default SelectInput;