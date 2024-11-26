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
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

// TypeScript interfeysi
interface CustomNavigationItem {
  kind?: string;
  title: string;
  segment: string;
  icon: React.ReactNode;
  link?: string; // Custom link property
  children?: CustomNavigationItem[];
}

// Qiziqarli faktlar
const interestingFacts = [
  {
    title: "Siz bilarmidingiz Asalari...",
    image: "https://api.cabinet.smart-market.uz/uploads/images/ff8081813ca9590bd6c5ff5d", // Tasvir URL'si
    fact: "100 gramm asal yig‘ish uchun asalari 46 ming km masofani uchib o‘tadi. Bu butun yer sharini ekvator bo‘ylab kezib chiqishdir.",
  },
  {
    title: "Siz bilarmidingiz Chumolilar...",
    image: "https://storage.kun.uz/source/thumbnails/_medium/1/nNjq6a1efhIxxjzUxqland4g2l7hZALD_medium.jpg", // Tasvir URL'si
    fact: "Chumolilar o‘z inini isitish uchun tanalaridan foydalanadi, Ular quyoshda isinib olgach darhol inlariga yuguradi. Shuning uchun chumolilar inidagi harorat tashqi olamdan 10 daraja yuqori bo‘ladi.",
  },
  {
    title: "Siz buni bilarmidingiz...",
    image: "https://yhxx.uz/uploads/news/025f5e3410d7713895b588bf56fce694.jpg", // Tasvir URL'si
    fact: "Yevropaning eng ko‘p shamol esadigan joyi Shotlandiya hisoblanadi. U yerdagi shamollar butun yevropa shamoli energiyasining 25 foizni beradi.",
  },
];

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
export default function Interesting() {
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
          <Grid container spacing={2} sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column"
              }}>
                <h1>Bu qizIQ</h1>
                <p>Bu yerdan qiziqarli ma'lumotlarni topishingiz mumkin</p>
            {interestingFacts.map((fact, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                width:"600"
              }}>
                <Card>
                  <CardMedia
                  
                    component="img"
                    height="240"
                    image={fact.image}
                    alt={fact.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{fact.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {fact.fact}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
