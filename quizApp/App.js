import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, BackHandler } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const questions = [
  {
    prompt: 'What is a continent?',
    type: 'multiple-choice',
    choices: ['UK', 'Africa', 'France', 'USA'],
    correct: 1
  },
  {
    prompt: 'Select all the cat breeds',
    type: 'multiple-answer',
    choices: ['Calico', 'German Shepard', 'Tabby', 'Boston Terrier'],
    correct: [0, 2]
  },
  {
    prompt: 'Is monster hunter wilds the best game ever?',
    type: 'true-false',
    choices: ['True', 'False'],
    correct: 0
  }
];

function Question({ route, navigation }) {
  const { data, index, answers } = route.params;
  const question = data[index];
  const [selected, setSelected] = useState(
    question.type === 'multiple-answer' ? [] : null
  );

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => true;
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  const handleSelect = (i) => {
    if (question.type === 'multiple-answer') {
      setSelected(prev => {
        if (prev.includes(i)) {
          return prev.filter(item => item !== i);
        } else {
          return [...prev, i];
        }
      });
    } else {
      setSelected(i);
    }
  };

  const goToNext = () => {
    const updatedAnswers = [...answers, selected];
    if (index + 1 < data.length) {
      navigation.replace('Question', { data, index: index + 1, answers: updatedAnswers });
    } else {
      navigation.replace('Summary', { data, answers: updatedAnswers });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>{question.prompt}</Text>
      <View style={styles.choicesContainer}>
        {question.choices.map((choice, i) => (
          <Button
            key={i}
            title={choice}
            onPress={() => handleSelect(i)}
            color={
              (question.type === 'multiple-answer'
                ? selected.includes(i)
                : selected === i)
                ? 'skyblue' : undefined
            }
            testID={`choice-${i}`}
          />
        ))}
      </View>
      <Button
        title="Next"
        onPress={goToNext}
        testID="next-question"
        disabled={
          selected === null ||
          (question.type === 'multiple-answer' && selected.length === 0)
        }
      />
    </View>
  );
}

function Summary({ route }) {
  const { data, answers } = route.params;

  const calculateScore = () => {
    let score = 0;
    data.forEach((question, index) => {
      const userAnswer = answers[index];
      const correctAnswer = question.correct;

      if (Array.isArray(correctAnswer)) {
        if (Array.isArray(userAnswer)) {
          const sortedUser = [...userAnswer].sort();
          const sortedCorrect = [...correctAnswer].sort();
          if (JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect)) {
            score++;
          }
        }
      } else {
        if (userAnswer === correctAnswer) {
          score++;
        }
      }
    });
    return score;
  };

  const score = calculateScore();

  const renderAnswer = (q, userAnswer, i) => {
    let isCorrect;
    if (Array.isArray(q.correct)) {
      const sortedUser = [...userAnswer].sort();
      const sortedCorrect = [...q.correct].sort();
      isCorrect = JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
    } else {
      isCorrect = userAnswer === q.correct;
    }

    return (
      <View key={i} style={styles.questionBlock}>
        <Text style={styles.prompt}>{q.prompt}</Text>
        {q.choices.map((choice, j) => {
          let textStyle = {};
          let userSelected;
          let isActuallyCorrect;

          if (Array.isArray(userAnswer)) {
            userSelected = userAnswer.includes(j);
          } else {
            userSelected = userAnswer === j;
          }

          if (Array.isArray(q.correct)) {
            isActuallyCorrect = q.correct.includes(j);
          } else {
            isActuallyCorrect = q.correct === j;
          }

          if (userSelected && isActuallyCorrect) {
            textStyle = { fontWeight: 'bold', color: 'green' };
          } else if (userSelected && !isActuallyCorrect) {
            textStyle = { textDecorationLine: 'line-through', color: 'red' };
          } else if (isActuallyCorrect) {
            textStyle = { fontWeight: 'bold', color: 'green' };
          }

          return (
            <Text key={j} style={textStyle}>
              {choice}
            </Text>
          );
        })}
        <Text style={{ marginTop: 4, color: isCorrect ? 'green' : 'red' }}>
          {isCorrect ? '✓ Correct' : '✗ Incorrect'}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text testID="total" style={styles.totalScore}>
        Score: {score}/{data.length}
      </Text>
      {data.map((q, i) => renderAnswer(q, answers[i], i))}
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name="Question"
          component={Question}
          options={{ headerLeft: () => null }}
          initialParams={{ data: questions, index: 0, answers: [] }}
        />
        <Stack.Screen
          name="Summary"
          component={Summary}
          options={{ headerLeft: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'flex-start',
    width: '50%',
    alignSelf: 'center'
  },
  prompt: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 8
  },
  choicesContainer: {
    marginBottom: 20,
    gap: 10
  },
  choiceButton: {
    backgroundColor: 'purple',
    borderRadius: 8,
    padding: 10
  },
  totalScore: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 8,
    textAlign: 'center'
  },
  questionBlock: {
    marginBottom: 20,
    backgroundColor: 'rgba(128, 0, 128, 0.2)',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'purple'
  }
});