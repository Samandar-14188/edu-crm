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

// TypeScript interface for navigation items
interface CustomNavigationItem {
  kind?: string;
  title: string;
  segment: string;
  icon: React.ReactNode;
  link?: string;
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
  const subjects = ["Informatika", "Matematika", "Tarix", "Geografiya"];

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

// Zakovat (Quiz) Component - This will render the quiz based on selected subject
const ZakovatQuiz = ({ subject }: { subject: string }) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(null);
  const [isAnswered, setIsAnswered] = React.useState(false);

  // Sample questions for different subjects
  const quizData = {
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
            {selectedAnswer === correctAnswer ? "To'g'ri javob!" : "Noto'g'ri javob. To'g'ri javob - " + correctAnswer}
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
