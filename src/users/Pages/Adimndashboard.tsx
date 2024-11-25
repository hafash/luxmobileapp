import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function AdminDashboard() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Admin Dashboard</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Analytics Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Analytics</Text>
          <View style={styles.analyticsContainer}>
            <View style={styles.analyticsItem}>
              <Text style={styles.analyticsValue}>250</Text>
              <Text style={styles.analyticsLabel}>Users</Text>
            </View>
            <View style={styles.analyticsItem}>
              <Text style={styles.analyticsValue}>40</Text>
              <Text style={styles.analyticsLabel}>Active Listings</Text>
            </View>
            <View style={styles.analyticsItem}>
              <Text style={styles.analyticsValue}>15</Text>
              <Text style={styles.analyticsLabel}>Pending Orders</Text>
            </View>
          </View>
        </View>

        {/* User Management */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>User Management</Text>
          <View style={styles.userList}>
            <View style={styles.userItem}>
              <FontAwesome5 name="user-circle" size={40} color="#1c368a" />
              <Text style={styles.userName}>Germain</Text>
              <TouchableOpacity style={styles.manageButton}>
                <Text style={styles.manageButtonText}>Manage</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.userItem}>
              <FontAwesome5 name="user-circle" size={40} color="#1c368a" />
              <Text style={styles.userName}>Lux</Text>
              <TouchableOpacity style={styles.manageButton}>
                <Text style={styles.manageButtonText}>Manage</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Activity</Text>
          <View>
            <Text style={styles.activityItem}>✅ Order #1234 approved</Text>
            <Text style={styles.activityItem}>⚠️ Payment failed for #1235</Text>
            <Text style={styles.activityItem}>
              🔔 New user registered: Alice
            </Text>
          </View>
        </View>

        {/* Notifications */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Notifications</Text>
          <View>
            <Text style={styles.notificationItem}>
              🔔 Update available for Product X
            </Text>
            <Text style={styles.notificationItem}>
              ⚠️ User John reported an issue
            </Text>
          </View>
        </View>

        {/* System Status */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>System Status</Text>
          <View style={styles.systemStatus}>
            <Text style={styles.systemStatusItem}>✅ Server: Online</Text>
            <Text style={styles.systemStatusItem}>✅ Database: Connected</Text>
            <Text style={styles.systemStatusItem}>⚠️ API: Minor delays</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome5 name="cogs" size={24} color="#ffffff" />
          <Text style={styles.footerText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome5 name="sign-out-alt" size={24} color="#ffffff" />
          <Text style={styles.footerText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#142b6f',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  analyticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  analyticsItem: {
    alignItems: 'center',
  },
  analyticsValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c368a',
  },
  analyticsLabel: {
    fontSize: 14,
    color: '#555555',
  },
  userList: {
    marginTop: 10,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userName: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333333',
  },
  manageButton: {
    backgroundColor: '#1c368a',
    padding: 8,
    borderRadius: 5,
  },
  manageButtonText: {
    color: '#ffffff',
    fontSize: 14,
  },
  activityItem: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
  notificationItem: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
  systemStatus: {
    marginTop: 10,
  },
  systemStatusItem: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#142b6f',
    paddingVertical: 10,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 5,
  },
});
