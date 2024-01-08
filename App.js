import React, {useState} from 'react';
import { TextInput, TouchableOpacity , KeyboardAvoidingView, Platform, StyleSheet, Text, View, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task) {
      setTaskItems([...taskItems, task]);
      setTask('');
    } 
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index)=> {
              return (
                <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          } 
        </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? "padding":"height"}
        style={styles.writeTasksWrapper}
      >
        <TextInput onChangeText={text=> setTask(text)} value={task} style={styles.input}  placeholder={"write a task"} />
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 30,
  },
  writeTasksWrapper: {
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:  'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal:20,
  },
  input: {
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor: '#fff',
    borderRadius:60, 
    borderColor: '#c0c0c0',
    borderWidth:1,
    width:250,
  },
  addWrapper: {
    width:60,
    height:60,
    backgroundColor: '#fff',
    borderRadius: 60,
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: '#c0c0c0',
    borderWidth:1,
  },
  addText: {
    fontSize:40,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});