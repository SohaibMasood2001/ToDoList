
      function clear_item() {
            document.getElementById("item-list").innerHTML = "";
        }
        function adder() {
            let input_item = document.getElementById("item-input");

            if (input_item.value != "") {
                let input_val = input_item.value;
                if (input_val.length > 26) {
                    alert("Only 26 Strings are allowed");
                }
                else {
                    let item_div = document.createElement("div");
                    item_div.classList.add("items");
                    document.getElementById("item-list").append(item_div);
                    let val_span = document.createElement("span");
                    val_span.classList.add("val-span");
                    item_div.append(val_span);
                    val_span.innerHTML = input_item.value;
                    let item_btn_span = document.createElement("span");
                    item_btn_span.classList.add("inner-btn-span");
                    item_btn_span.innerHTML = `<button class="task-inner-btn" id="tick" onclick = "complete_task()"><img src="tick.png" class="inner-item-img"></button>
                                           <button class="task-inner-btn" id="del" onclick = "delete_task()"><img src="del.png" class="inner-item-img"></button>`;
                    item_div.append(item_btn_span);
                }
            }
            else {
                alert("Please Enter task in input field");
            }
        }
        function complete_task() {
            let val_span = document.querySelectorAll(".val-span");
            let input_item = document.getElementById("item-input");
            val_span.forEach(element => {
                if (element.innerHTML == input_item.value) {
                    element.innerHTML = `${element.innerHTML} (Done)`;
                }
                else {
                    alert("Please enter task name in input field then click on done")
                }
            });
        }
        function delete_task() {
            let items_div = document.querySelectorAll(".items");
            let del_b = document.getElementById("del");
            let input_item = document.getElementById("item-input");

            items_div.forEach(element => {
                if (element.firstChild.innerText.includes(input_item.value)) {
                    element.remove();
                }
                else {
                    alert("Please enter task name then delete");
                }
            });
        }
        function remind_task() {
            let r = document.getElementById("reminder_div")
            r.style.display = "block";
        }
        function Cancel_reminder() {
            let r = document.getElementById("reminder_div")
            r.style.display = "none";
        }
        let tm_sp;
        function set_remind() {

            let t_name = document.getElementById("rt-name");
            let val_span = document.querySelectorAll(".val-span");
            let time = document.getElementById("tm");
            val_span.forEach(element1 => {
                if (element1.innerText.includes(t_name.value)) {
                    let time_span = document.createElement("span")
                    time_span.setAttribute("id", "set-time");
                    time_span.innerHTML = time.value;
                    tm_sp = time_span.innerHTML;
                    console.log(tm_sp);
                    let items_div = document.querySelectorAll(".items");
                    items_div.forEach(element2 => {
                        if (element2.firstChild.innerText.includes(t_name.value)) {
                            if (!element2.lastChild.innerText.includes(time.value)) {
                                element2.appendChild(time_span);
                            }
                            else {
                                alert("Reminder Already Set");
                            }
                        }
                        else {
                            alert("Please Enter correcet name of task added in list");
                        }

                    });
                }
                else {
                    alert("Please Enter correcet name of task added in list");
                }
            });


        }

        function return_time() {
            let dt = new Date();
            let th = dt.getHours();
            let tm = dt.getMinutes();
            return (th + ":" + tm)
        }
        setInterval(return_time, 1000);
        function alarm_play() {


            let ad = new Audio("tr.mp3");
            let tm_span = document.getElementById("set-time");
            let al_container = document.getElementById("alarm-msg-container");
            let val_span = document.querySelectorAll(".val-span");
            if (tm_span.innerHTML = return_time()) {
                val_span.forEach(element => {
                    if (tm_span.innerHTML == return_time()) {
                        al_container.style.display = "flex";
                        let element_rep = element.innerText.replace("(Done)", "");
                        al_container.innerHTML = `<span>Assalam-U-Allikum</span><br>
                                   <span id="task-remind">its your ${element_rep} time</span>`;
                        ad.play();

                    }
                });

            }
        }

        function tm_spf() {
            if (tm_sp == return_time()) {
                setTimeout(alarm_play, 1000);
            }

        }
        setInterval(tm_spf, 20000);


    