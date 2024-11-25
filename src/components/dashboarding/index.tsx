import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider, Navigation, Session } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton"; // Skeleton importi

// TypeScript interfeysi
interface CustomNavigationItem {
  kind?: string;
  title: string;
  segment: string;
  icon: React.ReactNode;
  link?: string; // Custom link property
  children?: CustomNavigationItem[];
}

const NAVIGATION: CustomNavigationItem[] = [
  {
    kind: "header",
    title: "Main items",
    segment: "main-items",
    icon: <DashboardIcon />,
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
    link: "/orders",
  },
  {
    kind: "divider",
    title: "",
    segment: "divider",
    icon: <></>,
  },
  {
    kind: "header",
    title: "Analytics",
    segment: "analytics",
    icon: <BarChartIcon />,
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    link: "/reports",
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
    link: "/integrations",
  },
];

// Theme for the app
const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});
// Skeleton component styling
const SkeletonWrapper = styled("div")<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

// Component for page content (Demo for Dashboard, Orders, etc.)
const ContentPage = ({ title }: { title: string }) => (
  <Grid container spacing={1}>
    <Grid item xs={12}>
      <SkeletonWrapper height={100} />
    </Grid>
    <Grid item xs={12}>
      <h1>{title} Page</h1>
      <p>Content will be displayed here for {title}</p>
    </Grid>
  </Grid>
);

// Main dashboard layout component
export default function Dashboard(props: any) {
  const [session, setSession] = React.useState<Session | null>(null);

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Bharat Kashyap",
            email: "bharatkashyap@outlook.com",
            image: "https://avatars.githubusercontent.com/u/19550456",
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    <AppProvider navigation={NAVIGATION} theme={demoTheme} session={session} authentication={authentication}>
      <DashboardLayout>
        <PageContainer>
          {/* Content rendered for the dashboard */}
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {/* Render Skeleton or content */}
              <Skeleton variant="text" width="100%" height={40} />
            </Grid>
            <Grid item xs={12}>
              <h1>Dashboard</h1>
              <p>Welcome to the Dashboard!</p>
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}