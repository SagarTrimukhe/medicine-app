import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Pressable, Image,
} from 'react-native';
import { useUserDetails } from '../../context/globalContext';
import commonStyles from '../../styles/styles';

function Dashboard({ navigation }) {
  const [userDetails] = useUserDetails();
  const username = userDetails.id || '';

  const formattedUsername = () => username?.charAt(0)?.toUpperCase() + username.slice(1);

  return (
    <View style={styles.dashboardPageContainer}>
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>{`Welcome ${formattedUsername(username)}`}</Text>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            elevation: 1,
            shadowColor: 'red',
          }}
          onPress={() => { navigation.navigate('Login'); }}
        >
          <Image style={commonStyles.tinyIcon} source={require('../../assets/logout.png')} />
          <Text style={{ fontWeight: '600' }}>Logout</Text>
        </Pressable>
      </View>

      <View style={styles.tilesContainer}>
        <TouchableOpacity style={styles.tile} onPress={() => { navigation.navigate('Medicines'); }}>
          <Text style={styles.tileText}>Order Medicines</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={() => { navigation.navigate('DoctorAppointment'); }}>
          <Text style={styles.tileText}>Book Doctor Appointment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={() => { navigation.navigate('LabAppointment'); }}>
          <Text style={styles.tileText}>Book Lab Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  dashboardPageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  pageTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 2,
  },
  pageTitle: {
    fontWeight: '500',
    fontSize: 20,
  },
  tilesContainer: {
    height: 500,
    justifyContent: 'space-around',
  },
  tile: {
    height: 100,
    width: 300,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  tileText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
