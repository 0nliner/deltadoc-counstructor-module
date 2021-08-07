
    let boldCount = false;
    let italicCount = false;
    let decorationCount = false;
    
    export const textStyle = (method) => {
      setTimeout(() => {
        console.log("bold: " + boldCount + "\nitalic: " + italicCount + "\ndecoration: " + decorationCount) 
      }, 100); 
      if(method === "bold") {

        let sel = window.getSelection(); // Gets selection
        
        if (sel.rangeCount) {
        // Creates a new element, and insert the selected text with the chosen font inside
          if(boldCount === false && italicCount === false && decorationCount === false) {
            let e = document.createElement('span');
            e.style.fontWeight = "600";
            e.innerHTML = sel.toString();
  
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            
            boldCount = true;
            return range.insertNode(e)
          } 
          if(boldCount === false && italicCount === true && decorationCount === false) {
            let e = document.createElement('span');
            e.style.fontWeight = "600";
            e.style.fontStyle = "italic";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            boldCount = true;
            return range.insertNode(e)
          }
          if(boldCount === false && italicCount === true && decorationCount === true) {
            let e = document.createElement('span');
            e.style.fontWeight = "600";
            e.style.fontStyle = "italic";
            e.style.textDecoration = "underline";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            boldCount = true;
            return range.insertNode(e)
          }
          if(boldCount === true && italicCount === false && decorationCount === false) {
            let e = document.createElement('span');
            e.style.fontWeight = "400";
            e.innerHTML = sel.toString();
  
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            boldCount = false;
            return range.insertNode(e)
          } 
          if(boldCount === true && italicCount === true && decorationCount === false) {
            let e = document.createElement('span');
            e.style.fontWeight = "400";
            e.style.fontStyle = "italic";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            boldCount = false;
            return range.insertNode(e)
          }
          if(boldCount === true && italicCount === true && decorationCount === true) {
            let e = document.createElement('span');
            e.style.fontWeight = "400";
            e.style.fontStyle = "italic";
            e.style.textDecoration = "underline";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            boldCount = false;
            return range.insertNode(e)
          }
          if(boldCount === true && italicCount === false && decorationCount === true) {
            let e = document.createElement('span');
            e.style.fontWeight = "400";
            e.style.fontStyle = "normal";
            e.style.textDecoration = "underline";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            boldCount = false;
            return range.insertNode(e)
          }
        }
      }  // method Bold finish

      if(method === "italic") {

        let sel = window.getSelection(); // Gets selection

        if (sel.rangeCount) {
        // Creates a new element, and insert the selected text with the chosen font inside
          if(boldCount === false && italicCount === false && decorationCount === false) {
            let e = document.createElement('span');
            e.style.fontStyle = "italic";
            e.innerHTML = sel.toString();
  
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            italicCount = true;
            return range.insertNode(e)
          } 
          if(boldCount === true && italicCount === false && decorationCount === false) {
            let e = document.createElement('span');
            e.style.fontWeight = "600";
            e.style.fontStyle = "italic";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            italicCount = true;
            return range.insertNode(e)
          }
          if(boldCount === false && italicCount === false && decorationCount === true) {
            let e = document.createElement('span');
            e.style.fontStyle = "italic";
            e.style.textDecoration = "underline";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            italicCount = true;
            return range.insertNode(e)
          }
          if(boldCount === false && italicCount === true && decorationCount === false) {
            let e = document.createElement('span');
            e.style.fontStyle = "normal";
            e.innerHTML = sel.toString();
  
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            italicCount = false;
            return range.insertNode(e)
            return range.insertNode(e)
          } 
          if(boldCount === true && italicCount === true && decorationCount === false) {
            let e = document.createElement('span');
            e.style.fontWeight = "600";
            e.style.fontStyle = "normal";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            italicCount = false;
            return range.insertNode(e)
          }
          if(boldCount === true && italicCount === true && decorationCount === true) {
            let e = document.createElement('span');
            e.style.fontWeight = "600";
            e.style.fontStyle = "normal";
            e.style.textDecoration = "underline";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            italicCount = false;
            return range.insertNode(e)
          }
          if(boldCount === false && italicCount === true && decorationCount === true) {
            let e = document.createElement('span');
            e.style.fontWeight = "400";
            e.style.fontStyle = "normal";
            e.style.textDecoration = "underline";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            italicCount = false;
            return range.insertNode(e)
          }
        }
      }

      if(method === "decoration") {
        console.log("yes")
        let sel = window.getSelection(); // Gets selection

        if (sel.rangeCount) {
        // Creates a new element, and insert the selected text with the chosen font inside
          if(boldCount === false && italicCount === false && decorationCount === false) {
            let e = document.createElement('span');
            e.style.textDecoration = "underline";
            e.innerHTML = sel.toString();
  
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            decorationCount = true;
            return range.insertNode(e)
          } 
          if(boldCount === true && italicCount === false && decorationCount === false) {
            let e = document.createElement('span');
            e.style.fontWeight = "600";
            e.style.textDecoration = "underline";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            decorationCount = true;
            return range.insertNode(e)
          }
          if(boldCount === false && italicCount === true && decorationCount === false) {
            let e = document.createElement('span');
            e.style.fontWeight = "400";
            e.style.fontStyle = "italic";
            e.style.textDecoration = "underline";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            decorationCount = true;
            return range.insertNode(e)
          }
          if(boldCount === false && italicCount === true && decorationCount === true) {
            let e = document.createElement('span');
            e.style.fontStyle = "italic";
            e.style.textDecoration = "none";
            e.innerHTML = sel.toString();
            console.log("Worked!")
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            decorationCount = false;
            return range.insertNode(e)
          } 
          if(boldCount === false && italicCount === false && decorationCount === true) {
            let e = document.createElement('span');
            console.log("shiiish")
            e.style.textDecoration = "none";
            e.innerHTML = sel.toString();
  
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            decorationCount = false;
            return range.insertNode(e)
          } 
          if(boldCount === true && italicCount === false && decorationCount === true) {
            let e = document.createElement('span');
            e.style.fontWeight = "600";
            e.style.textDecoration = "none";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            decorationCount = false;
            return range.insertNode(e)
          }
          if(boldCount === true && italicCount === true && decorationCount === true) {
            let e = document.createElement('span');
            e.style.fontWeight = "600";
            e.style.fontStyle = "italic";
            e.style.textDecoration = "none";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            decorationCount = false;
            return range.insertNode(e)
          }
          if(boldCount === true && italicCount === true && decorationCount === false) {
            let e = document.createElement('span');
            e.style.fontWeight = "600";
            e.style.fontStyle = "italic";
            e.style.textDecoration = "underline";
            e.innerHTML = sel.toString();
            let range = sel.getRangeAt(0);
            range.deleteContents(); // Deletes selected text…
            range.insertNode(e); // … and inserts the new element at its place
            decorationCount = true;
            return range.insertNode(e)
          }
        }
      }
      
    }
      
  