import { FormControl } from "@mui/material";
import { AppProvider } from "@toolpad/core/AppProvider";
import { PageContainer } from "@toolpad/core/PageContainer";
import ButtonComponents from "../../MuiComponents/button";

export default function Index() {
  return (
    <AppProvider>
      <PageContainer
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",  
        }}
      >
        <FormControl >
          <ButtonComponents text="Kirish" />
        </FormControl>
      </PageContainer>
    </AppProvider>
  );
}
