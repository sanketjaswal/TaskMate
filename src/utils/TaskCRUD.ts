import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { User } from "firebase/auth";

interface Task {
  id: string;
  title: string;
  category: string;
  description: string;
  dueDate: string;
  status: string;
  user: string;
}


export const fetchTasks = async (user: User | null) => {
  if (user && user.uid) {
    const q = query(collection(db, "tasks"), where("user", "==", user.uid));

    try {
      const result = await getDocs(q);

      const fetchedTasks: Task[] = result.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id, // Get document ID from Firestore
          title: data.title,
          category: data.category,
          description: data.description,
          dueDate: data.dueDate,
          status: data.status,
          user: data.user,
        };
      });

      return fetchedTasks;    // Update state only once
    } catch (error) {
      console.error("Error fetching tasks: ", error);
    }
  }
};

export const updateTaskStatus = async (taskId: string, newStatus: string) => {
  try {
    const taskRef = doc(db, "tasks", taskId);
    await updateDoc(taskRef, { status: newStatus });

    console.log("Task status updated successfully!");
  } catch (error) {
    console.error("Error updating task status:", error);
  }
};


export const deleteTask = async (taskId: string) => {
  try {
    await deleteDoc(doc(db, "tasks", taskId));
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}
