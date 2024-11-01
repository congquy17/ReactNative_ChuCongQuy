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
import AppContext from '../context/AppContext';

export default function EndItem({ navigation, route }) {
  const { name, title, imageURL } = useContext(AppContext);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { taskId } = route.params;
console.log(route)
  // Fetch tasks from MockAPI when component mounts
  useEffect(() => {
    if (taskId) {
      axios
        .get(`https://66090cbaa2a5dd477b1505d2.mockapi.io/tododata/${taskId}`)
        .then((response) => {
          setNewTask(response.data.name); // Set task name to edit
        })
        .catch((error) => console.error('Error fetching task:', error));
    }
  }, [taskId]);

  // Update filtered tasks based on search term
  useEffect(() => {
    const results = tasks.filter((task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(results);
  }, [searchTerm, tasks]);

  // Function to add or edit a task
  const addTask = () => {
    if (newTask.trim() !== '') {
      if (editIndex !== null) {
        // Edit task via PUT request
        const taskToEdit = filteredTasks[editIndex];
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
            setFilteredTasks(updatedTasks);
            setEditIndex(null); // Reset edit mode
            setNewTask(''); // Clear input
          })
          .catch((error) => console.error('Error updating task:', error));
      }
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const taskToDelete = filteredTasks[index];
    axios
      .delete(
        `https://66090cbaa2a5dd477b1505d2.mockapi.io/tododata/${taskToDelete.id}`
      )
      .then(() => {
        const updatedTasks = filteredTasks.filter((_, i) => i !== index);
        setFilteredTasks(updatedTasks);
        setTasks(updatedTasks); // Update original tasks state as well
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  // Function to edit a task
 const editTask = (index) => {
  setNewTask(filteredTasks[index].name); // Set the selected task text in the input
  setEditIndex(index); // Store the index to track editing
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 10 }}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.userInfoContainer}>
            <Image source={{ uri: imageURL }} style={styles.userImage} />
            <View>
              <Text>{name}</Text>
              <Text style={styles.titleText}>{title}!</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <TextInput
          placeholder="..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
         
        />

        {/* Input for editing tasks */}
        <Text style={styles.addTitle}>EDIT YOUR JOB</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Input your job"
            value={newTask}
            onChangeText={(text) => setNewTask(text)}
            style={styles.input}
          />
        </View>

        {/* Button to save or finish editing a task */}
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>
            {editIndex !== null ? "add":'Finish Edit'}
          </Text>
        </TouchableOpacity>

        {/* List of tasks */}
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View style={styles.taskItem}>
              <Text>{item.name}</Text>
              <View style={styles.taskActions}>
                {/* Edit task */}
                <TouchableOpacity onPress={() => editTask(index)}>
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
  searchInput: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
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
