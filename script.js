const getS = (selector) => document.querySelector(selector);

getS(".btn-edit").addEventListener("click", function () {
  getS(".edit-block").classList.add("show");
  getS(".style-block").classList.remove("show");
  // const content = getS('.top-block').innerHTML;
  // getS('.edit-area').value = content;
  getS(".edit-area").value = getS(".top-block").innerHTML;
});

getS(".btn-save").addEventListener("click", function () {
  getS(".edit-block").classList.remove("show");
  getS(".top-block").innerHTML = getS(".edit-area").value;
});

getS(".btn-style").addEventListener("click", function () {
  getS(".style-block").classList.add("show");
  getS(".edit-block").classList.remove("show");
});

function fontSize() {
  // console.log(event.target.value);
  getS(".top-block").style.fontSize = event.target.value;
}

let fF = document.getElementById("fontFamily");
fF.addEventListener("change", function () {
  // console.log(e.target.value);
  // console.log(this.value);
  getS(".top-block").style.fontFamily = this.value;
});




let colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "gray",
  "black",
  "white",
  "deeppink",
];
for (let i = 0; i < getS(".colors").children.length; i++) {
  getS(".colors").children[i].style.backgroundColor = colors[i];

  getS(".colors").children[i].addEventListener("click", function () {
    getS(".top-block").style.color = this.style.backgroundColor;
    getS(".colors").classList.add("hide");
  });
}

getS(".btn-text-color").addEventListener("click", function () {
  getS(".colors").classList.remove("hide");  
});

let colors1 = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "gray",
    "black",
    "white",
    "deeppink",
  ];
  for (let i = 0; i < getS(".colors1").children.length; i++) {
    getS(".colors1").children[i].style.backgroundColor = colors1[i];
  
    getS(".colors1").children[i].addEventListener("click", function () {
      getS(".top-block").style.background = this.style.backgroundColor;
      getS(".colors1").classList.add("hide");
    });
  }
getS(".btn-bg-color").addEventListener("click", function () {
    getS(".colors1").classList.remove("hide");  
  });

/* start function bold style */



function fontWeight() {
//   console.log(event.target.checked);
  if (event.target.checked) {
    getS(".top-block").classList.add("bold");
  } else {
    getS(".top-block").classList.remove("bold");
  }
}

function fontWeight1() {
    // console.log(event.target.checked);
    if (event.target.checked) {
      getS(".top-block").classList.add("cursive");
    } else {
      getS(".top-block").classList.remove("cursive");
    }
  }

/* end function bold style */

getS(".btn-add").addEventListener("click", function () {
  getS(".first").classList.remove("show");
  getS(".second").classList.add("show");
});

getS(".btn-create-list").addEventListener("click", function () {
  
  const list = document.forms["form-list"];
  const countLi = list.count.value;
  const typeLi = list.type.value;
  getS(".edit-area").value += `<ul style="list-style-type: ${typeLi}">`;
  for (let i = 0; i < countLi; i++) {
    getS(".edit-area").value += `<li>item ${i + 1}</li>`;
  }
  getS(".edit-area").value += "</ul>";

  getS(".first").classList.add("show");
  getS(".second").classList.remove("show");
});

getS(".block-list").addEventListener("click", function () {
  getS(".create-list").classList.add("show");
  getS(".table-list").classList.remove("show");
});

getS(".block-table").addEventListener("click", function () {
  getS(".table-list").classList.add("show");
  getS(".create-list").classList.remove("show");
});

function tableBtn() {
  const formTable = document.forms["form-table"];
  const createTableTR = formTable.countTR.value;
  const createTableTD = formTable.countTd.value;

  const borderStyle = document.forms["form-table-style"];
  const borderWidth = borderStyle.type1.value;
  const borderType = borderStyle.type2.value;
  const borderColor = borderStyle.type3.value;

  const width = getS(".count-add-input").value;
  const height = getS(".type-add-input").value;

  getS(
    ".edit-area"
  ).value += `<table border="0" cellspacing="0" style=" border: ${borderWidth}px ${borderType} ${borderColor}">`;
  for (let i = 0; i < createTableTR; i++) {
    getS(".edit-area").value += `<tr>`;
    for (let i = 0; i < createTableTD; i++) {
      getS(
        ".edit-area"
      ).value += `<td style="height:${height}px; width:${width}px; border: ${borderWidth}px ${borderType} ${borderColor}"> td </td>`;
    }
  }
  getS(".edit-area").value += "</table>";
}
getS(".btn-create-list2").addEventListener("click", function () {
  tableBtn();
  getS(".first").classList.add("show");
  getS(".second").classList.remove("show");
});
