import {
  StyleSheet, Text, View, FlatList, TextInput, Image, Button,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import QuantityInput from '../../components/QuantityInput';
import MedicinesFooter from '../../components/MedicinesFooter';
import commonStyles from '../../styles/styles';
import SearchIcon from '../../assets/search.png';
import CustomButton from '../../components/CustomButton';

function MedicinesPage({ navigation }) {
  const [medicinesData, setMedicinesData] = useState([]);
  const [filteredMedicinesData, setFilteredMedicinesData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [selectedMedicineDetails, setSelectedMedicineDetails] = useState({});

  const db = getDatabase();
  const medicinesRef = ref(db, '/medicines');

  useEffect(() => {
    onValue(medicinesRef, (snapshot) => {
      const data = snapshot.val();
      setMedicinesData(data.slice(1));
      setFilteredMedicinesData(data.slice(1));
    });
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    const exp = new RegExp(escapedText, 'i');
    setFilteredMedicinesData(medicinesData.filter((o) => exp.test(o.name)));
  };

  return (
    <View style={styles.medicinePageContainer}>
      <View style={styles.searchBox}>
        <Image style={commonStyles.tinyIcon} source={require('../../assets/search.png')} />
        <TextInput
          style={styles.input}
          value={searchText}
          onChangeText={(text) => {
            handleSearch(text);
          }}
          placeholder="Search medicines."
        />
      </View>

      <View style={styles.medicinesListContainer}>
        <FlatList
          style={{ height: '80%' }}
          data={filteredMedicinesData}
          renderItem={({ item }) => (
            <MedicineItem
              item={item}
              setSelectedMedicineDetails={setSelectedMedicineDetails}
              openQuantityModal={() => { setShowQuantityModal(true); }}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <MedicinesFooter navigation={navigation} />

      {showQuantityModal
                && (
                <QuantityInput
                  medicineDetails={selectedMedicineDetails}
                  showQuantityModal={showQuantityModal}
                  setShowQuantityModal={setShowQuantityModal}
                />
                )}

    </View>
  );
}

function MedicineItem({ item, setSelectedMedicineDetails, openQuantityModal }) {
  return (
    <View style={styles.medicineItem}>
      <View style={{ width: '70%', paddingHorizontal: 5 }}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <View style={{ alignItems: 'center', width: '30%', paddingHorizontal: 5 }}>
        <Text style={{ fontWeight: '600', fontSize: 25, margin: 10 }}>{`$${item.price}`}</Text>
        <CustomButton title="Add to cart" onPress={handleAddToCart} />
      </View>
    </View>
  );
}
export default MedicinesPage;

const styles = StyleSheet.create({
  medicinePageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  searchBox: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginVertical: 10,
    borderRadius: 5,
  },
  input: {
    height: 20,
    width: 300,
    margin: 10,
  },
  medicinesListContainer: {
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  medicineItem: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  description: {
    fontSize: 15,
    textAlign: 'justify',
  },
});
