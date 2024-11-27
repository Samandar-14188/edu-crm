import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider, Session } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import { Typography } from "@mui/material";
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
// TypeScript interface for navigation items
interface CustomNavigationItem {
  kind?: string;
  title: string;
  segment: string;
  icon: React.ReactNode;
  link?: string;
  children?: CustomNavigationItem[];
}

// Theme configuration for the app
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



// Fanlar (Subjects) component to display available subjects
const SubjectSelection = ({ onSubjectSelect }: { onSubjectSelect: (subject: string) => void }) => {
    const subjects = [
      "Informatika", "Matematika", "Tarix", "Geografiya", 
      "Fizika", "Kimyo", "Biologiya", "Adabiyot", 
      "Tarbiya", "Psixologiya", "San'at", "Musiqa",
      "Sport", "Iqtisodiyot", "Falsafa", "Astronomiya",
      "Dasturlash", "Tibbiyot"
    ];
  
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Fanlar</Typography>
        </Grid>
        {subjects.map((subject, index) => (
          <Grid item xs={12} key={index}>
            <Button variant="contained" onClick={() => onSubjectSelect(subject)} fullWidth>
              {subject}
            </Button>
          </Grid>
        ))}
      </Grid>
    );
  };
  
  const ZakovatQuiz = ({ subject }: { subject: string }) => {
    const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(null);
    const [isAnswered, setIsAnswered] = React.useState(false);
  
    // 18 ta fan uchun test savollari
    const quizData: { [key: string]: { question: string; options: string[]; correctAnswer: string } } = {
      Informatika: {
        question: "Informatikaning asosiy tushunchasi nima?",
        options: ["Algoritm", "Matematika", "Fizika", "Kimyo"],
        correctAnswer: "Algoritm",
      },
      Matematika: {
        question: "Pifagor teoremasi nima?",
        options: ["A^2 + B^2 = C^2", "A + B = C", "A - B = C", "A * B = C"],
        correctAnswer: "A^2 + B^2 = C^2",
      },
      Tarix: {
        question: "Qaysi yil mustaqillik e'lon qilindi?",
        options: ["1991", "2000", "1989", "1995"],
        correctAnswer: "1991",
      },
      Geografiya: {
        question: "Dunyoning eng katta okeani qaysi?",
        options: ["Tinch okean", "Atlantika okeani", "Hind okeani", "Shimoliy muz okeani"],
        correctAnswer: "Tinch okean",
      },
      Fizika: {
        question: "Yorug'lik tezligi qanchaga teng?",
        options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "10 km/s"],
        correctAnswer: "300,000 km/s",
      },
      Kimyo: {
        question: "H2O molekulasining tarkibi nima?",
        options: ["Vodorod va Kislorod", "Azot va Kislorod", "Uglerod va Kislorod", "Temir va Vodorod"],
        correctAnswer: "Vodorod va Kislorod",
      },
      // Qo'shimcha fanlar uchun savollarni shunday qo'shing:
      Biologiya: {
        question: "DNK nimadan iborat?",
        options: ["Dezoksiribonuklein kislota", "Ribonuklein kislota", "Protein", "Lipidlar"],
        correctAnswer: "Dezoksiribonuklein kislota",
      },
      Adabiyot: {
        question: "Alisher Navoiyning mashhur asari?",
        options: ["Xamsa", "Boburnoma", "Shayboniylar tarixi", "Muhokamat ul-lug‘atayn"],
        correctAnswer: "Xamsa",
      },
      // qolgan fanlar...
      Tarbiya: {
        question: "Odamni tarbiyalashda asosiy vosita nima?",
        options: ["Axloq", "Ilm", "Mol-mulk", "San'at"],
        correctAnswer: "Axloq",
      },
    };
  
    const { question, options, correctAnswer } = quizData[subject] || {
      question: "No quiz available",
      options: [],
      correctAnswer: "",
    };
  
    const handleAnswerSelection = (answer: string) => {
      setSelectedAnswer(answer);
    };
  
    const handleSubmit = () => {
      setIsAnswered(true);
    };
  
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">{question}</Typography>
        </Grid>
        <Grid item xs={12}>
          {options.map((option, index) => (
            <Button
              key={index}
              variant="contained"
              color={selectedAnswer === option ? "primary" : "default"}
              onClick={() => handleAnswerSelection(option)}
              fullWidth
              style={{ marginBottom: 8 }}
            >
              {option}
            </Button>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" onClick={handleSubmit} fullWidth>
            Submit
          </Button>
        </Grid>
        {isAnswered && (
          <Grid item xs={12}>
            <Typography variant="h6" color={selectedAnswer === correctAnswer ? "green" : "red"}>
              {selectedAnswer === correctAnswer
                ? "To'g'ri javob!"
                : "Noto'g'ri javob. To'g'ri javob - " + correctAnswer}
            </Typography>
          </Grid>
        )}
      </Grid>
    );
  };

// Main Dashboard component
export default function QuizApp(props: any) {
  const [session, setSession] = React.useState<Session | null>(null);
  const [selectedSubject, setSelectedSubject] = React.useState<string | null>(null);

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

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
  };

  return (
    <AppProvider navigation={NAVIGATION} theme={demoTheme} session={session} authentication={authentication}>
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Skeleton variant="text" width="100%" height={40} />
            </Grid>
            <Grid item xs={12}>
              <h1>Viktorina</h1>
              <p>Viktorina sahifasiga xush kelibsiz!</p>
            </Grid>

            {selectedSubject ? (
              <ZakovatQuiz subject={selectedSubject} />
            ) : (
              <SubjectSelection onSubjectSelect={handleSubjectSelect} />
            )}
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
