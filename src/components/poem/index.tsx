import * as React from "react";
import { extendTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider, Navigation, Session } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";
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
interface Poem {
  id: number;
  title: string;
  content: string;
  likes: number;
  views: number;
  author: string;
  location: string; // Shoir yashash manzili

}

const poems: Poem[] = [
  {
    id: 1,
    title: "Ko'nglimga O'xshaydi To'kilgan Barging",
    content: `Ko'nglimga o'xshaydi to'kilgan barging,
Sendan ham armonlar ketmagan hanuz.
Qadr bilmaslarga to'kdingmi qadring.
Xazonlar to'shabsan yo'llarimga kuz.

Sochilgan hazonlar dardlaringmi-yo,
Bevafo yaproqdan umidingni uz.
O'zi bevafodir bu yolg'on dunyo,
Yana kimga kuyib yig'layabsan kuz.

Seni yuragingga ko'milay joy ber,
Charchadim dunyosin yashashdan yolg'iz.
Seni bahorlarga yetaklayman yur,
Meni yuragimda gullamaydi kuz.

Ko'nglimga o'xshaydi to'kilgan barging...`,
    likes: 25,
    views: 150,
    author: "✍️ Muhammad Ali",
    location: "Farg'ona shahri",

  },
  {
    id: 2,
    title: "Сен яшар кўчадан мастона юрдим",
    content: `Сен яшар кўчадан мастона юрдим,
Толига суяниб энтикдим-турдим.
Мен кўрган маконни кўнглимга солиб,
Энг ёруғ, энг тоза бир дунё кўрдим.

Сен яшар кўчанинг тошлари кўпдир,
Тошига тўкилган ёшлари кўпдир.
Ҳар битта тошидан сени сўрасам,
Бекинган дардингнинг фошлари кўпдир.

Сен яшар кўчада бир йил кун бўлди,
Сўнгра асрлардан узун тун бўлди.
Соғинчнинг ҳолидан бир бор ҳабар ол
Тун ичра ўксиниб, бағри хун бўлди.

Сен яшар кўчанинг бир эшиги берк,
Эшикни очолмас на гадо, на бек.
Кимга очилади, ўзи билади
Қулфини очиб қўй – эшикка бер эрк.

Сен яшар бу кўча энг севимли байт,
Ёдаки ўқийман – юрагимда қайд.
“мен билан юр” десам – сенсиз юрмайди,
Бу сенсиз кўчани нима қилай, айт?

Сен яшар кўчага бўлмайди тўйиб,
Уни олиб кетдим, елкамга қўйиб.
“Оҳ” урсам, эсимга тушган чоғларинг,
Йиғлай… Деворига бошимни қўйиб...`,
    likes: 45,
    views: 300,
    author: "✍️  Усмон Азим",
    location: "Тошкент шаҳри",

  },
];

// TypeScript interfeysi
interface CustomNavigationItem {
  kind?: string;
  title: string;
  segment: string;
  icon: React.ReactNode;
  link?: string; // Custom link property
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
export default function Poem() {
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
        <Grid container spacing={4} direction="column">
      <Grid item xs={12} >
        <Typography variant="h4" gutterBottom>
          Bu yerda sizni ham she'ringiz bo'lishi mumkin!
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
      {poems.map((poem, index) => (
        <Fade in timeout={(index + 1) * 500} key={poem.id}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {poem.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {poem.author} - {poem.location}
                </Typography>
                <Typography variant="h6" gutterBottom>

                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  style={{ marginBottom: "16px" }} // Shoirdan keyin bo'sh joy
                >
                  {poem.content.split("\n").map((line, lineIndex) => (
                    <div key={lineIndex}>{line}</div>
                  ))}
                </Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <IconButton>
                      <FavoriteIcon color="error" />
                    </IconButton>
                    {poem.likes}
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <VisibilityIcon color="primary" />
                    </IconButton>
                    {poem.views}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Fade>
      ))}
    </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}