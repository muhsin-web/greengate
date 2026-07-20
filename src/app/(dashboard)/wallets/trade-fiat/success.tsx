import SuccessPage from "@/components/screens/transfer/cmps/SuccessPage";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import CompletedReviewPage from "./CompletedReviewPage";

const Screen = () => {
  const { details } = useLocalSearchParams<{ details: string }>();
  if (!details) {
    router.back();
    return;
  }
  if (JSON.parse(details)?.status == "pending") {
    return (
      <CompletedReviewPage details={JSON.parse(details)} type="sell_fiat" />
    );
  }
  return <SuccessPage details={JSON.parse(details)} type="buy_fiat" />;
};

export default Screen;

const styles = StyleSheet.create({});
