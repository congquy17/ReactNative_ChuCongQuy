import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import axios from 'axios';
import AntDesign from '@expo/vector-icons/AntDesign';
import AppContext from '../context/AppContext'; // Import context

export default function EndItem({ navigation }) {
  const { name, title, imageURL } = useContext(AppContext); // Get context values
  const [newTask, setNewTask] = useState(''); // State for new task input
  const [tasks, setTasks] = useState([]); // State for list of tasks
  const [editIndex, setEditIndex] = useState(null); // To handle editing

  // Fetch tasks from MockAPI on component mount
  useEffect(() => {
    axios
      .get('https://66090cbaa2a5dd477b1505d2.mockapi.io/tododata')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to add or edit a task
  const addTask = () => {
    if (newTask.trim() !== '') {
      if (editIndex !== null) {
        // Edit task via PUT request
        const taskToEdit = tasks[editIndex];
        axios
          .put(
            `https://66090cbaa2a5dd477b1505d2.mockapi.io/tododata/${taskToEdit.id}`,
            {
              name: newTask,
            }
          )
          .then((response) => {
            const updatedTasks = tasks.map((task, index) =>
              index === editIndex ? response.data : task
            );
            setTasks(updatedTasks);
            setEditIndex(null); // Reset edit mode
          })
          .catch((error) => console.error('Error updating task:', error));
      } else {
        // Add task via POST request
        axios
          .post('https://66090cbaa2a5dd477b1505d2.mockapi.io/tododata', {
            name: newTask,
          })
          .then((response) => {
            setTasks([...tasks, response.data]);
          })
          .catch((error) => console.error('Error adding task:', error));
      }
      setNewTask(''); // Clear input
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const taskToDelete = tasks[index];
    axios
      .delete(
        `https://66090cbaa2a5dd477b1505d2.mockapi.io/tododata/${taskToDelete.id}`
      )
      .then(() => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  // Function to edit a task
  const editTask = (index) => {
    setNewTask(tasks[index].task); // Set the selected task text in the input
    setEditIndex(index); // Store the index to track editing
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        <View style={styles.userInfoContainer}>
          <Image source={{ uri: imageURL }} style={styles.userImage} />
          <View>
            <Text>{name}</Text>
            <Text style={styles.titleText}>{title}!</Text>
          </View>
        </View>
      </View>

      {/* Input for adding tasks */}
      <Text style={styles.addTitle}>ADD YOUR JOB</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Input your job"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          style={styles.input}
        />
      </View>

      {/* Button to add or finish editing a task */}
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>
          {editIndex !== null ? 'Finish Edit' : 'Add Task'}
        </Text>
      </TouchableOpacity>

      {/* List of tasks */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text>{item.name}</Text>
            <View style={styles.taskActions}>
              {/* Edit task */}
              <TouchableOpacity onPress={() => navigation.navigate('EndItem', { taskId: item.id })}>
                <AntDesign name="edit" size={24} color="black" />
              </TouchableOpacity>
              {/* Delete task */}
              <TouchableOpacity onPress={() => deleteTask(index)}>
                <AntDesign name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        style={{ marginTop: 20 }}
      />
      <View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    backgroundColor: '#00BDD6',
    color: 'white',
    padding: 5,
    textAlign: 'center',
    borderRadius: 5,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  titleText: {
    fontSize: 18,
    color: 'gray',
  },
  addTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    borderColor: '#dcdcdc',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#00BDD6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  taskActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 70,
  },
});
