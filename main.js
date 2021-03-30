"use strict";

{
  var node = document.querySelectorAll("td.table_point");
  var node1 = document.querySelectorAll("tr td.table_chart");

  let sum = 0;

  for (let i = 0; i < node.length; i++) {
    sum += node[i].textContent - 0;
  }
  sum /= node.length;

  console.log(sum);

  let koumoku = [0, 0, 0, 0, 0];

  for (let i = 0; i < node1.length; i++) {
    koumoku[i % 5] += node1[i].textContent - 0;
  }
  const temp = node1.length / 5;

  for (let i = 0; i < 5; i++) {
    koumoku[i] /= temp;
    console.log(koumoku[i]);
  }

  let str = ["音程", "安定性", "表現力", "リズム", "VL"];

  let a = document.createElement("ul");
  document.body.appendChild(a);

  let tempnode = document.createElement("li");
  tempnode.textContent = "平均点数は" + sum;
  a.appendChild(tempnode);


  for (let i = 0; i < 5; i++) {
    let node2 = document.createElement("li");
    node2.textContent = str[i] + "は" + koumoku[i];
    a.appendChild(node2);
  }

  a.style.margin = '0 auto';
  a.style.width = '500px';
  a.style.border = '1px solid black';

}