import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const data={
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldTasks => [...oldTasks, data]);

  }

  function handleToggleTaskDone(id: number) {

    const teskTitle = tasks.findIndex((tasks)=>{
      if(tasks.id == id)
      return tasks.title

    })

    setTasks(oldTasks => oldTasks.filter(
      tasks => tasks.id == id, {
        id: id,
        title: teskTitle,
        done: true
      }
    ));
  }

  function handleRemoveTask(id: number) {
    setTasks(oldTasks => oldTasks.filter(
      tasks => tasks.id !== id

    ));
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})