import * as React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';


const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(null);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)'); 

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedAnswer(null); 
    } else {
      setShowResult(true); 
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false); 
  };

  return (
    <Box p={2} maxWidth={600} margin="auto">
      {!showResult ? (
        <>
          <Typography variant="h5" gutterBottom>
            {currentQuestion.question}
          </Typography>
          <Grid container spacing={2}>
            {currentQuestion.options.map((option) => (
              <Grid item xs={12} sm={6} key={option}>
                <Button
                  variant="contained"
                  color={selectedAnswer === option ? "primary" : "default"}
                  onClick={() => handleAnswer(option)}
                  fullWidth
                  disabled={!!selectedAnswer}
                  sx={{
                    backgroundColor: prefersDarkMode ? "#444" : "#fff", 
                    color: prefersDarkMode ? "#CC0000" : "#000", 
                  }}
                >
                  {option}
                </Button>
              </Grid>
            ))}
          </Grid>
          {selectedAnswer && (
            <Box mt={2}>
              <Typography>
                {selectedAnswer === currentQuestion.correctAnswer
                  ? "To'g'ri javob!"
                  : "Noto'g'ri javob!"}
              </Typography>
              <Button variant="contained" color="secondary" onClick={handleNextQuestion}>
                Keyingi savol
              </Button>
            </Box>
          )}
        </>
      ) : (
        <Box mt={4} textAlign="center">
          <Typography variant="h4">Natija</Typography>
          <Typography variant="h6">
            Siz {quizQuestions.length} ta savoldan {score} ta to'g'ri javob berdingiz!
          </Typography>
          <Button variant="contained" color="primary" onClick={handleRestart}>
            Viktorinani qayta boshlash
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Quiz;
