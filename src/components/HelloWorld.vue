<template>
  <div class="container">
    <div class="content">
      <p class="date">Current Date: {{ formattedDate }}</p>
      <button @click="increment">Increment Date</button>
      <button @click="decrement">Decrement Date</button>
    </div>
  </div>
</template>

<script>
import { useDate } from '../components/useDate'; // Update path accordingly

export default {
  setup() {
    const { formattedDate, incrementDate, decrementDate } = useDate();

    const increment = () => {
      incrementDate(1); // Increase date by 1 day
    };

    const decrement = () => {
      decrementDate(1); // Decrease date by 1 day
    };

    return {
      formattedDate,
      increment,
      decrement,
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #bbdcf3;
}

.content {
  text-align: center;
}

.date {
  font-size: 24px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}
</style>
