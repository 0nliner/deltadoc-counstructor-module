    let dom_element = "";
    let isSelected = false;
    let text_buffer = "";
    let selected_component = null;
    let char_index = 0;

    function keyDownHandler (e) {
        let word_like_editor_dom = document.getElementById('WordLikeEditor');

        switch (e.key) {
            case "Enter":
                text_buffer = "";
                let new_block = document.createElement('div');
                new_block.id = String(word_like_editor_dom.children.length);
                word_like_editor_dom.appendChild(new_block);
                selected_component = new_block;
                break;

            default:
                text_buffer += e.key;
                // console.log(text_buffer);
                break;
        }

        if (selected_component) {
            selected_component.innerHTML = text_buffer;
        }
        else {
            word_like_editor_dom.lastChild.innerHTML = text_buffer;
        }
    }

    // ReactDOM.render(element, document.getElementById('root'));

    React.useEffect(() => {
        console.log(dom_element);
        let word_like_editor_dom = document.getElementById('WordLikeEditor');
        word_like_editor_dom.innerHTML = '';
        word_like_editor_dom.appendChild(dom_element);

        // TODO:
        // тут записываем новую версию элемента в стор
    })

    return (
        <div style={{borderRadius: 10,
            boxShadow: "0 0 7px 7px rgba(0, 0, 0, 0.3)",
            height: 800,
            width: 875,
            top: 200,
            left: 54,
            position: "absolute"
        }}
             onClick={e => {
                 // console.log(isSelected);
                 if (!isSelected) {
                     setSelected(true);
                     window.onkeydown = keyDownHandler;
                 }
                 else {
                     // функция, отслеживающая на какой компонент мы нажали и на какой символ устанавливать курсор
                     let x = e.clientX, y = e.clientY
                     let elementMouseIsOver = document.elementFromPoint(x, y);
                     selected_component = elementMouseIsOver;

                     if (selected_component.parentElement.id != "WordLikeEditor") return;

                     if (selected_component.innerHTML) {
                         text_buffer = selected_component.innerHTML;
                     }
                     console.log(selected_component);


                 }
             }}
             id={"WordLikeEditor"}
        >

        </div>
    );
}
