import React, { useState } from 'react';

/*
React 의 장점

1. 리엑트에서는 비지니스 로직과 UI 코드가 분리되어 있다.

하단 소스에서 보면 onAdd, onDelete 등 비지니스 로직 부분과 return 하는 JSX 로 작성된 UI 코드가 분리되어 있다.
따라서, UI 는 JSX 에서 한번만 작성하면 크게 신경쓰지 않아도 되고, 화면에 무엇을 그리는지를 나타내고 있어 한눈에 파악하기가 쉽다.

기존 Javscript 의 문법을 우리는 "명령형 프로그래밍"이라 하고 아래 코드 같이 작성된 코드를 "선언형 프로그래밍"이라 부른다.

기존 Javascript 로 작성된 문법들은 결과가 어떻게 그려질지 한눈에 보이지 않지만, React 를 사용한 코드는 UI 가 어떠한 모습일지 한번에 파악할 수 있다.

즉, 추상화 단계가 더 높다고 할 수 있으며 이는 비지니스 로직에 집중할 수 있는 장점을 가지고 있다.

2. 재사용

비즈니스로직을 분리하여 해당 로직을 재사용하기에 편리하다.

기존 Javascript 로 작성될 경우 기능마다 새로운 로직을 작성해야 하는 경우가 많다.

*/
function App() {
   const [todoList, setTodoList] = useState([]);
   const [currentId, setCurrentId] = useState(1);
   const [desc, setDesc] = useState('');
   const [showOdd, setShowOdd] = useState(false);
   function onAdd() {
      const todo = { id: currentId, desc };
      setCurrentId(currentId + 1);
      setTodoList([...todoList, todo]);
   }
   function onDelete(e) {
      const id = Number(e.target.dataset.id);
      const newTodoList = todoList.filter(todo => todo.id !== id);
      setTodoList(newTodoList);
   }
   function onSaveToServer() {}

   return (
      <div>
         <h3>할 일 목록</h3>
         <ul>
            {todoList
               .filter((_, index) => (showOdd ? index % 2 === 0 : true))
               .map(todo => (
                  <li>
                     <span>{todo.desc}</span>
                     <button data-id={todo.id} onClick={onDelete}>
                        삭제
                     </button>
                  </li>
               ))}
         </ul>
         <input
            type="text"
            value={desc}
            onChange={e => {
               setDesc(e.target.value);
            }}
         />
         <button onClick={onAdd}>추가</button>
         <button onClick={() => setShowOdd(!showOdd)}>홀수 아이템만 보기 on/off</button>
         <button onClick={onSaveToServer}>서버에 저장</button>
      </div>
   );
}

export default App;
