import { sumUserNumber } from "./Homework1/task1_3";

export function createMainPage(element) {
  const mainElement = element;
  mainElement.classList.add("wrap", "mainPage");
  mainElement.innerHTML = `<h1>Tasks</h1>
    <ul>
        <li>
            <h2>Homework 1</h2>
            <div class="li">
            <h3>Task 1</h3>
            <div>Написать программу, которая запрашивает у пользователя ввод
             трёхзначного числа, а потом выводит в консоль сумму цифр введённого
             числа</div>
            <button id="sumUserNumber">Solution</button>
            </div>
        </li>
        <li>
            <h2>Homework 2</h2>
            <div class="li">
            <h3>Task 2</h3>
            <div>Запросить у пользователя ввод числа от 1 до 12. 
            Вывести в консоль название месяца, соответствующее 
            этому числу (1 — январь, 2 — февраль и т.д.)</div>
            <button id="monthsPresented">Solution</button>
            </div>
            </li>
        <li>
            <h2>Homework 3</h2>
            <div class="li">
            <h3>Task 3</h3>
            <div>Запросить у пользователя ввод числа N. Вывести в 
            консоль среднее арифметическое всех нечётных
            чисел от 1 до N</div>
            <button id="arithmeticMean">Solution</button>
            </div>    
            </li>
        <li>
            <h2>Homework 4</h2>
            <div class="li">
            <div>Создайте объект user, содержащий поле name со 
            значением ‘John’.
            1.Запросить у пользователя ввод числа. Записать 
            введенное значение в поле age объекта user.
            2.Создать копию объекта user с именем admin. 
            Добавить новому объекту поле role со значением 
            ‘admin’.
            *Записать все значения полей объекта admin в 
            отдельные переменные. Имена переменных
            должны совпадать с названиями полей</div>
            <button id="arithmeticMean">Solution</button>
            </div>
        </li>
    </ul>`;

  mainElement.addEventListener("click", sumUserNumber);
  mainElement.addEventListener("click", monthsPresented);
  mainElement.addEventListener("click", arithmeticMean);
}
