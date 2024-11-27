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
import SendIcon from '@mui/icons-material/Send';import { Box, Button, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ComputerIcon from "@mui/icons-material/Computer";
import CampaignIcon from "@mui/icons-material/Campaign";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import BookIcon from "@mui/icons-material/Book";
// TypeScript interfeysi


const NAVIGATION: CustomNavigationItem[] = [
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
    icon: <BookIcon />,
    link: "/communication",
  },
  {
    segment: "poem",
    title: "She'rlar",
    icon: <BookIcon />,
    link: "/poem",
  },
  {
    segment: "interesting",
    title: "Bu qizIQ",
    icon: <CampaignIcon />,
    link: "/interesting",
  },
  {
    segment: "intelligence",
    title: "Zakovat savollari",
    icon: <MenuBookIcon />,
    link: "/intelligence",
  },
  {
    segment: "support",
    title: "Qo'llab-quvvatlash xizmati",
    icon: <SupportAgentIcon />,
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
    title: "IT va Mediaga aloqador",
    segment: "analytics",
    icon: <BarChartIcon />,
  },
  {
    segment: "compute-literacy",
    title: "Komyuter savodxonligi",
    icon: <ComputerIcon />,
    link: "/computer-literacy",
  },
  {
    segment: "marketing",
    title: "SMM",
    icon: <CampaignIcon />,
    link: "/marketing",
  },
  {
    segment: "graphic-design",
    title: "Grafik dizayn",
    icon: <DesignServicesIcon />,
    link: "/graphic-design",
  },
  {
    segment: "html",
    title: "HTML",
    icon: <HtmlIcon />,
    link: "/html",
  },
  {
    segment: "css",
    title: "CSS",
    icon: <CssIcon />,
    link: "/css",
  },
  {
    segment: "sass",
    title: "SASS",
    icon: <LayersIcon />,
    link: "/sass",
  },
  {
    segment: "typescript",
    title: "TYPESCRIPT",
    icon: <CodeIcon />,
    link: "/typescript",
  },
  {
    segment: "javascript",
    title: "JAVASCRIPT",
    icon: <CodeIcon />,
    link: "/javascript",
  },
  {
    segment: "python",
    title: "PYTHON",
    icon: <CodeIcon />,
    link: "/python",
  },
  {
    segment: "java",
    title: "JAVA",
    icon: <CodeIcon />,
    link: "/java",
  },
  {
    segment: "c#",
    title: "C#",
    icon: <CodeIcon />,
    link: "/c#",
  },
  {
    segment: "c++",
    title: "C++",
    icon: <CodeIcon />,
    link: "/c++",
  },
  {
    kind: "divider",
    title: "",
    segment: "divider",
    icon: <></>,
  },
  {
    kind: "header",
    title: "Xorijiy tillar",
    segment: "language",
    icon: <LanguageIcon />,
  },
  {
    segment: "english",
    title: "Ingliz tili",
    icon: <LanguageIcon />,
    link: "/english",
  },
  {
    segment: "russian",
    title: "Rus tili",
    icon: <LanguageIcon />,
    link: "/russian",
  },
  {
    segment: "korean",
    title: "Koreys tili",
    icon: <LanguageIcon />,
    link: "/korean",
  },
  {
    segment: "german",
    title: "Nemis tili",
    icon: <LanguageIcon />,
    link: "/german",
  },
];
// TypeScript interfeysi
interface CustomNavigationItem {
  kind?: string;
  title: string;
  segment: string;
  icon: React.ReactNode;
  link?: string;
  children?: CustomNavigationItem[];
}


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
export default function Support() {
  const [session, setSession] = React.useState<Session | null>(null);
  const [messages, setMessages] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };
  const handleDelete = (index: number) => {
    setMessages((prev) => prev.filter((_, i) => i !== index));
  };
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
          <Grid container spacing={2} sx={{ height: "100vh", flexDirection: "column" }}>
            {/* Messages Display */}
            <Grid item xs={12} sx={{ flex: 1, overflowY: "auto", padding: 2 }}>
              {messages.length === 0 ? (
                <Typography variant="h6" align="center" color="text.secondary">
                  Qo'llab-quvvatlash xizmatiga xush kelibsiz!!!
                </Typography>
              ) : (
                <List>
                  {messages.map((message, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={message} />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              )}
            </Grid>

            {/* Fixed Input */}
            <Grid
              item
              xs={12}
              sx={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                backgroundColor: "white",
                borderTop: "1px solid #ddd",
                padding: 2,
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={1}
                sx={{ maxWidth: "600px", margin: "0 auto" }}
              >
                <TextField
                  fullWidth
                  placeholder="Xabar yozing..."
                  variant="outlined"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  sx={{
                    flex: 1,
                    maxWidth: "500px",
                  }}
                />
                <IconButton color="primary" onClick={handleSend}>
                  <SendIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}