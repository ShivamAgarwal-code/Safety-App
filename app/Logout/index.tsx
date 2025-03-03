import React from "react";
import {useRouter} from "expo-router";
import ScreenTemplate from "../../components/ScreenTemplate";

export default function Logout() {
  const router = useRouter();

  React.useEffect(() => {
    // Add your logout logic here
    // Then redirect to login or home
    router.replace("/");
  }, []);

  return (
    <ScreenTemplate title="Logging out...">
      {/* Add a loading spinner or message here */}
    </ScreenTemplate>
  );
}
