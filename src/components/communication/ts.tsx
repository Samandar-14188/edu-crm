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
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom >
                Texnologiyalar kelajagi: Sun’iy intellekt hayotimizni qanday o‘zgartirmoqda?
                </Typography>
                <Card sx={{ maxWidth: "100%", borderRadius: 3, boxShadow: 3 }}>
                  <CardMedia component="img" height="200" image="https://ict.xabar.uz/static/crop/1/6/920__95_1614834901.jpg" alt="" />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                    1. Tibbiyotda inqilob
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Sun’iy intellekt yordamida hozirda kasalliklarni erta bosqichda aniqlash va davolash usullari ishlab chiqilmoqda. AI algoritmlari o‘n minglab tibbiy ma’lumotlarni tahlil qilib, shifokorlarga aniq tashxis qo‘yishda yordam beradi. Misol uchun, AI yordamida saratonning ilk belgilari aniqlanib, minglab insonlar hayoti saqlab qolinyapti.
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: "100%", borderRadius: 3, boxShadow: 3 }}>
                  <CardMedia component="img" height="200" image="	https://static.tuit.uz/uploads/1/720__xxWswEwil53B2CuQ5lyroCBUqOasx3vJ.jpg" alt="" />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                    2. Ta’limda yangi davr
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Ta’lim sohasida AI talabalarga shaxsiylashtirilgan o‘quv rejalarini yaratish imkonini bermoqda. Endilikda talabalar o‘z qobiliyatlari va qiziqishlariga mos ravishda bilim olishlari mumkin. Masalan, Duolingo kabi platformalar AI orqali tillarni tez va samarali o‘rganishga yordam bermoqda.                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: "100%", borderRadius: 3, boxShadow: 3 }}>
                  <CardMedia component="img" height="200" image="https://www.unite.ai/wp-content/uploads/2024/07/Autonomous-Road-Ahead.webp" alt="" />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                    3. Transport va logistikada o‘zgarishlar
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    O‘z-o‘zidan boshqariladigan avtomobillar AI texnologiyasining yorqin misolidir. Tesla kabi kompaniyalar transport sohasini avtomatlashtirish orqali xavfsizlikni oshirish va yoqilg‘i sarfini kamaytirishni maqsad qilmoqda. Bundan tashqari, AI orqali logistika kompaniyalari yuklarni samarali boshqarib, vaqtni tejashmoqda.   </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: "100%", borderRadius: 3, boxShadow: 3 }}>
                  <CardMedia component="img" height="200" image="	https://oyina.uz/storage/articles/January2023/52.jpg" alt="" />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                    4. Ijod va san’atdagi yangi ufqlar
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    AI nafaqat ilmiy sohalarda, balki san’atda ham inqilob qilmoqda. AI yordamida musiqalar yoziladi, suratlar chiziladi, hatto hikoyalar ham yaratiladi. Misol uchun, OpenAI tomonidan ishlab chiqilgan DALL·E AI yordamida tasavvurdagi rasmlarni chizish mumkin. </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: "100%", borderRadius: 3, boxShadow: 3 }}>
                  <CardMedia component="img" height="200" image="	https://storage.kun.uz/source/9/v13RpCiAS4CydrVfHuUUy9xrOl2R1xCZ.jpeg" alt="" />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                   5. Entik muammolar va kelajak
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    AI hayotimizni yengillashtirayotgan bo‘lsa-da, u bilan bog‘liq muammolar ham mavjud. Masalan, maxfiylik, ish o‘rinlarini avtomatlashtirish natijasida yo‘qotish va sun’iy intellektning o‘zidan foydalanishning xavf-xatarlari. Bu muammolarni hal qilish uchun davlatlar va kompaniyalar birgalikda harakat qilishi lozim.</Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: "100%", borderRadius: 3, boxShadow: 3 }}>
                  <CardMedia component="img" height="200" image="	https://zamin.uz/uploads/posts/2024-03/8c10a804d0_y_ovsvxb1kl2nhhv4yul86iv9abd2udo.webp" alt="" />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                   Xulosa
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Xulosa Sun’iy intellekt insoniyat tarixidagi eng ulkan texnologik yutuqlardan biri. Uning imkoniyatlari cheksizdek tuyuladi, lekin uni mas’uliyat bilan qo‘llash har birimizning vazifamizdir. Kelajakda AI bilan hayotimiz yanada boyib, qulay bo‘lishiga shubha yo‘q. Savol shundaki: biz bu kelajakka tayyormizmi?</Typography>
                  </CardContent>
                </Card>
              </Grid>
          
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
