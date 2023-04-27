import { sum, multiplication, countStringSymbols } from "./Homework1/task1";
import { sumUserNumber } from "./Homework1/task1_3";
import { monthsPresented } from "./Homework2/task2_3";
import { isCircleFitToSquare, maxNumber } from "./Homework2/task2";

export function createMainPage(element) {
  const mainElement = element;
  mainElement.classList.add("wrap", "mainPage");
  mainElement.innerHTML = `<h1>Tasks</h1>
    <ul>
        <li>
            <h2>Homework 1</h2>
            <ul>
            <li>
            <div class="li">
            <h3>Task 1</h3>
            <div>В переменных a и b хранятся числа. Написать 
            программу, которая выводит в консоль произведение 
            и сумму этих чисел.</div>
            <button id="sumMultiplication" disabled>Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 2</h3>
            <div>В двух переменных хранятся строки символов. 
            Написать программу, которая выведет в консоль 
            суммарное количество символов в обоих строках</div>
            <button id="countStringSymbols" disabled>Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 3</h3>
            <div>Написать программу, которая запрашивает у пользователя ввод
             трёхзначного числа, а потом выводит в консоль сумму цифр введённого
             числа</div>
            <button id="sumUserNumber">Solution</button>
            </div>
                </li>
            </ul>
        </li>
        <li>
            <h2>Homework 2</h2>
            <ul>
                <li>
            <div class="li">
            <h3>Task 1</h3>
            <div>В переменных a и b хранятся числа. Вывести в 
            консоль наибольшее из них</div>
            <button id="maxNumber" disabled>Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 2</h3>
            <div>Запросить у пользователя ввод числа от 1 до 12. 
            Вывести в консоль название месяца, соответствующее 
            этому числу (1 — январь, 2 — февраль и т.д.)</div>
            <button id="monthsPresented">Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 3</h3>
            <div>В переменных circle и square хранятся площади круга 
            и квадрата соответственно. Написать программу, 
            которая определяет, поместится ли круг в квадрат</div>
            <button id="isCircleFitToSquare" disabled>Solution</button>
            </div>
                </li>
            </ul>
        </li>
        <li>
            <h2>Homework 3</h2>
            <ul>
                <li>
            <div class="li">
            <h3>Task 1</h3>
            <div>1.Вывести в консоль сумму всех целых чисел от 50 до 
            100</div>
            <button id="sumNaturalNumbers">Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 2</h3>
            <div>Вывести в консоль таблицу умножения на 7</div>
            <button id="multiplacationTable">Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 3</h3>
            <div>Запросить у пользователя ввод числа N. Вывести в 
            консоль среднее арифметическое всех нечётных
            чисел от 1 до N</div>
            <button id="arithmeticMean">Solution</button>
            </div>
                </li>
            </ul>    
        </li>
        <li>
            <h2>Homework 4</h2>
            <div class="li">
            <div>Создайте объект user, содержащий поле name со 
            значением ‘John’.<br/>
            1.Запросить у пользователя ввод числа. Записать 
            введенное значение в поле age объекта user.<br/>
            2.Создать копию объекта user с именем admin. 
            Добавить новому объекту поле role со значением 
            ‘admin’.<br/>
            *Записать все значения полей объекта admin в 
            отдельные переменные. Имена переменных
            должны совпадать с названиями полей</div>
            <button id="objects">Solution</button>
            </div>
        </li>
    </ul>`;

  mainElement
    .querySelector("#sumMultiplication")
    .addEventListener("click", sum);
  mainElement
    .querySelector("#sumMultiplication")
    .addEventListener("click", multiplication);
  mainElement
    .querySelector("#countStringSymbols")
    .addEventListener("click", countStringSymbols);
  mainElement
    .querySelector("#sumUserNumber")
    .addEventListener("click", sumUserNumber);

  mainElement.querySelector("#maxNumber").addEventListener("click", maxNumber);
  mainElement
    .querySelector("#monthsPresented")
    .addEventListener("click", monthsPresented);
  mainElement
    .querySelector("#isCircleFitToSquare")
    .addEventListener("click", isCircleFitToSquare);

  mainElement
    .querySelector("#sumNaturalNumbers")
    .addEventListener("click", sumNaturalNumbers);
  mainElement
    .querySelector("#multiplacationTable")
    .addEventListener("click", multiplacationTable);
  mainElement
    .querySelector("#arithmeticMean")
    .addEventListener("click", arithmeticMean);

  mainElement.querySelector("#objects").addEventListener("click", objects);
}
