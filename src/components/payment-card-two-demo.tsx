'use client';
import { PaymentCardTwo } from '@/components/billingsdk/payment-card-two';

export default function PaymentCardTwoDemo() {
  return (
    <div className="w-full flex justify-center">
      <PaymentCardTwo
        title="Complete Payment"
        brandName="Dodo payments"
        item="Subscription"
        itemAmount={146}
        currency="$"
        infoBottom="Make payment to activate subscription"
        onPay={() => console.log('Pay now clicked')}
        onBack={() => console.log('Back clicked')}
      />
    </div>
  );
}


