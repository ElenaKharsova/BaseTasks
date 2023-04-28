import * as taskFunctions from "./tasksImports";

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
            <div>Вывести в консоль сумму всех целых чисел от 50 до 
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
        <li>
            <h2>Homework 5</h2>
            <ul>
                <li>
            <div class="li">
            <h3>Task 1</h3>
            <div>Выведите в консоль сумму всех элементов массива</div>
            <button id="">Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 2</h3>
            <div>Создайте новый массив на основе исходного, в 
            котором каждый элемент будет вдвое больше 
            элемента исходного массива с таким же индексом. 
            (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
            массив)</div>
            <button id="">Solution</button>
            </div>
                </li>
                <li>
            <div class="li">
            <h3>Task 3</h3>
            <div>*Найдите и выведите в консоль наибольший и 
            наименьший элементы исходного массива</div>
            <button id="">Solution</button>
            </div>
                </li>
            </ul>    
        </li>
    </ul>`;

  mainElement
    .querySelector("#sumMultiplication")
    .addEventListener("click", taskFunctions.sum);
  mainElement
    .querySelector("#sumMultiplication")
    .addEventListener("click", taskFunctions.multiplication);
  mainElement
    .querySelector("#countStringSymbols")
    .addEventListener("click", taskFunctions.countStringSymbols);
  mainElement
    .querySelector("#sumUserNumber")
    .addEventListener("click", taskFunctions.sumUserNumber);

  mainElement
    .querySelector("#maxNumber")
    .addEventListener("click", taskFunctions.maxNumber);
  mainElement
    .querySelector("#monthsPresented")
    .addEventListener("click", taskFunctions.monthsPresented);
  mainElement
    .querySelector("#isCircleFitToSquare")
    .addEventListener("click", taskFunctions.isCircleFitToSquare);

  mainElement
    .querySelector("#sumNaturalNumbers")
    .addEventListener("click", taskFunctions.sumNaturalNumbers);
  mainElement
    .querySelector("#multiplacationTable")
    .addEventListener("click", taskFunctions.multiplacationTable);
  mainElement
    .querySelector("#arithmeticMean")
    .addEventListener("click", taskFunctions.arithmeticMean);

  mainElement
    .querySelector("#objects")
    .addEventListener("click", taskFunctions.objects);
}