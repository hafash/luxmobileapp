// types.ts
export interface PaymentModalProps {
  visible: boolean;
  onClose: () => void;
}

export type RootStackParamList = {
  PaymentModal: PaymentModalProps; // Payment modal requires specific props
  // Add other screens as needed
};
