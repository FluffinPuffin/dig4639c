import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

const exList = [
  {
    name: 'Push Ups',
    type: 'repetition',
    next: 'Sit Ups'
  },
  {
    name: 'Sit Ups',
    type: 'repetition',
    next: 'Squats'
  },
  {
    name: 'Squats',
    type: 'repetition',
    next: 'Plank'
  },
  {
    name: 'Plank',
    type: 'duration',
    next: 'Push Ups'
  }
];

export default function App() {
  const [screen, setScreen] = useState('home');
  const [exercise, setExercise] = useState(null);

  const goToExercise = (ex) => {
    if (ex.type === 'repetition') {
      setScreen('repetition');
    } else {
      setScreen('duration');
    }
    setExercise(ex);
  };

  const goToNext = () => {
    if (exercise) {
      const nextEx = exList.find(e => e.name === exercise.next);
      if (nextEx) {
        goToExercise(nextEx);
      }
    }
  };

  const goHome = () => {
    setScreen('home');
    setExercise(null);
  };

  if (screen === 'repetition') {
    return (
      <RepetitionScreen
        ex={exercise}
        onBack={goHome}
        onNext={goToNext}
      />
    );
  } else if (screen === 'duration') {
    return (
      <DurationScreen
        ex={exercise}
        onBack={goHome}
        onNext={goToNext}
      />
    );
  } else {
    return (
      <Home
        exList={exList}
        onPress={goToExercise}
      />
    );
  }
}

function Home({ exList, onPress }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={exList}
        renderItem={({ item }) => (
          <View
            style={styles.button}
            onStartShouldSetResponder={() => true}
            onResponderRelease={() => onPress(item)}
          >
            <Text style={styles.buttonTitle}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.name}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

function RepetitionScreen({ ex, onBack, onNext }) {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    setCount(0);
  }, [ex]);

  if (!ex) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.exContainer}>
        <Text style={styles.exName}>{ex.name}</Text>
        <Text style={styles.counter}>Count: {count}</Text>

        <View style={styles.btnGroup}>
          <View
            style={styles.actionBtn}
            onStartShouldSetResponder={() => true}
            onResponderRelease={() => setCount(count + 1)}
          >
            <Text style={styles.btnText}>Add Rep</Text>
          </View>
          <View
            style={styles.actionBtn}
            onStartShouldSetResponder={() => true}
            onResponderRelease={() => setCount(0)}
          >
            <Text style={styles.btnText}>Reset</Text>
          </View>
        </View>

        <View style={styles.navBtns}>
          <View
            style={styles.navBtn}
            onStartShouldSetResponder={() => true}
            onResponderRelease={onNext}
          >
            <Text style={styles.btnText}>Suggested: {ex.next}</Text>
          </View>
          <View
            style={styles.navBtn}
            onStartShouldSetResponder={() => true}
            onResponderRelease={onBack}
          >
            <Text style={styles.btnText}>Back</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function DurationScreen({ ex, onBack, onNext }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timer = React.useRef(null);

  React.useEffect(() => {
    if (running) {
      timer.current = setInterval(() => setTime(t => t + 1), 1000);
    }
    return () => clearInterval(timer.current);
  }, [running]);

  if (!ex) {
    return null;
  }

  const mins = Math.floor(time / 60);
  const secs = time % 60;
  const formattedTime = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <View style={styles.exContainer}>
        <Text style={styles.exName}>{ex.name}</Text>
        <Text style={styles.counter}>Time: {formattedTime}</Text>

        <View style={styles.btnGroup}>
          <View
            style={styles.actionBtn}
            onStartShouldSetResponder={() => true}
            onResponderRelease={() => setRunning(!running)}
          >
            <Text style={styles.btnText}>{running ? 'Pause' : 'Start'}</Text>
          </View>
          <View
            style={styles.actionBtn}
            onStartShouldSetResponder={() => true}
            onResponderRelease={() => {
              setRunning(false);
              setTime(0);
            }}
          >
            <Text style={styles.btnText}>Reset</Text>
          </View>
        </View>

        <View style={styles.navBtns}>
          <View
            style={styles.navBtn}
            onStartShouldSetResponder={() => true}
            onResponderRelease={onNext}
          >
            <Text style={styles.btnText}>Suggested: {ex.next}</Text>
          </View>
          <View
            style={styles.navBtn}
            onStartShouldSetResponder={() => true}
            onResponderRelease={onBack}
          >
            <Text style={styles.btnText}>Back</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2d2d',
    padding: 20
  },
  listContent: {
    flexGrow: 1
  },
  button: {
    backgroundColor: '#545454',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: '10%',
    alignSelf: 'center'
  },
  buttonTitle: {
    fontSize: 30,
    color: '#050505'
  },
  btnText: {
    color: '#050505',
    fontSize: 30
  },
  exContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  exName: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20
  },
  counter: {
    fontSize: 30,
    marginBottom: 30
  },
  btnGroup: {
    flexDirection: 'row',
    marginBottom: 30
  },
  actionBtn: {
    backgroundColor: '#545454',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5
  },
  navBtns: {
    width: '100%',
    alignItems: 'center'
  },
  navBtn: {
    backgroundColor: '#545454',
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '20%',
    alignItems: 'center'
  }
});