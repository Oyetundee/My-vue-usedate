import { ref, computed, onMounted } from 'vue';

const useDate = () => {
  const currentDate = ref(new Date());

  const formattedDate = computed(() => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    };
    return currentDate.value.toLocaleString('en-US', options);
  });

  const incrementDate = (amount) => {
    const newDate = new Date(currentDate.value);
    newDate.setDate(newDate.getDate() + amount);
    currentDate.value = newDate;
  };

  const decrementDate = (amount) => {
    const newDate = new Date(currentDate.value);
    newDate.setDate(newDate.getDate() - amount);
    currentDate.value = newDate;
  };

  // Update the time every second
  const updateTime = () => {
    setInterval(() => {
      currentDate.value = new Date();
    }, 1000);
  };

  // Trigger the update when the component is mounted
  onMounted(() => {
    updateTime();
  });

  return {
    currentDate,
    formattedDate,
    incrementDate,
    decrementDate,
  };
};

export { useDate };
