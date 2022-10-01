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
        if(this.inputValue.length !== 0){
          this.notes.push(this.inputValue);
          this.inputValue = '';
        }
      
    },
    toUpperCase(item){
      return item.toUpperCase();
    },
    removeNote (idx) {
        this.notes.splice(idx, 1)
    },
    removeAll () {
      this.notes.splice(0)
    }
  }
})

app.mount('#app');