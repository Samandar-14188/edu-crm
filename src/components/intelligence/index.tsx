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
import { Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button,  Card, CardContent, CardActions, IconButton } from "@mui/material";


// TypeScript interfeysi
interface QuestionFolderProps {
  title: string;
  question: string;
  answer: string;
}
// TypeScript interfeysi
interface CustomNavigationItem {
  kind?: string;
  title: string;
  segment: string;
  icon: React.ReactNode;
  link?: string; // Custom link property
  children?: CustomNavigationItem[];
}
const QuestionFolder = ({ title, question, answer }: QuestionFolderProps) => {
  const [showAnswer, setShowAnswer] = React.useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {question}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleShowAnswer}>
          {showAnswer ? "Javobni yashirish" : "Javobni ko'rsatish"}
        </Button>
      </CardActions>
      {showAnswer && (
        <Box sx={{ padding: 2, backgroundColor: "#f9f9f9", borderTop: "1px solid #ddd" }}>
          <Typography variant="body2">{answer}</Typography>
        </Box>
      )}
    </Card>
  );
};

interface StatsFolderProps {
  title: string;
  likes: number;
  views: number;
}

const StatsFolder = ({ title, likes, views }: StatsFolderProps) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
      <CardActions>
        <IconButton color="primary">
          <ThumbUpIcon />
        </IconButton>
        <Typography variant="body2">{likes}</Typography>
        <IconButton color="primary" sx={{ marginLeft: 2 }}>
          <VisibilityIcon />
        </IconButton>
        <Typography variant="body2">{views}</Typography>
      </CardActions>
    </Card>
  );
};

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
export default function Intelligence() {
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
         
          <Grid container spacing={1}>         
          <Grid item xs={12} >
        <Typography variant="h4" gutterBottom>
          Bu yerda sizni ham savolingiz bo'lishi mumkin!
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
           {/* Samandar Nabiyev savol papkasi */}
           <Grid item xs={12}>
  <QuestionFolder
    title="Samandar Nabiyev"
    question={`Daftar hoshiyasidagi bitiklar asarida O'tkir Hoshimov Unday insonlarga nisbatan shunday deydi: 
    Ular qorong'uda chiroq ko'tarib borayotgan odamga o'xshaydi. Uning chirog'i olamni munavvar qilmasligi mumkin. 
    Biroq dillarga dalda beradi, umid uyg'otadi. Ular olis-yaqindan ko'rinib turishi - shundan. 
    Afsuski, chiroq ko'targan odam ko'p qoqiladi... 
    Ular deganda qanday xislatli insonlarga taʼrif bergan`}
    answer="Javob: Rostgoʻy, Haqgoʻy"
  />
  <StatsFolder title="Savol yoqgan bo'lsa like bosing" likes={120} views={350} />
</Grid>


          
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}