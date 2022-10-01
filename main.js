const { createApp } = Vue
    
let app = createApp({
  data() {
    return {
      title: 'Список заметок',
      holder: 'Добавит новый элемент',
      inputValue: '',
      notes: []
      
    }
  },
  methods: {
    inputChangeHandler(event) {
        this.inputValue = event.target.value;
    },
    addNewNote() {
        this.notes.push(this.inputValue);
        this.inputValue = '';
    },
    removeNote (idx) {
        this.notes.splice(idx, 1)
    }
  }
})

app.mount('#app');