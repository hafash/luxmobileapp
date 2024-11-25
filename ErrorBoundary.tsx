import * as React from 'react';
import {ReactNode} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface ErrorBoundaryProps {
  children: ReactNode;
  goBack?: () => void; // Optional goBack function
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: string | null;
  errorInfo: string | null;
  showModal: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  private timer: NodeJS.Timeout | null = null;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showModal: false,
    };
  }

  static getDerivedStateFromError(_error: Error) {
    // Prefix with _
    return {hasError: true, showModal: true};
  }

  componentDidCatch(_error: Error, errorInfo: any) {
    // Prefix with _
    console.log('Error Info:', errorInfo);

    this.setState({
      error: _error.toString(),
      errorInfo: errorInfo.componentStack,
    });

    this.timer = setTimeout(() => {
      this.setState({showModal: false});
    }, 60000);
  }

  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer);
  }

  handleCancel = () => {
    this.setState({showModal: false});
    if (this.timer) clearTimeout(this.timer);
  };

  handleBack = () => {
    this.setState({showModal: false});
    if (this.timer) clearTimeout(this.timer);
    if (this.props.goBack) {
      this.props.goBack(); // Invoke goBack if provided
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <Modal
          visible={this.state.showModal}
          transparent
          animationType="slide"
          onRequestClose={this.handleCancel}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.errorTitle}>Something went wrong</Text>
              {this.state.error && (
                <Text style={styles.errorMessage}>
                  Error: {this.state.error}
                </Text>
              )}
              {this.state.errorInfo && (
                <ScrollView style={styles.errorInfoContainer}>
                  <Text style={styles.errorInfoTitle}>Error Details:</Text>
                  <Text style={styles.errorInfoText}>
                    {this.state.errorInfo}
                  </Text>
                </ScrollView>
              )}

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.handleCancel}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.handleBack}>
                  <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
    alignItems: 'center',
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d9534f',
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  errorInfoContainer: {
    maxHeight: 200,
    marginTop: 10,
  },
  errorInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  errorInfoText: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1c368a',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ErrorBoundary;
