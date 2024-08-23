document.addEventListener("DOMContentLoaded", () => {
  const noteInput = document.getElementById("noteInput");
  const addNoteBtn = document.getElementById("addNoteBtn");
  const notesContainer = document.getElementById("notesContainer");

  const loadNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach((note) => {
      createNoteElement(note);
    });
  };

  const createNoteElement = (text) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    const noteP = document.createElement("p");
    noteP.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      noteDiv.remove();
      deleteNoteFromStorage(text);
    });

    noteDiv.appendChild(noteP);
    noteDiv.appendChild(deleteBtn);
    notesContainer.appendChild(noteDiv);
  };

  const addNoteToStorage = (text) => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(text);
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const deleteNoteFromStorage = (text) => {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes = notes.filter((note) => note !== text);
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  addNoteBtn.addEventListener("click", () => {
    const noteText = noteInput.value.trim();
    if (noteText) {
      createNoteElement(noteText);
      addNoteToStorage(noteText);
      noteInput.value = "";
    }
  });

  loadNotes();
});
