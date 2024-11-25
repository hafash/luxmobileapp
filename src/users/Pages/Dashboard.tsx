import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'; // <-- Add this import
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BarChart, PieChart} from 'react-native-chart-kit';
import * as Progress from 'react-native-progress';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../components/colors';
import {RootStackParamList} from '../../components/navigation'; // Assuming you have a type for the stack navigator

const screenWidth = Dimensions.get('window').width;

// Define a type for the dimensions event
interface DimensionsEvent {
  window: {width: number; height: number};
  screen: {width: number; height: number};
}

const performanceData = [
  {day: 'Mon', value: 100},
  {day: 'Tue', value: 80},
  {day: 'Wed', value: 90},
  {day: 'Thu', value: 70},
  {day: 'Fri', value: 95},
  {day: 'Sat', value: 85},
  {day: 'Sun', value: 90},
];

const DashboardScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(true);
  const [dimensions, setDimensions] = useState({
    width: screenWidth,
  });

  useEffect(() => {
    // Listener function for orientation changes
    const handleOrientationChange = ({window}: DimensionsEvent) => {
      setDimensions({width: window.width});
    };

    // Add event listener for orientation change
    const subscription = Dimensions.addEventListener(
      'change',
      handleOrientationChange,
    );

    // Cleanup the listener on unmount
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading Dashboard...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Content Section */}
      <View style={styles.content}>
        <ScrollView>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Welcome to Lux App!</Text>
          </View>

          {/* Today's Results */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Today's Results</Text>
            <PieChart
              data={[
                {
                  name: 'Inquiries',
                  population: 1000,
                  color: colors.secondary,
                  legendFontColor: '#333',
                  legendFontSize: 14,
                },
                {
                  name: 'Engagements',
                  population: 42,
                  color: colors.gray,
                  legendFontColor: '#333',
                  legendFontSize: 14,
                },
                {
                  name: 'Adverts',
                  population: 35,
                  color: colors.primary,
                  legendFontColor: '#333',
                  legendFontSize: 14,
                },
              ]}
              width={dimensions.width - 40}
              height={220}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          </View>

          {/* Your Performance */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Your Performance</Text>
            <BarChart
              data={{
                labels: performanceData.map(d => d.day),
                datasets: [{data: performanceData.map(d => d.value)}],
              }}
              width={dimensions.width - 40}
              height={220}
              chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(34, 94, 168, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              style={styles.chart}
              yAxisLabel=""
              yAxisSuffix=""
            />
          </View>

          {/* Reached Audience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Reached Audience</Text>
            <View style={styles.progressContainer}>
              <Text style={styles.progressLabel}>Gasabo</Text>
              <Progress.Bar
                progress={0.63}
                width={dimensions.width - 80}
                color="#6EC1E4"
              />
            </View>
            <View style={styles.progressContainer}>
              <Text style={styles.progressLabel}>Kicukiro</Text>
              <Progress.Bar
                progress={0.12}
                width={dimensions.width - 80}
                color="#7E57C2"
              />
            </View>
            <View style={styles.progressContainer}>
              <Text style={styles.progressLabel}>Musanze</Text>
              <Progress.Bar
                progress={0.25}
                width={dimensions.width - 80}
                color="#B0BEC5"
              />
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Buyer_Messages')}>
          <FontAwesome5 name="comment" size={24} color={colors.active} />
        </TouchableOpacity> */}

        <TouchableOpacity onPress={() => navigation.navigate('Buyer_Messages')}>
          <FontAwesome5 name="comment" size={24} color="#6EC1E4" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Post_Your_Product')}>
          <FontAwesome5 name="bullhorn" size={24} color="#7E57C2" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="bell" size={24} color="#B0BEC5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <FontAwesome5 name="cogs" size={24} color="#6EC1E4" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 60, // To ensure bottom navigation has space
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A2A2A2',
    marginBottom: 10,
  },
  progressContainer: {
    marginVertical: 10,
  },
  progressLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  bottomNavigation: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  chart: {
    borderRadius: 10,
  },
});

export default DashboardScreen;
