import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider, Navigation, Session } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

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
    segment: "profil",
    title: "Profil",
    icon: <DashboardIcon />,
    link: "/profil",
  },
  {
    segment: "quiz",
    title: "Viktorina",
    icon: <DashboardIcon />,
    link: "/quiz",
  },
  {
    segment: "communication",
    title: "Maqolalar",
    icon: <ShoppingCartIcon />,
    link: "/communication",
  },
  {
    segment: "poem",
    title: "She'rlar",
    icon: <ShoppingCartIcon />,
    link: "/poem",
  },
  {
    segment: "interesting",
    title: "Bu qizIQ",
    icon: <ShoppingCartIcon />,
    link: "/interesting",
  },
  {
    segment: "intelligence",
    title: "Zakovat savollari",
    icon: <ShoppingCartIcon />,
    link: "/intelligence",
  },
  {
    segment: "support",
    title: "Qo'llab-quvvatlash xizmati",
    icon: <ShoppingCartIcon />,
    link: "/support",
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

// Main dashboard layout component
export default function Communication() {
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
    <AppProvider
      navigation={NAVIGATION}
      theme={demoTheme}
      session={session}
      authentication={authentication}
    >
      <DashboardLayout>
        <PageContainer>
        
          <Grid container spacing={1}>
        
            <Grid item xs={12} >
        <Typography variant="h4" gutterBottom>
          Bu yerda sizni ham maqolangiz bo'lishi mumkin!
        </Typography>
        <Typography
      variant="h6" // Matn kattaligini belgilash
      gutterBottom
      sx={{
        color: "#1976d2", // Matn rangini o'rnatish (masalan, Material-UI asosiy ko‘k rangi)
        "& a": {
          textDecoration: "none", // Ostidan chiziqni olib tashlash
          color: "#1976d2", // Havola rangi
          fontWeight: "bold", // Matn qalinligi
        },
        "& a:hover": {
          color: "#1565c0", // Hoverdagi rang
          textDecoration: "underline", // Hoverda ostki chiziq
          transition: "color 0.3s", // Silliq o‘tish effekti
        },
      }}
    >
      <Link to="/support">Qo'llab-quvvatlash sahifasiga o'tish</Link>
    </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Link to="/article/samandar-ai" style={{ textDecoration: "none" }}>
                <Card sx={{ maxWidth: "100%", borderRadius: 3, boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://ict.xabar.uz/static/crop/1/6/920__95_1614834901.jpg"
                    alt="AI maqolasi"
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Sun’iy intellekt hayotimizni qanday o‘zgartirmoqda?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Samandar Nabiyevning maqolasi: Tibbiyot, ta'lim, transport, va boshqa sohalarda AI inqilobi.
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
             
          
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
